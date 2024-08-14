
import { CloseOutlined, DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  ColorPicker,
  Form,
  Input,
  Popconfirm,
  Space,
  Table,
} from "antd";
import useColorMutation from "../../../common/hooks/color/useColorMutation";
import { IColor } from "../../../common/interfaces/Color";
import useColorQuery from "../../../common/hooks/color/useColorQuery";
import { useEffect, useState } from "react";

const LayoutColor = () => {
  const [form] = Form.useForm()
  const colorMutation = useColorMutation();
  const colorQuery = useColorQuery();
  const [colors, setColors] = useState([] as IColor[]);
  const [isOpen, setIsOpen] = useState(false)
  const [optionForm, setOptionForm] = useState('add')
  const [id,setId] = useState<number|string|undefined>(0)
  useEffect(() => {
    if (colorQuery.data) {
      const newColors = colorQuery.data.map((item: IColor, index: number) => ({
        ...item,
        key: index + 1,
      }));
      setColors(newColors);
    }
  }, [colorQuery.data]);
  const columns = [
    {
      title: "STT",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên màu sắc",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Background",
      dataIndex: "background",
      key: "background",
      render: (background: string) => (
        <div
          className="border rounded-full size-8"
          style={{ background: background }}
        ></div>
      ),
    },
    {
      title: "Chức năng",
      key: "actions",
      render: (color: IColor) => (
        <Space>
          <Popconfirm
            title="Xóa màu sắc"
            description="Bạn có muốn xóa không ?"
            cancelText="Không"
            okText="Có"
            onConfirm={() =>
              colorMutation.mutate({ action: "delete", color: color })
            }
          >
            <Button type="primary" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
          <Button className="text-white bg-yellow" onClick={() => { setId(color._id);form.setFieldsValue({...color,background: color.background.slice(1)}); setIsOpen(true);setOptionForm('update') }} >
            <EditOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  const onFinish = (values: { name: string; background: string }) => {
    if(optionForm == 'add'){
    const newValue: IColor = {
      name: values.name.toLocaleUpperCase(),
      background: `#${values.background}`,
    };
    colorMutation.mutate({ action: "add", color: newValue });
    setIsOpen(false)
    }else{
      const newColor = {
        name: values.name.toLocaleUpperCase(),
        background: `#${values.background}`,
        _id:id
      }
     colorMutation.mutate({action:'update', color:newColor})
     setIsOpen(false)
    }
  };
  return (
    <div>
      <Button type="primary" className="mb-3" onClick={()=>{setIsOpen(true);setOptionForm('add');form.resetFields()}}><PlusOutlined /> Thêm màu sắc</Button>
      <div className="h-[550px] overflow-y-scroll">
      <Table loading={colorQuery.isLoading?colorQuery.isLoading : colorMutation.isPending} columns={columns} dataSource={colors} />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black/40">
          <div className="w-[500px] p-6 rounded-md bg-white relative">
            <h1 className="mb-4 text-lg font-semibold text-center">Thêm màu sắc</h1>
            <Button  onClick={()=>{setIsOpen(false)}} className="absolute rounded-full right-2 top-2 size-8"><CloseOutlined /></Button>
            <Form form={form} name="basic" onFinish={onFinish}>
              <Form.Item
                label="Tên màu sắc"
                name="name"
                rules={[{ required: true, message: "Bắt buộc nhập tên màu sắc!" }]}
              >
                <Input />
              </Form.Item>
              <div className="flex items-center gap-x-2">
                <Form.Item
                  label="Màu sắc"
                  name="background"
                  rules={[{ required: true, message: "Bắt buộc nhập màu sắc!" }]}
                >
                  <Input className="w-32" />

                </Form.Item>
                <ColorPicker className="mx-5" />
              </div>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LayoutColor;
