import instance from "../common/config/axios";
import { IColor } from "../common/interfaces/Color";

export const getAllColors = async () => {
  try {
    const res = await instance.get("/colors");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getColorsById = async (id: number | string | undefined) => {
  try {
    const res = await instance.get("/colors/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addColor = async (data: IColor) => {
  try {
    const res = await instance.post("/colors", data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateColorById = async (data: IColor) => {
  try {
    const res = await instance.put("/colors/" + data._id, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const DeleteColorById = async (id: number | string | undefined) => {
  try {
    const res = await instance.delete("/colors/" + id);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
