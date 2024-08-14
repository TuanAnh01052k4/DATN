/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iproduct } from '../../../../../common/interfaces/product'
import { IColor } from '../../../../../common/interfaces/Color'
import { Button, Popconfirm } from 'antd'
import useAttributeMutation from '../../../../../common/hooks/products/useAttributeMutation'
type PropertiesUpdateProps = {
    product:Iproduct
}
const ChoicePropertiesUpdate = ({product}:PropertiesUpdateProps) => {
  const attributeMutation = useAttributeMutation()
  return (
    <div className='flex gap-x-4 w-max mx-auto mb-6 '>
      <div className='w-80 p-3 bg-gray-200 rounded-lg flex items-center gap-4 flex-wrap'>
          {product?.sizes?.map((item:string,index:number)=>(
              <Popconfirm
                title="Xóa sizes sản phẩm"
                description={<p><span className='text-red'>Khi xóa size, toàn bộ biến thể của size sẽ bị xóa theo.</span><br/><span className='text-blue'> Bạn có muốn xóa không?</span></p>}
                okText="Có"
                cancelText="Không"
                key={index}
                onConfirm={()=>attributeMutation.mutate({action:'deleteSize',size:item,productId:product._id})}
              >
                <Button>{item}</Button>
              </Popconfirm>
          ))}
      </div>
      <div className='w-80 p-3 bg-gray-200 rounded-lg flex items-center gap-4 flex-wrap'>
          {product?.colors?.map((item:IColor,index:number)=>(
              <Popconfirm
                title="Xóa màu và ảnh sản phẩm"
                description={<p><span className='text-red'>Khi xóa màu, toàn bộ ảnh và biến thể của màu sẽ bị xóa theo.</span><br/><span className='text-blue'> Bạn có muốn xóa không?</span></p>}
                okText="Có"
                cancelText="Không"
                key={index}
                onConfirm={()=> attributeMutation.mutate({action:'deleteColor',color:item,productId:product._id})}
              >
                <Button>{item.name}</Button>
              </Popconfirm>
          ))}
      </div>
       {/* <Select
        disabled={true}
            mode="multiple"
            value={product?.sizes}
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
            disabled={true}
            loading={colorQuery.isLoading}
            mode="multiple"
            value={colors}
            className='w-80'
            placeholder="Vui lòng chọn màu sắc"
            options={colorQuery?.data?.map((item: IColor) => ({ label: item.name, value: item._id }))}
          />
       */}
    </div>
  )
}

export default ChoicePropertiesUpdate