/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ColorItem from '../../_components/ColorItem';
import AttributeItem from '../../_components/AttributeItem';
import { Iattribute, Igallery } from '../../../../../common/interfaces/product';
import ChoiceProperties from './ChoiceProperties';
import {  useSelector } from 'react-redux';


const Properties = () => {
    const gallerys = useSelector((state:any)=> state.product.gallerys)
    const attributes = useSelector((state:any)=> state.product.attributes)
  
 
    return (
        <div className=''>
            <h1 className='font-bold text-xl mb-3 text-center'>Thuộc tính</h1>
            {/* Nhập thuộc tính  */}
            <ChoiceProperties />
            {/* Bảng thuộc tính  */}
            <div className=' '>
                {/* Setup ảnh cho màu sắc  */}
                <div className=' mb-4 px-5  '>
                    <h3  className='font-bold text-sm mb-2 text-center'>Màu sắc</h3>
                    <div >
                        {gallerys?.map((item:Igallery,index:number)=>(
                             <ColorItem data={item} key={index} />
                        ))}
                       
                    </div>
                </div>
                {/* Setup biến thể  */}
                <div className='mb-4 px-5'>
                    <h3  className='font-bold text-sm mb-2 text-center'>Các biến thể</h3>
                    <div >
                        {attributes?.map((attribute:Iattribute,index:number)=>(
                             <AttributeItem data={attribute} index={index} key={index}/>
                        ))}
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Properties