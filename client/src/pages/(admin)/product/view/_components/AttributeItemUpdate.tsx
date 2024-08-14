/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, InputNumber, message } from 'antd'
import { Iattribute, Iproduct } from '../../../../../common/interfaces/product'
import useAttributeMutation from '../../../../../common/hooks/products/useAttributeMutation'

type AttributeItemProps = {
    data: Iattribute,
    product: Iproduct
}
const AttributeItemUpdate = ({ data, product }: AttributeItemProps) => {
    const [form] = Form.useForm()
    const attributeMutation = useAttributeMutation()
    const onSetInstock = (event: any) => {
        if (parseInt(event.target.value) < 0 || isNaN(event.target.value) || event.target.value == null || event.target.value == '') {
            form.setFieldValue('instock', data.instock)
            return message.error("Vui lòng nhập số lượng hợp lệ")
        }
        if (parseInt(event.target.value) == data.instock) return
        const newAttribute = { ...data, instock: parseInt(event.target.value) }
        attributeMutation.mutate({ action: 'updateAtb', productId: product._id, attribute: newAttribute })
    }
    return (
        <div className={`flex items-center justify-between bg-white p-3 border  rounded-lg shadow-sm shadow-gray-600 mb-4 ${data.instock == 0 ? ' border-red shadow-red' : 'shadow-gray-600'}`}>
            <div className='flex items-center gap-x-3'>
                <h3 className='text-[12px]/[150%] font-semibold'>{data.color}</h3>
                <h3 className='text-[12px]/[150%] font-semibold'>{data.size}</h3>
            </div>
            <div>
                <Form form={form}>
                    <Form.Item name={'instock'} className='m-0 p-0'>
                        <InputNumber placeholder='Số lượng kho hàng' defaultValue={data.instock} onBlur={onSetInstock} />
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default AttributeItemUpdate