
const Status = () => {
    return (
        <div>
            <div className="border border-[#91979c] rounded-tl-[20px] rounded-br-[20px] py-5 relative">
                <div className="flex items-center px-4 pb-6 w-[90%] mx-auto lg:pb-10">
                    <div className="flex items-center basis-1/3 ">
                        <div className="size-4 lg:size-5 rounded-full bg-black border relative flex-shrink-0">
                            <div className="top-6 left-7 text-sm absolute lg:left-1/2 transform -translate-x-1/2 lg:top-8 lg:text-xs leading-snug w-24 text-center">
                                Giỏ hàng
                            </div>
                        </div>
                        <div className="w-full h-[4px] lg:h-[2px] bg-gray-300" />
                    </div>
                    <div className="flex items-center  basis-1/3 ">
                        <div className="size-4 lg:size-5 rounded-full bg-white border border-gray-300 relative flex-shrink-0">
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 text-xs leading-snug w-24 text-center">
                                Đặt hàng
                            </div>
                        </div>
                        <div className="w-full h-[4px]  lg:h-[2px] bg-gray-300" />
                    </div>

                    <div className="flex items-center  basis-1/3 ">
                        <div className="size-4 lg:size-5 rounded-full bg-white border border-gray-300 relative flex-shrink-0">
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 text-xs leading-snug w-24 text-center">
                                Thanh toán
                            </div>
                        </div>
                        <div className="w-full h-[4px] lg:h-[2px] bg-gray-300" />
                        <div className="size-4 lg:size-5 rounded-full bg-white border border-gray-300 relative flex-shrink-0">
                            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8 text-xs leading-snug w-24 text-center">
                                Hoàn thành đơn
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Status