/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Iattribute, Igallery } from '../../../../../common/interfaces/product'
import { IColor } from '../../../../../common/interfaces/Color'
import { Select } from 'antd'
import useColorQuery from '../../../../../common/hooks/color/useColorQuery'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAttributes, setColors, setGallerys, setSizes } from '../../../../../common/redux/features/productSlice'

const ChoiceProperties = () => {
  const gallerys = useSelector((state: any) => state.product.gallerys)
  const attributes = useSelector((state: any) => state.product.attributes)
  const sizes = useSelector((state: any) => state.product.sizes)
  const colors = useSelector((state: any) => state.product.colors)
  const colorQuery = useColorQuery()
  const dispath = useDispatch()
  useEffect(() => {
    const newGallerys = [] as Igallery[]
    const newAttributes = [] as Iattribute[]
     colors.map((id: string) => {
      // tìm color bằng id dựa trên Api
      const findColor: IColor = colorQuery.data.find((item: Igallery) => item._id == id)
      // check xem đã có 1 màu nào đó tồn tại trong mảng hay chưa
      const checkColor = gallerys.find((item: Igallery) => item.name == findColor.name)
      //nếu chưa có sẽ push vào

      if (!checkColor) {
        newGallerys.push({
          name:findColor.name,
          background:findColor.background,
          avatar: "",
          items: [],
          check: false
        })
      } else {
        // nếu có rồi thì lấy lại phần tử cũ
        newGallerys.push(checkColor)
      }

      sizes.map((size: string) => {
        // tìm kiếm xem đã tồn tại attribute hay chưa
        const checkAtb = attributes.find((item: Iattribute) => (item.size == size && item.color == findColor.name))
        // nếu chưa thì push phần tử mới
        if (!checkAtb) {
          newAttributes.push({
            size: size,
            color: findColor.name,
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
  }, [sizes, colors])
  return (
    <div className='flex gap-x-4 w-max mx-auto mb-6 '>
       <Select
            mode="multiple"
            value={sizes}
            className='w-80'
            onChange={(value) =>dispath(setSizes(value))}
            placeholder="Vui lòng chọn size"
            options={[
              { value: 'S', label: 'S' },
              { value: 'M', label: 'M' },
              { value: 'L', label: 'L' },
              { value: 'XL', label: 'XL' },
              { value: 'XXL', label: 'XXL' },
              { value: 'FREESIZE', label: 'FREESIZE' },
            ]}
          />
        <Select
            loading={colorQuery.isLoading}
            mode="multiple"
            value={colors}
            className='w-80'
            onChange={(value) =>dispath(setColors(value))}
            placeholder="Vui lòng chọn màu sắc"
            options={colorQuery?.data?.map((item: IColor) => ({ label: item.name, value: item._id }))}
          />
      
    </div>
  )
}

export default ChoiceProperties