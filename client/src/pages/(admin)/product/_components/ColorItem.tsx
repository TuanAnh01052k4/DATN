/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CheckCircleOutlined,
  DownOutlined,
  EditOutlined,
  SaveOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, message, Upload, UploadProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { Igallery } from "../../../../common/interfaces/product";
import { useDispatch, useSelector } from "react-redux";
import { setGallerys } from "../../../../common/redux/features/productSlice";
import useLocalStorage from "../../../../common/hooks/localstorage/useLocalStorage";
import ImageExtra from "../add/_components/ImageExtra";

type ColorItemProps = {
  data: Igallery
}

const Clound_name = import.meta.env.VITE_CLOUND_NAME;
const preset = import.meta.env.VITE_PRESET;

const ColorItem = ({ data }: ColorItemProps) => {
  const [avatar, setAvatar] = useState<string>("");
  const [items, setItems] = useState([] as any);
  const [loadingAvt,setLoadingAvt] = useState(false)
  const [loadingGal,setLoadingGal] = useState(false)
  const gallerys = useSelector((state:any)=> state.product.gallerys)
  const [,setGallerysLocal] = useLocalStorage('gallerys',[])
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const divRef = useRef<any>();
  const dispath = useDispatch()
  useEffect(() => {
    setMaxHeight(divRef.current.scrollHeight);
  }, []);
  useEffect(()=>{
    setAvatar(data.avatar)
    setItems(data.items)
  },[data])
  const onOpen = () => {
    if (divRef.current.style.height == "0px" || !divRef.current.style.height) {
      divRef.current.style.height = maxHeight + 20 + "px";
     
    } else {
      divRef.current.style.height = 0 + "px";
    }
  };
  const handleChangeAvt: UploadProps["onChange"] = (info) => {
    if (info.file.status == "uploading") {
      // console.log(info.file, info.fileList);
      setLoadingAvt(true)
    }
    if (info.file.status == "done") {
      setAvatar(info.file.response.url)
      setLoadingAvt(false)
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
      setLoadingAvt(false)
    }
  };
  const handleChangeItems: UploadProps["onChange"] = (info) => {
    if (info.file.status == "uploading") {
      setLoadingGal(true)
      setItems([]);
    }
    if (info.file.status == "done") {
      setItems([...items, info.file.response.url]);
      setLoadingGal(false)
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
      setLoadingGal(false)
    }
  };

    const onEdit = ()=>{
      const newGallery = {
        ...data,
        check:false
      }
      const newGallers = gallerys.map((item: Igallery) => item.name == data.name ? newGallery : item);
      setGallerysLocal(newGallers)
      dispath(setGallerys(newGallers))
    }
  const onSave = () =>{
    if(avatar == '') return message.error('Bạn chưa thêm ảnh đại diện');
    if(items.length == 0) return message.error('Bạn chưa thêm ảnh phụ')
    const newGallery = {
      ...data,
      avatar:avatar,
      items:items,
      check:true
    }
    const newGallers = gallerys.map((item: Igallery) => item.name == data.name ? newGallery : item);
    setGallerysLocal(newGallers)
    dispath(setGallerys(newGallers))
  }
  return (
    <div className="w-full mb-4 border rounded-lg shadow-sm shadow-gray-500 bg-white">
      {/* Tiêu đề  */}
      <div
        className="flex items-center justify-between p-3 border-b cursor-pointer"
      >
        
        {/* tên và màu sắc  */}
        <div className="flex items-center gap-x-4">
          <h3 className="text-base font-semibold">{data.name}</h3>
          <div className="rounded-full size-6 border" style={{ background: data.background }}></div>
          {data.check && <CheckCircleOutlined className="text-green-600 text-xl" />}
        </div>
        {/* icon  */}
        <div className="flex items-center gap-x-3">
         {data.check == false ? ( <Button disabled={loadingAvt? loadingAvt: loadingGal} onClick={onSave} type="primary"><SaveOutlined /></Button>):( <Button onClick={onEdit} className="bg-yellow text-white"><EditOutlined /></Button>)}
          <Button className="size-8 rounded-full"  onClick={onOpen}><DownOutlined/></Button>
        </div>
      </div>
      {/* Content  */}
      <div
        ref={divRef}
        className="flex h-0 overflow-hidden transition-all duration-300 ease-in-out"
      >
        {/* ảnh đại diện  */}
        <div className=" p-5 basis-1/3">
          <Upload

            disabled={data.check}
            showUploadList={false}
            action={`https://api.cloudinary.com/v1_1/${Clound_name}/image/upload`}
            data={{
              upload_preset: preset,
            }}
            onChange={handleChangeAvt}
            className="block mb-2"
          >
            <Button loading={loadingAvt} disabled={data.check}  icon={<UploadOutlined />}>Ảnh đại diện</Button>
          </Upload>
          <div className="overflow-hidden border h-40 w-36 ">
            <img
              src={avatar}
              alt="Ảnh đại diện"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* ảnh phụ  */}
        <div className="p-5 basis-2/3">
          <Upload
           disabled={data.check}
            multiple
            name="file"
            showUploadList={false}
            action={`https://api.cloudinary.com/v1_1/${Clound_name}/image/upload`}
            data={{
              upload_preset: preset,
            }}
            onChange={handleChangeItems}
          >
            <Button loading={loadingGal}  disabled={data.check} icon={<UploadOutlined />}>Ảnh phụ</Button>
          </Upload>
         <ImageExtra items={items} />
        </div>
      </div>
    </div>
  );
};

export default ColorItem;
