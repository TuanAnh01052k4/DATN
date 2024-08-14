/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Iattribute, Igallery, Iproduct } from '../../../../../common/interfaces/product';
import ChoicePropertiesUpdate from './ChoicePropertiesUpdate';
import ColorItemUpdate from './ColorItemUpdate';
import AttributeItemUpdate from './AttributeItemUpdate';
import AddProperties from './AddProperties';


type PropertiesUpdate = {
    product:Iproduct
}
const PropertiesUpdate = ({product}:PropertiesUpdate) => {
    return (
        <div className=''>
            <h1 className='font-bold text-xl mb-3 text-center'>Thuộc tính</h1>
            {/* Nhập thuộc tính  */}
            <ChoicePropertiesUpdate product={product}/>
            <AddProperties product={product}/>
            {/* Bảng thuộc tính  */}
            <div className=' '>
                {/* Setup ảnh cho màu sắc  */}
                <div className=' mb-4 px-5  '>
                    <h3  className='font-bold text-sm mb-2 text-center'>Màu sắc</h3>
                    <div >
                        {product?.gallerys?.map((item:Igallery,index:number)=>(
                             <ColorItemUpdate data={item} product={product} key={index} />
                        ))}
                    </div>
                </div>
                {/* Setup biến thể  */}
                <div className='mb-4 px-5'>
                    <h3  className='font-bold text-sm mb-2 text-center'>Các biến thể</h3>
                    <div className='grid grid-cols-2 gap-4' >
                        {product?.attributes?.map((attribute:Iattribute,index:number)=>(
                             <AttributeItemUpdate data={attribute} product={product} key={index}/>
                        ))}
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertiesUpdate