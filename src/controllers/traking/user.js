import { Customer, DeliveryPartner } from "../../models/index.js";

export const updateUser = async (req, reply) => {
    try {
        const { userId } = req.user;
        const updateData = req.body;
        let user = await Customer.findById(userId) || await DeliveryPartner.findById(userId)
        if (!user) {
            return reply.status(400).send({ message: "User not found" });
        }

        let UserModel;
        if (user.role === 'Customer') {
            UserModel = Customer;
        } else if (user.role === 'DeliveryPartner') {
            UserModel = DeliveryPartner;
        } else {

        }


    } catch (error) {

    }
}