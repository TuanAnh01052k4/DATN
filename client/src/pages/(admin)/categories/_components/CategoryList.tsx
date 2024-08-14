import { PlusOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Button, Popconfirm, Space, Switch, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import instance from '../../../../common/config/axios';
import useCategoryMutation from '../../../../common/hooks/categories/useCategoryMutation';
import useCategoryQuery from '../../../../common/hooks/categories/useCategoryQuery';
import { ICategories } from '../../../../common/interfaces/categories';

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<ICategories[]>([]);

  const query = useCategoryQuery();
  const mutation = useCategoryMutation()
  useEffect(() => {
    if (query.data) {
      const newCategories = query.data.map((category: ICategories, index: number) => ({
        ...category,
        key: index + 1, // Đảm bảo `key` là duy nhất
      }));
      setCategories(newCategories);
    }
  }, [query.data]);

  // if (query.isLoading) return <p>Loading...</p>;
  // if (query.isError) return <p>Error fetching categories.</p>;

  const handleStatusChange = async (checked: boolean, record: ICategories) => {
    const newStatus = checked ? 'Hoạt động' : 'Không hoạt động';
    try {
      await instance.put(`/categories/${record._id}`, {
        ...record,
        status: newStatus,
      });
      setCategories(categories.map((item: ICategories) =>
        item._id === record._id ? { ...item, status: newStatus } : item
      ));
    } catch (error) {
      console.log(error);
    }
  };

  const columns: TableColumnsType<ICategories> = [
    {
      title: "#",
      dataIndex: "key", // Thay đổi từ `id` sang `key` nếu cần
      sorter: (a : any, b : any) => a.key - b.key,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      filterSearch:true,
      filters: Array.from(new Set(categories.map(category => category.name))).map(name => ({
        text: name,
        value: name,
      })),
      onFilter: (value : any, record : ICategories) => record.name.includes(value),
    },
    {
      title: "Slug",
      dataIndex: "slug",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (_, record) => (
        <Switch
          size="small"
          checked={record.status === 'Hoạt động'}
          onChange={(checked) => handleStatusChange(checked, record)}
        />
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
              <Popconfirm
                  title="Delete the category"
                  description="Are you sure to delete this category?"
                  onConfirm={() => mutation.mutate({action : "delete", category : record})}
                  okText="Yes"
                  cancelText="No"
              >
                  <Button danger>Delete</Button>
              </Popconfirm>
              <Link to={`edit/${record._id}`}><Button type='primary'>Update</Button></Link>
          </Space>
      ),
  }
];


  
  const rowClassName = (record: ICategories) => {
    return record.status === 'Không hoạt động' ? 'bg-gray-200' : '';
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className='font-semibold text-[20px]'>DANH MỤC</h1>
        <Link to={`/admin/categories/add`}><Button type='primary'><PlusOutlined />Danh mục</Button></Link>
      </div>
      <div className='h-[550px] overflow-y-scroll mt-2'>
        <Table loading={query.isLoading ? query.isLoading : mutation.isPending} columns={columns} dataSource={categories} rowClassName={rowClassName}  />
      </div>
    </>
  );
};

export default CategoryList;
