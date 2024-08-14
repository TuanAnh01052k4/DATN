/* eslint-disable @typescript-eslint/no-explicit-any */
import { PlusOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, Divider, Form, Input, InputNumber, InputRef, message, Radio, Select, Space, Switch } from 'antd'
import React, {  useEffect, useRef, useState } from 'react'
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import useCategoryQuery from '../../../../../common/hooks/categories/useCategoryQuery';
import { ICategories } from '../../../../../common/interfaces/categories';
import useCategoryMutation from '../../../../../common/hooks/categories/useCategoryMutation';
import { Iproduct, IproductInfor } from '../../../../../common/interfaces/product';
import useProductMutation from '../../../../../common/hooks/products/useProductMutation';
type FormInforUpdateProps = {
    product:Iproduct
}
const FormInforUpdate = ({product}:FormInforUpdateProps) => {
    const [form] =Form.useForm()
    const [name, setName] = useState<string>('');
    const inputRef = useRef<InputRef>(null);
    const categoriesQuery = useCategoryQuery()
    const categoriesMutation = useCategoryMutation()
    const productMutation = useProductMutation()
    useEffect(()=>{
        form.setFieldsValue(product)
        form.setFieldValue('categoryId',product?.categoryId?._id)
    },[product,form])
    const onChangePriceNew:any = (priceNew:number) =>{
       const priceOld = form.getFieldValue('price_old')
       if(priceNew > priceOld ){
        form.setFieldValue('price_new', 0)
        return message.error('Vui lòng không nhập cao hơn giá niêm yết')
       }
        if(priceOld){
            const discount = Math.ceil((priceOld - priceNew) / priceOld  * 100)
            form.setFieldValue('discount', discount)
        }
    }
 
    const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
       if(name == ''){
        message.error("Vui lòng nhập dữ liệu !")
       }else{
        categoriesMutation.mutate({action:'add',category:{name:name},isOther:true})
        setName('');
       }
        setTimeout(() => {
            inputRef.current?.focus();
        }, 0);
    };
    const onSubmit = async(data:IproductInfor) => {
       const newData:IproductInfor={
        ...data,
        _id: product._id
       } 
        productMutation.mutate({action:'updateInfor',productInfor:newData})
    }
    return (
        <Form form={form} name="basic" layout="vertical" onFinish={onSubmit} disabled={productMutation.isPending}>
            <div className=" py-3">
                {/* Thông tin  */}
                    <div className="grid grid-cols-2 gap-x-4" >
                        <Form.Item
                            label="Tên sản phẩm"
                            name={'name'}
                            rules={[{ required: true, message: "Bắt buộc nhập" }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Danh mục sản phẩm"
                            name='categoryId'
                            rules={[{ required: true, message: "Bắt buộc nhập" }]}
                        >
                            <Select
                                loading={categoriesQuery.isLoading?categoriesQuery.isLoading:categoriesMutation.isPending}
                                placeholder="custom dropdown render"
                                dropdownRender={(menu) => (
                                    <>
                                        {menu}
                                        <Divider style={{ margin: '8px 0' }} />
                                        <Space style={{ padding: '0 8px 4px' }}>
                                            <Input
                                                placeholder="Please enter item"
                                                ref={inputRef}
                                                value={name}
                                                onChange={(event)=> setName(event.target.value)}
                                                onKeyDown={(e) => e.stopPropagation()}
                                            />
                                            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
                                                Add item
                                            </Button>
                                        </Space>
                                    </>
                                )}
                                options={categoriesQuery?.data?.map((item:ICategories) => ({ label:item.name, value: item._id }))}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Giá niêm yết (đ)"
                            name={'price_old'}
                            rules={[{ required: true, message: "Bắt buộc nhập" }]}
                        >
                            <InputNumber className="w-full" />
                        </Form.Item>
                        <div className="flex items-center gap-x-3">
                            <Form.Item
                                label="Giá ưu đãi (đ)"
                                name={'price_new'}
                                className="basis-1/2"
                                rules={[{ required: true, message: "Bắt buộc nhập" }]}
                            >
                                <InputNumber className="w-full" onChange={onChangePriceNew} />
                            </Form.Item>
                            <Form.Item
                                label="Khuyến mại (%)"
                                name={'discount'}
                                className="basis-1/2"
                                rules={[{ required: true, message: "Bắt buộc nhập" },{type:'number',min:0,message:"Không để giá trị âm"}]}
                            >
                                <InputNumber className="w-full" disabled />
                            </Form.Item>
                        </div>
                        <Form.Item
                            label="Giới tính"
                            name={'gender'}
                            rules={[{ required: true, message: "Bắt buộc nhập" }]}
                        >
                            <Radio.Group>
                                <Radio value="male">Nam</Radio>
                                <Radio value="female">Nữ</Radio>
                                <Radio value="unisex">Cả nam nữ</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <div className="flex items-center gap-x-3">
                            <Form.Item
                                label="Nổi bật"
                                name={'featured'}
                                className="basis-1/2"
                            >
                                <Switch />
                            </Form.Item>
                            <Form.Item
                                label="Hoạt động"
                                name={'status'}
                                className="basis-1/2"
                            >
                                <Switch defaultValue={true} />
                            </Form.Item>
                        </div>
                    </div>
             
                {/* Mô tả  */}
                <div className="px-5 basis-1/2 w-max mx-auto ">
                    <Form.Item
                        label="Mô tả sản phẩm"
                        name={'description'}
                        

                    >
                        <ReactQuill className="w-[500px]" />
                    </Form.Item>
                </div>
                <Form.Item className='w-max mx-auto'>
                        <Button type="primary" htmlType="submit"><SaveOutlined />Cập nhật thông tin</Button>
                </Form.Item>
            </div>
        </Form>
    )
}

export default FormInforUpdate