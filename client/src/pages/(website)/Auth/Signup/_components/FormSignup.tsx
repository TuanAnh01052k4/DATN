/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useApiLocationQuery from '../../../../../common/hooks/API_location/useApiLocationQuery'
import { message } from 'antd'
import { registerUser } from '../../../../../services/auth'
import { Isignup } from '../../../../../common/interfaces/auth'

const FormSignup = () => {
    const queryDataLocation = useApiLocationQuery()
    const [huyen, setHuyen] = useState([])
    const [xa, setXa] = useState<any>([])
    const { register, handleSubmit } = useForm<Isignup>()
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
    // const [firstname, setFirstname] = useState("")
    // const [lastname, setLastname] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")
    // const [phone, setPhone] = useState("")
    // const [date, setDate] = useState("")
    // const [gender, setGender] = useState("")
    // // const [city, setCity] = useState("")
    // // const [district, setDistrict] = useState("")
    // const [ward, setWard] = useState("")
    // const [address, setAddress] = useState("")

    // const selectedCity = huyen.length > 0 ? huyen[0].name : '';
    // const selectedDistrict = xa.length > 0 ? xa[0].name : '';

    const onSubmit = async (data: any) => {
        // const newUser = {
        //     firstname: firstname,
        //     lastname: lastname,
        //     email: email,
        //     password: password,
        //     confirmPassword: confirmPassword,
        //     phone: phone,
        //     date: date,
        //     gender: gender,
        //     city: huyen,
        //     district: xa,
        //     ward: ward,
        //     address: address
        // };
        // console.log('Dữ liệu form:', data);

        try {
            await registerUser(data, dispatch, navigate);
            message.success("đăng kí thành công")
        } catch (error) {
            console.error('Lỗi đăng ký:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-1 lg:grid-cols-2 gap-7" >
            {/* ////////////////box bên trá////////////////i */}
            <div>
                <p className="text-[16px] mb-[10px]  text-dark font-medium ">Thông tin khách hàng</p>
                <div className="w-full grid-cols-1 gap-5 grid lg:grid-cols-2 lg:gap-4  ">
                    <div className="flex flex-col">
                        <span className="input-signup">Họ:</span>
                        <input {...register('lastname', { required: true })} type="text" placeholder="Họ..." className=" h-12 w-full  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  " />
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Tên:</span>
                        <input {...register('firstname', { required: true })} type="text" placeholder="Tên..." className=" h-12 w-full  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Email:</span>
                        <input{...register('email', { required: true })} type="text" placeholder="Email..." className=" h-12 w-full  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " />
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Điện thoại:</span>
                        <input type="text" {...register('phone', { required: true })} placeholder="Điện thoại..." className=" h-12 w-full  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Ngày sinh:</span>
                        <input {...register('date', { required: true })} type="date" placeholder="Ngày sinh..." className=" h-12 w-full  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " />
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Giới tính:</span>
                        <select {...register('gender', { required: true })} className=" h-12 w-full   px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option defaultChecked value="">Giới tính</option>
                            <option value={'female'} >Nữ</option>
                            <option value={'male'}  >Nam</option>
                            <option value={'orther'}  >Khác</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Tỉnh/TP:</span>
                        <select {...register('city', { required: true, onChange: (e) => onChangeTinh(e.target.value) })} className="appearance-none h-12 w-full  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ">
                            <option defaultChecked value="">Tỉnh/Thành Phố</option>
                            {queryDataLocation?.data?.map((item: any, i: number) => (
                                <option key={i} value={item.name} >{item.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <span className="input-signup">Quận/Huyện:</span>
                        <select  {...register('district', { required: true, onChange: (e) => onChangeHuyen(e.target.value) })} className=" h-12 w-full mb-5  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option defaultChecked value="">Quận/Huyện:</option>
                            {huyen?.map((item: any, i: number) => (
                                <option key={i} value={item.name} >{item.name}</option>
                            ))}
                        </select>
                    </div>
                    {/* phường địa chỉ phần dưới */}
                </div>
                <div className="flex flex-col">
                    <span className="input-signup">Phường/Xã:</span>
                    <select {...register('ward', { required: true })} className="appearance-none h-12 w-full mb-5  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ">
                        <option defaultChecked value="">Phường/Xã:</option>
                        {xa?.map((item: any, i: number) => (
                            <option key={i} value={item.name} >{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <span className="input-signup">Địa chỉ:</span>
                    <textarea {...register('address', { required: true })} className="appearance-none h-20 w-full mb-5  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " defaultValue={""} />
                </div>
            </div>
            {/* ////////////////box bên phải////////////////i */}
            <div>
                <p className="text-[16px] mb-[10px] text-dark font-medium">Thông tin mật khẩu</p>
                <div className="flex flex-col">
                    <span className="input-signup">Mật khẩu:</span>
                    <input type="password" {...register('password', { required: true })} placeholder="Mật khẩu..." className=" h-12 w-full mb-5  px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  " />
                </div>
                <div className="flex flex-col">
                    <span className="input-signup">Nhắc lại mật khẩu:</span>
                    <input placeholder="Nhắc lại mật khẩu..." className=" h-12 w-full mb-5   px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " />
                </div>
                <div className="flex flex-col">
                    <span className="input-signup">Nhập lại kí tự vào ô sau:</span>
                    <input type="text" className=" h-12 w-full mb-5   px-3 py-2  text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent " />
                </div>
                <div className="h-16 w-24 border flex justify-center items-center">
                    <p>Mã ở đây</p>
                </div>
                <div className=" flex justify-between items-center mt-4 mb-4 ">
                    <div>
                        <input type="checkbox" className="accent-slate-950" /> <span>Đồng ý với các <a className="text-red" href="http://">điều khoản
                        </a>của chúng tôi</span>
                    </div>
                    <Link to={"/signin"} className='hover:text-red' >Đã có tài khoản ?</Link>
                </div>
                <div>
                    <button className="h-12 w-full bg-[#221f20] text-[#f7f8f9] font-semibold rounded-tl-2xl rounded-br-2xl hover:bg-[#f7f8f9] hover:text-[#221f20] hover:border hover:border-[#221f20] transition ease-in-out ">ĐĂNG
                        KÝ</button>
                </div>
            </div>
        </form>
    )
}

export default FormSignup