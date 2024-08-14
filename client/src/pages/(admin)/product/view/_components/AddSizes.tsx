/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { useEffect, useState } from 'react'
import { Iattribute, Iproduct } from '../../../../../common/interfaces/product'
import useColorQuery from '../../../../../common/hooks/color/useColorQuery'
import { IColor } from '../../../../../common/interfaces/Color'
import { useDispatch, useSelector } from 'react-redux'
import { setAttributes } from '../../../../../common/redux/features/productSlice'
import AttributeItem from '../../_components/AttributeItem'
import useAttributeMutation from '../../../../../common/hooks/products/useAttributeMutation'
type AddSizesProps = {
  product: Iproduct,
  setOption:any
}
const sizeLocal = ["S", "M", "L", "XL", "XXL", "2XL"]
const AddSizes = ({ product,setOption }: AddSizesProps) => {
  const [sizes, setSizes] = useState([] as string[])
  const [colors, setColors] = useState([] as IColor[])
  const [choiceSizes, setChoiceSizes] = useState([] as string[])
  const [choiceColors, setChoiceColors] = useState([] as IColor[])
  const attributes = useSelector((state: any) => state.product.attributes)
  const colorQuery = useColorQuery()
  const attributeMutation = useAttributeMutation()
  const dispath = useDispatch()
  useEffect(() => {
    if (product?.sizes?.length > 0) {
      const newSizes = sizeLocal.filter((item: string) => !product?.sizes?.includes(item))
      setSizes(newSizes)
    }
    setColors(product?.colors)
  }, [product, colorQuery.data])
  useEffect(() => {
    const newAttributes = [] as Iattribute[]
    colors.map((color: IColor) => {
      choiceSizes.map((size: string) => {
        // tìm kiếm xem đã tồn tại attribute hay chưa
        const checkAtb = attributes.find((item: Iattribute) => (item.size == size && item.color == color.name))
        // nếu chưa thì push phần tử mới
        if (!checkAtb) {
          newAttributes.push({
            size: size,
            color: color.name,
            instock: 0
          });
        } else {
          // nếu đã tồn tại thì lấy chính phần tử cũ đó
          newAttributes.push(checkAtb)
        }
      })
    })

    dispath(setAttributes(newAttributes))
  }, [choiceSizes])
  const onSubmit = () =>{
    if(choiceSizes.length == 0) return message.error('Bạn cần chọn size cho sản phẩm')
    const newData = {
      sizes:choiceSizes,
      attributes:attributes
    }
    attributeMutation.mutate({action:'addSizes',productId:product._id,newSize:newData})
    setOption(null)
  }
  return (
    <div className='fixed top-0 z-20 left-0 w-full h-full bg-black/30 flex justify-center items-center'>
      <div className='w-[630px] p-3 relative bg-gray-800 rounded-lg h-[90vh] overflow-y-scroll'>
        <Button onClick={()=>{setOption(null)}} className='size-8 rounded-full bg-white absolute top-2 right-2'><CloseOutlined /></Button>
        <h1 className='text-white text-center font-bold text-lg mb-4'>Thêm size</h1>
        {/* Chọn size và màu  */}
        <div className='flex flex-col mb-4'>
          <div className='px-4 order-2'>
            <div className='w-full bg-white rounded-lg p-3 flex items-center gap-3 flex-wrap mb-4'>
              {product?.sizes?.map((item: string, index: number) => (
                <Button key={index} disabled className='border-black'>{item}</Button>
              ))}
              {choiceSizes.map((item: string, index: number) => (
                <Button key={index} onClick={() => { setSizes([...sizes, item]); setChoiceSizes(choiceSizes.filter((size: string) => size !== item)) }} className='border-black'>{item}</Button>
              ))}
            </div>
            <h5 className='text-white'>Chọn Size:</h5>
            <div className='w-full bg-white rounded-lg p-3 flex items-center gap-3 flex-wrap'>
              {sizes?.map((item: string, index: number) => (
                <Button key={index} onClick={() => { setChoiceSizes([...choiceSizes, item]); setSizes(sizes.filter((size: string) => size !== item)) }} className='border-black'>{item}</Button>
              ))}
            </div>
          </div>
          <div className='px-4 order-1'>
            <div className='w-full bg-white rounded-lg p-3 flex items-center gap-3 flex-wrap mb-4'>
              {product?.colors?.map((item: IColor, index: number) => (
                <Button key={index} disabled className='border-black'>{item.name}</Button>
              ))}
              {choiceColors.map((item: IColor, index: number) => (
                <Button key={index} onClick={() => { setColors([...colors, item]); setChoiceColors(choiceColors.filter((color: IColor) => color._id !== item._id)) }} className='border-black'>{item.name}</Button>
              ))}
            </div>
          </div>
        </div>
          {/* Setup biến thể  */}
          <div className='mb-4 px-5'>
                    <h3  className='font-bold text-sm mb-2 text-center text-white'>Các biến thể</h3>
                    <div className='grid grid-cols-2 gap-4' >
                        {attributes?.map((attribute:Iattribute,index:number)=>(
                             <AttributeItem data={attribute} index={index} key={index}/>
                        ))}
                    </div>
          </div>
         <div className='w-max mx-auto'>
         <Button type='primary' onClick={onSubmit}>Thêm size</Button>
         </div>
      </div>
    </div>
  )
}

export default AddSizes