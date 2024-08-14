import  { useState } from 'react'
import AddSizes from './AddSizes'
import { Iproduct } from '../../../../../common/interfaces/product'
import AddColors from './AddColors'
import { Button } from 'antd'
type AddProperties = {
    product:Iproduct
}
const AddProperties = ({product}:AddProperties) => {
    const [option,setOption] = useState<'size'|'color'|null>(null)
  return (
    <div className='mb-4'>
        {option == 'size' && (<AddSizes product={product} setOption={setOption} />)}
        {option == 'color' && (<AddColors setOption={setOption} product={product} />)}
        <div className='flex items-center gap-x-4 w-max mx-auto'>
            <Button onClick={()=>{setOption('size')}} className='text-white bg-black'>Thêm size</Button>
            <Button onClick={()=>{setOption('color')}} className='text-white bg-black'>Thêm màu</Button>
        </div>
    </div>
  )
}

export default AddProperties