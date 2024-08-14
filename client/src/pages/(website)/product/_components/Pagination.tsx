import React from 'react'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <>
        <ul className="list-inline-pagination flex justify-center items-center lg:mt-[70px]  mt-[32px]">
                  <li className="mr-[17px] lg:mx-2"><a href="#" className="block py-2 px-4 bg-white border hover:bg-black hover:text-white  rounded-tl-lg rounded-br-lg">«</a></li>
                  <li className="mr-[17px] lg:mx-2"><a href="#" className="block py-2 px-4 bg-white border hover:bg-black hover:text-white  rounded-tl-lg rounded-br-lg">1</a></li>
                  <li className="mr-[17px] lg:mx-2"><a href="#" className="block py-2 px-4 bg-white border hover:bg-black hover:text-white  rounded-tl-lg rounded-br-lg">2</a></li>
                  <li className="mr-[17px] lg:mx-2"><a href="#" className="block py-2 px-4 bg-white border hover:bg-black hover:text-white  rounded-tl-lg rounded-br-lg">3</a></li>
                  <li className=" lg:mx-2"><a href="#" className="block py-2 px-4 bg-white border hover:bg-black hover:text-white  rounded-tl-lg rounded-br-lg">»</a></li>
                  <li className="mr-[17px] lg:mx-2 hidden lg:block"><a href="#" className="block py-2 px-4 bg-white border hover:bg-black hover:text-white  rounded-tl-lg rounded-br-lg">Trang cuối</a></li>
        </ul>
    </>
  )
}

export default Pagination