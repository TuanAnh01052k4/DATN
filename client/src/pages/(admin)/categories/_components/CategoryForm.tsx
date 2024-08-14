import { BackwardOutlined } from '@ant-design/icons'
import { Button, Form, Input, Space } from 'antd'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useCategoryMutation from '../../../../common/hooks/categories/useCategoryMutation'
import useCategoryQuery from '../../../../common/hooks/categories/useCategoryQuery'
import { ICategories } from '../../../../common/interfaces/categories'
import FormItem from 'antd/es/form/FormItem'

type Props = {}

const CategoriesForm = () => {
    const {id} = useParams();
    const [form] = Form.useForm()
    const mutation = useCategoryMutation()

    const {data} = useCategoryQuery(id);
    
    useEffect(() => {

        if(!id) return

        form.setFieldsValue(data)

    }, [data, form , id])

    const onSubmit = (category: ICategories)=>{

        if (id) {
            mutation.mutate({action : "update", category  : {_id : id, ...category}})
            return
        }
        mutation.mutate({action : "add", category})
    }
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className='font-semibold text-[20px]'> {id ? "CẬP NHẬT DANH MỤC" : "THÊM MỚI DANH MỤC"}</h1>
        <Link to={`/admin/categories`}><Button type='primary'><BackwardOutlined />Quay lại</Button></Link>
      </div>
        <Form form={form} layout="vertical" onFinish={onSubmit} initialValues={{ status: 'Hoạt động' }}>
      <Form.Item name="name" label="Name" rules={[{ required: true,message:"Không được bỏ trống" }]}>
        <Input />
      </Form.Item>
      <FormItem label="Trạng thái" name="status" hidden>
        <Input />
      </FormItem>
      <Form.Item>
        <Space>
          <Button type='primary' htmlType='submit'>Submit</Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
    </div>
  )
}

export default CategoriesForm