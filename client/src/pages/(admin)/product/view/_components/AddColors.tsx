/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CloseOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import { useEffect, useState } from 'react'
import { Iattribute, Igallery, InewColor, Iproduct } from '../../../../../common/interfaces/product'
import useColorQuery from '../../../../../common/hooks/color/useColorQuery'
import { IColor } from '../../../../../common/interfaces/Color'
import { useDispatch, useSelector } from 'react-redux'
import { setAttributes, setGallerys } from '../../../../../common/redux/features/productSlice'
import AttributeItem from '../../_components/AttributeItem'
import ColorItem from '../../_components/ColorItem'
import useAttributeMutation from '../../../../../common/hooks/products/useAttributeMutation'
type AddPropertiesProps = {
  product: Iproduct,
  setOption:any
}
const AddColors = ({ product,setOption }: AddPropertiesProps) => {
  const [sizes, setSizes] = useState([] as string[])
  const [colors, setColors] = useState([] as IColor[])
  const [choiceColors, setChoiceColors] = useState([] as IColor[])
  const attributes = useSelector((state: any) => state.product.attributes)
  const gallerys = useSelector((state: any) => state.product.gallerys)
  const colorQuery = useColorQuery()
  const attributeMutation = useAttributeMutation()
  const dispath = useDispatch()
  useEffect(() => {
    if (product?.sizes?.length > 0) {
      const set = new Set(product?.colors?.map((item: IColor) => `${item._id}-${item.name}`))
      const newColors = colorQuery?.data?.filter((item: IColor) => !set.has(`${item._id}-${item.name}`))
      setColors(newColors)
    }
    setSizes(product?.sizes)
  }, [product, colorQuery.data])
  useEffect(() => {
    const newAttributes = [] as Iattribute[]
    const newGallerys = [] as Igallery[]
    choiceColors.map((color: IColor) => {
      const find = gallerys.find((item: Igallery) => item.name == color.name)
      if (!find) {
        newGallerys.push({
          name: color.name,
          background: color.background,
          avatar: "",
          items: [],
          check: false
        })
      } else {
        // nếu có rồi thì lấy lại phần tử cũ
        newGallerys.push(find)
      }
      sizes?.map((size: string) => {
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
    dispath(setGallerys(newGallerys))
    dispath(setAttributes(newAttributes))
  }, [choiceColors])
  const onSubmit = () => {
    if (gallerys.some((item: Igallery) => item.check == false)) return message.error('Bạn cần thêm ảnh cho sản phẩm')
    if(choiceColors.length == 0) return message.error('Bạn cần chọn màu sắc cho sản phẩm')
    const newColorId:string[]|any = choiceColors.map((item:IColor)=> item._id)
    const newData:InewColor = {
        colors:newColorId,
        gallerys:gallerys,
        attributes:attributes
    }
    attributeMutation.mutate({action:"addColors",newColor:newData,productId:product._id})
    setOption(null)
  }
  return (
    <div className='fixed top-0 left-0 z-20 w-full h-full bg-black/30 flex justify-center items-center'>
      <div className='w-[800px] p-3 relative bg-gray-800 rounded-lg h-[90vh] overflow-y-scroll'>
        <Button onClick={()=> {setOption(null)}} className='size-8 rounded-full bg-white absolute top-2 right-2'><CloseOutlined /></Button>
        <h1 className='text-white text-center font-bold text-lg mb-4'>Thêm màu sắc</h1>
        {/* Chọn size và màu  */}
        <div className='flex flex-col mb-4'>
          <div className='px-4 order-1'>
            <div className='w-full bg-white rounded-lg p-3 flex items-center gap-3 flex-wrap mb-4'>
              {product?.sizes?.map((item: string, index: number) => (
                <Button key={index} disabled className='border-black'>{item}</Button>
              ))}
            </div>
          </div>
          <div className='px-4 order-2'>
            <div className='w-full bg-white rounded-lg p-3 flex items-center gap-3 flex-wrap mb-4'>
              {product?.colors?.map((item: IColor, index: number) => (
                <Button key={index} disabled className='border-black'>{item.name}</Button>
              ))}
              {choiceColors.map((item: IColor, index: number) => (
                <Button key={index} onClick={() => { setColors([...colors, item]); setChoiceColors(choiceColors.filter((color: IColor) => color._id !== item._id)) }} className='border-black'>{item.name}</Button>
              ))}
            </div>
            <h5 className='text-white'>Chọn màu:</h5>
            <div className='w-full bg-white rounded-lg p-3 flex items-center gap-3 flex-wrap'>
              {colors?.map((item: IColor, index: number) => (
                <Button key={index} onClick={() => { setChoiceColors([...choiceColors, item]); setColors(colors.filter((color: IColor) => color.name !== item.name)) }} className='border-black'>{item.name}</Button>
              ))}
            </div>
          </div>
        </div>
        {/* Setup biến thể  */}
        <div className='mb-4 px-5'>
          <h3 className='font-bold text-sm mb-2 text-center text-white'>Gallery</h3>
          <div className='' >
            {gallerys?.map((gallery: Igallery, index: number) => (
              <ColorItem data={gallery} key={index} />
            ))}
          </div>
        </div>
        <div className='mb-4 px-5'>
          <h3 className='font-bold text-sm mb-2 text-center text-white'>Các biến thể</h3>
          <div className='grid grid-cols-2 gap-4' >
            {attributes?.map((attribute: Iattribute, index: number) => (
              <AttributeItem data={attribute} index={index} key={index} />
            ))}
          </div>
        </div>
        <div className='mx-auto w-max'>
          <Button onClick={onSubmit} type='primary'><PlusOutlined /> Thêm</Button>
        </div>
      </div>
    </div>
  )
}

export default AddColors