import React, { useState } from 'react'
import FormLogin from './_components/FormLogin'
import FormNode from './_components/FormNode'

const PageSignup = () => {
  const [isOpen,setIsOpen] = useState<number|null>(null)
  const onChangeForm = (number:number) =>{
    if(isOpen == null||isOpen !== number ){
      setIsOpen(number)
    }else{
      setIsOpen(null)
    }
}
  return (
    <section className=" container">
      <div className="border-t-2 mb-9">
        <div className="flex justify-between text-center mt-5  relative flex-col lg:flex-row lg:px-24">
          {/* form đăng nhâp */}
          <FormLogin state={isOpen} onChangeForm={onChangeForm}/>
          <div className="absolute hidden w-[1px] h-full bg-gray-400 z-10 bottom-0 left-1/2 -translate-x-1/2 lg:block" />
          {/* đường dẫn đăng kí  */}
          <FormNode state={isOpen} onChangeForm={onChangeForm}/>
        </div>
      </div>
    </section>

  )
}

export default PageSignup