import colorModel from "../models/colorModel.js";

export const create = async (req, res) => {
  try {
    const color = await colorModel.create(req.body);

    return res.status(200).json(color);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getAll = async (req, res) => {
  try {
    const colors = await colorModel.find();

    return res.status(200).json(colors);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getcolorById = async (req, res) => {
  try {
    const color = await colorModel.findById(req.params.colorId);
    if (!color)
      return res.status(404).json({ message: "Không tìm thấy sản phẩm nào!" });
    return res.status(200).json(color);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export const deletecolorById = async (req, res) => {
  try {
    const color = await colorModel.findByIdAndDelete(req.params.colorId);
    return res.status(200).json(color);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
export const updatecolorById = async (req, res) => {
  try {
    const color = await colorModel.findByIdAndUpdate(
      req.params.colorId,
      req.body,
      { new: true }
    );
    return res.status(200).json(color);
  } catch (error) {
    return res.status(500).json({ error });
  }
};
