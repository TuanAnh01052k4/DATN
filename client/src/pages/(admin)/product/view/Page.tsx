import { useParams } from "react-router-dom"
import FormInforUpdate from "./_components/FormInforUpdate"
import PropertiesUpdate from "./_components/PropertiesUpdate"
import useProductQuery from "../../../../common/hooks/products/useProductQuery"
import { useEffect, useState } from "react"
import { Iproduct } from "../../../../common/interfaces/product"


const ViewProductAdmin = () => {
    const [product,setProduct] = useState<Iproduct>({} as Iproduct)
    const {id} = useParams()
    const productQuery = useProductQuery(id)
    useEffect(()=>{
        setProduct(productQuery.data)
    },[id,productQuery.data])
  return (
    <div className="bg-gray-400 w-full h-[580px] overflow-y-scroll py-3 ">
        <div className="w-8/12 p-3 bg-white rounded-lg mx-auto shadow-sm shadow-gray-700">
          <h1 className="text-lg font-bold text-center mb-3">Chi tiết sản phẩm</h1>
          <FormInforUpdate product={product} />
          <PropertiesUpdate  product={product} />
        </div>
    </div>
  )
}

export default ViewProductAdmin