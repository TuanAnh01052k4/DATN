
import Category from "../models/categoryModel.js";
import slugify from "slugify";
export const create = async (req, res) => {
    try {
        const categoy = await Category.create({
            name: req.body.name,
            status:req.body.status,
            slug: slugify(req.body.name, "-"),
        });

        return res.status(200).json(categoy);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getAll = async (req, res) => {
    try {
        const categories = await Category.find({});
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (category.length === 0)
            return res
                .status(404)
                .json({ message: "Không tìm thấy sản phẩm nào!" });
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error });
    }
};
export const deleteCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error });
    }
};
export const updateCategoryById = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, {...req.body, slug: slugify(req.body.name, "-")}, { new: true });
        return res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error });
    }
};