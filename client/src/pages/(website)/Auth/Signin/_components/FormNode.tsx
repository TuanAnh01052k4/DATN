/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
type FormLoginProps = {
    state:number|null,
    onChangeForm: (number:number)=>void
}

const FormNode = ({state,onChangeForm}:FormLoginProps) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576)
    const contentRef = useRef<any>()
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            if(window.innerWidth < 576) {
                setIsMobile(true)
            }else{
                setIsMobile(false)
            }
        })
    },[])
    useEffect(()=>{
      
       if(isMobile){
                if(state == 2){
                    contentRef.current.style.height =  contentRef.current.scrollHeight + "px"
                }else{
                    contentRef.current.style.height = 0
                }
        }else{
            contentRef.current.style.height = "auto"
        }
       
    },[state,isMobile])
    return (
        <div className="w-full lg:w-[480px] ">
            <div className="mb-8">
                <p onClick={()=> onChangeForm(2)} className=" cursor-pointer text-base ursor-pointer pb-3 lg:text-xl text-dark font-semibold lg:cursor-auto lg:hidden">
                    Khách hàng mới của mail shop</p>
                <p className=" text-base hidden ursor-pointer pb-3 lg:text-xl font-semibold lg:cursor-auto lg:block">
                    Khách hàng mới của mail shop</p>
                <div ref={contentRef} className=" contents-auth h-0 transition-all duration-300 ease-in-out overflow-hidden lg:block lg:overflow-visible lg:h-auto">
                    <p className=" mb-4  mx-auto w-full lg:w-[390px]">Nếu bạn chưa có tài khoản trên ivymoda.com, hãy sử dụng tùy chọn
                        này
                        để truy cập
                        biểu mẫu đăng ký.
                        Bằng cách cung cấp cho IVY moda thông tin chi tiết của bạn, quá trình mua hàng trên ivymoda.com sẽ là
                        một
                        trải
                        nghiệm thú vị và nhanh chóng hơn!</p>
                    <Link to={"/signup"}> <button className="h-12 w-full bg-[#221f20] text-[#f7f8f9] font-semibold rounded-tl-2xl rounded-br-2xl hover:bg-[#f7f8f9] hover:text-[#221f20] hover:border
                     hover:border-[#221f20] transition ease-in-out ">ĐĂNG KÝ</button></Link>

                </div>
            </div>
        </div>
    )
}

export default FormNode