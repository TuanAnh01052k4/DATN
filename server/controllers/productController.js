import { query } from "express"
import ProductModel from "../models/productModel.js"

export const createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body)
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getAllProduct = async (req, res) => {
    try {
        const { slug, minPrice, maxPrice, gender } = req.query;
        //     let query = {};
        // if (categorySlug) {
        //     // Tìm categoryId dựa trên slug
        //     const category = await Category.findOne({ slug: categorySlug });
        //     if (category) {
        //       query.category = category._id;
        //     } else {
        //       return res.status(404).json({ message: 'Category not found' });
        //     }
        //   }

        //   if (minPrice) {
        //     query.price = { ...query.price, $gte: Number(minPrice) };
        //   }

        //   if (maxPrice) {
        //     query.price = { ...query.price, $lte: Number(maxPrice) };
        //   }
        const products = await ProductModel.find().populate('categoryId colors')
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updateAttributeProduct = async (req, res) => {
    try {
        const product = await ProductModel.findById({ _id: req.params.productId })
        const newAttributes = product.attributes.map((item) => item._id == req.body._id ? req.body : item)
        product.attributes = newAttributes
        await product.save()
        return res.status(200).json({
            message: 'Cập nhật số lượng thành công'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const addSizes = async (req, res) => {
    try {
        const product = await ProductModel.findById({ _id: req.params.productId })
        const newSizes = [...product.sizes, ...req.body.sizes]
        const newAttributes = [...product.attributes, ...req.body.attributes]
        product.sizes = newSizes
        product.attributes = newAttributes
        await product.save()
        return res.status(200).json({
            message: 'Cập nhật size thành công'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const addColors = async (req, res) => {
    try {
        const product = await ProductModel.findById({ _id: req.params.productId })
        const newColors = [...product.colors, ...req.body.colors]
        product.colors = newColors
        product.gallerys.push(...req.body.gallerys)
        product.attributes.push(...req.body.attributes)
        await product.save()
        return res.status(200).json({
            message: 'Cập nhật màu sắc thành công'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const getByIdProduct = async (req, res) => {
    try {

        const product = await ProductModel.findById(req.params.productId).populate('categoryId colors')
        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const updateInforProduct = async (req, res) => {
    try {
        const updateProduct = await ProductModel.findByIdAndUpdate({ _id: req.params.productId },
            {
                name: req.body.name,
                categoryId: req.body.categoryId,
                discount: req.body.discount,
                price_new: req.body.price_new,
                price_old: req.body.price_old,
                description: req.body.description,
                featured: req.body.featured,
                status: req.body.status,
                gender: req.body.gender
            },
            { new: true }
        )
        return res.status(200).json(updateProduct)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const updateGallery = async (req, res) => {
    try {

        const product = await ProductModel.findById({ _id: req.params.productId })
        const newGallerys = product.gallerys.map((item) => item._id == req.body._id ? req.body : item)
        product.gallerys = newGallerys
        await product.save()
        return res.status(200).json({
            message: "Update thành công"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {

        const product = await ProductModel.findByIdAndDelete(req.params.productId)
        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const deleteSize = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.productId)
        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        const newSize = product.sizes.filter((item) => item !== req.body.size)
        const newAttributes = product.attributes.filter((item) => item.size !== req.body.size)
        product.sizes = newSize
        product.attributes = newAttributes
        await product.save()
        return res.status(200).json({
            message: "Xóa size thành công !"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const deleteColor = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.productId ).populate("colors")
        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        product.colors = product.colors.filter((item) => item.name !== req.body.name)
        product.gallerys = product.gallerys.filter((item) => item.name !== req.body.name)
        product.attributes = product.attributes.filter((item) => item.color !== req.body.name)
        await product.save()
        return res.status(200).json({
            message: "Xóa màu sắc thành công !"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


