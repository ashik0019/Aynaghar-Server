import { Product } from "../../models/product.js";


export const getProductsByCategoryId = async (req, reply) => {
    const { categoryId } = req.params;

    try {
        const products = await Product.find({ category: categoryId })
            .select("_category")
            .exec();
        return reply.send(products)
    } catch (error) {
        return reply.send(500).send({ message: "An error occurred", error });
    }
}