/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../../../services/auth'

type FormLoginProps = { state: number | null, onChangeForm: (number: number) => void }


const FormLogin = ({ state, onChangeForm }: FormLoginProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576)
    const formRef = useRef<any>()
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 576) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
    }, [])
    useEffect(() => {
        if (isMobile) {
            if (state == 1) {
                formRef.current.style.height = formRef.current.scrollHeight + "px"
            } else {
                formRef.current.style.height = 0
            }
        } else {
            formRef.current.style.height = "auto"
        }
    }, [state, isMobile])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlerLogin = (e:any) => {
        e.preventDefault();

        const newUser = {
            email: email,
            password: password
        }
        loginUser(newUser, dispatch, navigate)
    }
    return (
        <div className="w-full  lg:w-[480px] ">
            {/* của phần desktop */}
            <span onClick={() => onChangeForm(1)} className="titles-auth cursor-pointer text-base ursor-pointer pb-3 lg:text-xl text-dark font-semibold lg:cursor-auto lg:hidden">
                Bạn đã có tài khoản</span>
            {/* của mobile */}
            <p className=" text-base hidden ursor-pointer pb-3 lg:text-xl font-semibold lg:cursor-auto lg:block">Bạn đã có tài
                khoản</p>
            <div ref={formRef} className="contents-auth transition-all duration-300 ease-in-out h-0 overflow-hidden lg:block lg:overflow-visible lg:h-auto">
                <p className="pb-7">Nếu bạn đã có tài khoản, hãy đăng nhập để tích lũy điểm thành viên và nhận được những ưu đãi
                    tốt
                    hơn!</p>
                {/* form ở đâyy */}
                <form onSubmit={handlerLogin} className="w-full mx-auto lg:w-[390px]">
                    <div className="mb-3">
                        <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Email/SĐT" className=" h-12 w-full mb-5 px-3 py-2 placeholder-#57585A text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:" />
                        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" className="  h-12 w-full px-3 py-2 placeholder-#57585A text-#57585A border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    {/* quên mật khâu */}
                    <div className=" flex justify-between items-center mb-5">
                        <div>
                            <input type="checkbox" className="accent-slate-950" /> &nbsp;<span>Ghi nhớ mật khẩu</span>
                        </div>
                        <div><a href="#">Quên mật khẩu?</a></div>
                    </div>
                    <button className="h-12 w-full bg-[#221f20] text-[#f7f8f9] font-semibold rounded-tl-2xl rounded-br-2xl hover:bg-[#f7f8f9] hover:text-[#221f20] hover:border hover:border-[#221f20] transition ease-in-out ">ĐĂNG
                        NHẬP</button>
                </form>
            </div>
        </div>
    )
}

export default FormLogin