import { Product } from "@/types";


const UpdateQuantity = (product: Product) => {
    const decrementQuantity = product.cartQuantity ? product.cartQuantity : 1;
    product.quantity = product.quantity - decrementQuantity;
    return product;
}
 
export default UpdateQuantity;