import mongoose from "mongoose";


//Base User Schema

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
})

const Categoy = mongoose.model("Category", categorySchema);

export default Categoy