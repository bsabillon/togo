export interface Cart {
    cartDetailsId: string;
    cartQuantity: number;
    productId: string;
    productName: string;
    price: number;
    productPictureURL: string;

}

export interface ITotalCart {
    total: number;
}
