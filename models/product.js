import mongoose, {model, models} from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    picture: String   
});

const Product = mongoose.connection.models.Product || mongoose.model('Product', ProductSchema);

export default Product;