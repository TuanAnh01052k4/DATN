/* eslint-disable @typescript-eslint/no-explicit-any */
// const color ={
//   _id:"djfhjdhjdh",
//   name:"ĐEN",
//   background:"black"
// }
// const product = {
//   _id: 'dfhjdfhj',
//   categoryId:{
//     _id:'kjdfkdkfj',
//     name:"Áo sơ mi",
//     slug:"ao-so-mi"
//   },
//   name: "Áo sơ mi",
//   price_old: 150000,
//   discount: 10,
//   description: "Mô tả",
//   active: true,
//   featured: true,
//   gender:"unisex",
//   gallerys: [
//     {
//       _id:'hhfdjhdj',
//       colorId:"djfkd",
//       avatar: "http:....",
//       items: [
//         "http://picsum...",
//         "http://picsum...",
//         "http://picsum...",
//         "http://picsum...",
//       ]
//     },
//     {
//       _id:'hhfdjhdj',
//       name: "TRẮNG",
//       background: "black",
//       avatar: "http:....",
//       items: [
//         "http://picsum...",
//         "http://picsum...",
//         "http://picsum...",
//         "http://picsum...",
//       ]
//     },
//   ],
//   attributes:[
//     {
//       _id:'djhjdfhj',
//       size:"M",
//       color:"ĐEN",
//       instock:10
//     },
//     {
//       _id:'djhjdfhj',
//       size:"M",
//       color:"TRẮNG",
//       instock:10
//     },
//     {
//       _id:'djhjdfhj',
//       size:"L",
//       color:"ĐEN",
//       instock:10
//     },
//     {
//       _id:'djhjdfhj',
//       size:"L",
//       color:"TRẮNG",
//       instock:10
//     },
//   ]
// }
//  const order = {
//   productId: 'kdfjkdfjkd',
//   attributeId:'jdfjhdf'
//  }

// import styles
import { useDispatch } from "react-redux";
import CreateProduct from "./_components/CreateProduct";
import FormInfor from "./_components/FormInfor";
import Properties from "./_components/Properties";
import { useEffect } from "react";
import { setAttributes, setColors, setGallerys, SetIsSave, setProductInfor, setSizes } from "../../../../common/redux/features/productSlice";


const AddProductAdmin = () => {
  const dispath = useDispatch()
  useEffect(()=>{
    dispath(setSizes([]))
    dispath(setProductInfor({}))
    dispath(setGallerys([]))
    dispath(setAttributes([]))
    dispath(setColors([]))
    dispath(SetIsSave(false))
  },[])
  return (
    <div className="bg-gray-400 w-full h-[580px] overflow-y-scroll py-3 ">
        <div className="w-8/12 p-3 bg-white rounded-lg mx-auto shadow-sm shadow-gray-700">
          <h1 className="text-lg font-bold text-center mb-3">Thêm sản phẩm</h1>
          <FormInfor />
          <Properties />
          <CreateProduct />
        </div>
    </div>
  )
}

export default AddProductAdmin