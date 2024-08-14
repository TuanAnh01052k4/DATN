
import { Link } from 'react-router-dom'
import Status from './_components/Status'
import Table from './_components/Table'
import Total from './_components/Total'

const CartPage = () => {
    return (
        <section>
            <div>
                <div className="container mx-auto lg:flex pt-11 pb-4 lg:gap-10">
                    <div className="lg:w-[68%]">
                        <Status/>
                        <div className="py-6 lg:py-11 flex gap-2 items-center">
                            <span className="text-sm lg:text-2xl text-[#000000] font-bold">Giỏ hàng của bạn</span>
                            <span className="text-sm lg:text-2xl text-red font-bold">1 Sản Phẩm</span>
                        </div>
                        <Table/>
                        <div className="py-6 lg:pt-7">
                            <div className="w-[60%] flex items-center border border-black lg:w-[30%] py-3 justify-center gap-2 rounded-tl-[20px] rounded-br-[20px] hover:bg-black hover:text-white">
                                <span><i className="fa-solid fa-arrow-left-long" /></span>
                                <button>Tiếp tục mua hàng</button>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[32%]">
                        <Total/>
                        <Link to={'/order'}><button className="bg-black text-white w-full py-3 text-lg font-semibold rounded-tl-[20px] rounded-br-[20px] hover:bg-white hover:text-black hover:border hover:border-black">ĐẶT HÀNG</button></Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default CartPage