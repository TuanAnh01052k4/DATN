/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, InputNumber, message } from 'antd'
import { Iattribute } from '../../../../common/interfaces/product'
import { useDispatch, useSelector } from 'react-redux'
import { setAttributes } from '../../../../common/redux/features/productSlice'

type AttributeItemProps = {
  data: Iattribute,
  index: number
}
const AttributeItem = ({ data, index }: AttributeItemProps) => {
  const [form] = Form.useForm()
  const attributes = useSelector((state: any) => state.product.attributes)
  const dispath = useDispatch()
  const onSetInstock = async (event: any) => {
    if (parseInt(event.target.value) < 0 || isNaN(event.target.value) || event.target.value == null || event.target.value == '') {
      form.setFieldValue('instock', 0)
      return message.error("Vui lòng nhập số lượng hợp lệ")
    }
    if (parseInt(event.target.value) == data.instock) return
    const newAttribute = { ...data, instock: parseInt(event.target.value) }
    const newAttributes = attributes.map((item: Iattribute, i: number) => index == i ? newAttribute : item)
    dispath(setAttributes(newAttributes))
  }
  return (
    <div className='flex items-center justify-between p-3 border rounded-lg shadow-sm shadow-gray-600 mb-4 bg-white'>
      <div className='flex items-center gap-x-3'>
        <h1>{data.color}</h1>
        <h1>{data.size}</h1>
      </div>
      <div>
        <Form form={form}>
          <Form.Item className='m-0 p-0' name='instock' rules={[{ type: 'number', min: 0 }]}>
            <InputNumber placeholder='Số lượng kho hàng' defaultValue={data.instock} onBlur={onSetInstock} />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default AttributeItem