import React from 'react'

type Props = {}

const Product_description = (props: Props) => {
  return (
    <>
        <div className="product-description">
                            <ul className="flex justify-between ">
                                <li className="tab-item active-tab"><a href="#" className="block text-[12px] lg:text-[16px] lg:pb-5 pb-4 font-semibold">GIỚI THIỆU</a></li>
                                <li className="tab-item mx-5"><a href="#" className="block text-[12px] lg:text-[16px] lg:pb-5 pb-4 font-semibold">CHI TIẾT SẢN PHẨM</a></li>
                                <li className="tab-item mr-5"><a href="#" className="block text-[12px] lg:text-[16px] lg:pb-5 pb-4 font-semibold">BẢO QUẢN</a></li>
                                <li className="tab-item"><a href="#" className="block text-[12px] lg:text-[16px] lg:pb-5 pb-4 font-semibold">ĐÁNH GIÁ</a></li>
                            </ul>
                            <hr className="mb-6" />
                            <div id="content-1" className="content-section text-[14px] active hidden">
                                <p>- Nếu như Cotton là ông vua chất liệu cho mùa hè với tính ưu việt về mức độ thoáng mát, thấm hút mồ hôi thì META ICE COTTON lại là phiên bản nâng cấp với nhiều tính năng vượt trội hơn thế nữa. Kết hợp những ưu điểm tuyệt vời từ sợi Ice Cotton, một loại vật liệu được phát triển bởi SPOERRY Thụy Sĩ có độ xoắn cao, lông tơ sẽ bị triệt tiêu, mang đến cảm giác "mát lạnh" ngay điểm chạm đầu tiên trên da.</p>
                                <p>- Áo thun Meta Ice Cotton mềm mịn, co dãn 4 chiều và có khả năng thấm hút mồ hôi tốt phù hợp với khí hậu nhiệt đới tại Việt Nam. Hình in tạo điểm nhấn đặc biệt cho mẫu áo. Kết hợp cùng quần jeans, quần short hay quần âu đều phù hợp.</p>
                                <h3>Thông tin mẫu:</h3>
                                <p>Chiều cao: 175 cm</p>
                                <p>Cân nặng: 70 kg</p>
                                <p>Số đo 3 vòng: 98-75-97 cm</p>
                                <p>Mẫu mặc size L</p>
                            </div>
                            <div id="content-2" className="content-section text-[14px]">
                                <p>Nội dung chi tiết sản phẩm sẽ hiển thị ở đây.</p>
                            </div>
                            <div id="content-3" className="content-section text-[14px]">
                                <p>Nội dung bảo quản sản phẩm sẽ hiển thị ở đây.</p>
                            </div>
                            <div id="content-4" className="content-section text-[14px]">
                                <p>Nội dung đánh giá sản phẩm sẽ hiển thị ở đây.</p>
                            </div>
                            </div>
                            <div className="flex justify-center items-center mt-4">
                            <div className="w-[235px]"><hr /></div>
                            <button id="toggle-content" className="p-2 border rounded-full">
                                <svg id="icon-chevron" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9" /></svg>
                            </button>
                            <div className="w-[235px]"><hr /></div>
                            </div>
    </>
  )
}

export default Product_description