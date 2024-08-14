
import "swiper/css";
type ImageExtraProps = {
  
    items:string[]
}
const ImageExtra = ({items}:ImageExtraProps) => {
  return (
    <div className='w-96 min-h-36 border overflow-x-scroll  gap-3 px-5 py-2 mt-3'>
      <div className="flex items-center w-max">
        {items?.map((item: string, index: number) => (
          <div className='w-32 h-36 mx-2 border' key={index}>
            <img
              src={item}
              alt="Ảnh đại diện"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageExtra