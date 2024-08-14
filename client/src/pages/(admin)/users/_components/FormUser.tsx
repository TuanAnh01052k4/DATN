import { useEffect, useState } from 'react'

import { Button, DatePicker, Form, Input, Select, Space } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import moment from 'moment';
import useApiLocationQuery from '../../../../common/hooks/API_location/useApiLocationQuery';
import useUserMutation from '../../../../common/hooks/users/useUserMutation';
import { Iuser } from '../../../../common/interfaces/auth';
type FormUserProps = {
    data: any,
    setUser: any
}
const FormUser = ({ data, setUser }: FormUserProps) => {
    const queryDataLocation = useApiLocationQuery()
    const [huyen, setHuyen] = useState([])
    const [xa, setXa] = useState<any>([])
    const [isOpen, setIsOpen] = useState(false)
    const [form] = Form.useForm()
    const [inputStatus, setInputStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [optionForm, setOptionForm] = useState('add');
    const [id, setId] = useState<number | string>()
    const mutation = useUserMutation()
    useEffect(() => {
        if (data) {
            setIsOpen(true)
            setId(data._id)
            form.setFieldsValue({ ...data, date: moment() })
            setOptionForm('update')
        }
    }, [data])
    useEffect(() => {
        if (queryDataLocation.data) {
            queryDataLocation.data
        }
    }, [queryDataLocation.data])
    const onChangeTinh = (tinh: string) => {
        if (tinh !== '') {
            const newDataTinh = queryDataLocation?.data?.find((item: any) => item.name == tinh)
            setHuyen(newDataTinh.data2)
        }
    }
    const onChangeHuyen = (data: string) => {
        if (data !== '') {
            const newDataHuyen: any = huyen.find((item: any) => item.name == data)
            setXa(newDataHuyen.data3)
        }
    }
    const onSubmit = (user: Iuser) => {
        if (optionForm == 'add') {
            mutation.mutate({ action: 'add', user: user })
            setIsOpen(false)
        } else {
            const newUser = {
                _id: id,
                ...user
            }
            mutation.mutate({ action: 'update', user: newUser })
            setIsOpen(false)

        }
    };
    const handleChange = (e: any) => {
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            // Nếu là số, xóa thông báo lỗi
            setInputStatus('');
            setErrorMessage('');
        } else {
            // Nếu không phải số, hiển thị thông báo lỗi
            setInputStatus('error');
            setErrorMessage('Chỉ được nhập số!');
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Danh sách User</h1>
                <Button type="primary" onClick={() => { setIsOpen(!isOpen), form.resetFields(), setOptionForm('add'); setUser(null) }} >
                    <PlusCircleFilled className="pr-2" /> Add
                </Button>
            </div>
            <div className={`${isOpen ? "" : "hidden"}`}>
                <div className='fixed flex items-center justify-center top-0 left-0 w-full h-full bg-black/45 z-[51]'>
                    <div className='w-[800px] h-auto mx-auto bg-white rounded-lg' >
                        <div className="border-b">
                            <div className="flex items-center justify-between px-5 py-4" >
                                <span className="text-black text-xl font-semibold">{optionForm == 'add' ? "Add User" : "Update User"}</span>
                                <button onClick={() => { setIsOpen(!isOpen), setUser(null) }}><i className="fa-solid fa-xmark" /></button>
                            </div>
                        </div>
                        <Form form={form} onFinish={onSubmit} layout="vertical" autoComplete="on" className='px-10 py-2'>
                            <div className='grid grid-cols-2 gap-4'>
                                <Form.Item<Iuser> name="firstname" label="FirstName" rules={[{ required: true, message: "Please enter firstname!" }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item<Iuser> name="lastname" label="LastName" rules={[{ required: true, message: "Please enter latstname!" }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <Form.Item<Iuser> name="email" label="Email" rules={[{ required: true, message: "Please enter email!" }, { type: 'email', message: "Email invalidate!" }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item<Iuser> name="password" label="Password" rules={[{ required: true, message: "Please enter password!" }]}>
                                    <Input.Password />
                                </Form.Item>
                            </div>
                            <Form.Item<Iuser> name="phone" label="Phone" rules={[{ required: true, message: "Please enter phone!" }]} validateStatus={inputStatus as ''} help={errorMessage}>
                                <Input
                                    maxLength={10}
                                    onChange={handleChange}
                                />
                            </Form.Item>
                            <div className='grid grid-cols-3 items-center gap-4'>
                                <Form.Item<Iuser> label="Role" name="role">
                                    <Select>
                                        <Select.Option value="admin">Admin</Select.Option>
                                        <Select.Option value="user">User</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item<Iuser> label="DateOfBirth" name="date" className='flex justify-center'>
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item<Iuser> label="Gender" name="gender">
                                    <Select>
                                        <Select.Option value="male">Male</Select.Option>
                                        <Select.Option value="female">Female</Select.Option>
                                        <Select.Option value="other">Other</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <div className='grid grid-cols-3 gap-4'>
                                <Form.Item<Iuser> label="City" name="city">
                                    <Select loading={queryDataLocation.isLoading} value={huyen} onChange={(value:any) => onChangeTinh(value)}>
                                        {queryDataLocation?.data?.map((item: any, i: number) => (
                                            <Select.Option key={i} value={item.name}>{item.name}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item<Iuser> label="District" name="district">
                                    <Select loading={queryDataLocation.isLoading} value={xa} onChange={(value:any) => onChangeHuyen(value)}>
                                    {huyen?.map((item: any, i: number) => (
                                        <Select.Option  key={i} value={item.name} >{item.name}</Select.Option>
                                    ))}
                                    </Select>
                                </Form.Item>    
                                <Form.Item<Iuser> label="Ward" name="ward">
                                    <Select loading={queryDataLocation.isLoading}>
                                    {xa?.map((item: any, i: number) => (
                                        <Select.Option key={i} value={item.name}>{item.name}</Select.Option>
                                    ))}
                                        
                                    </Select>
                                </Form.Item>
                            </div>
                            <Form.Item<Iuser> name="address" label="Address" rules={[{ required: true, message: "Please enter address!" }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item>
                                <Space>
                                    <Button loading={mutation.isPending} type="primary" htmlType="submit">
                                        {optionForm == "add" ? "Add" : "Update"}
                                    </Button>
                                    <Button htmlType="button" onClick={()=>  form.resetFields()}>
                                        Reset
                                    </Button>

                                </Space>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormUser