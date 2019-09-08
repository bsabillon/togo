export interface IOrder {
    cartDetailsId: string;
    cartQuantity: string;
    productId: string;
    productName: string;
    price: string;
    productPictureURL: string;
    addressAlias: string;
    addressDescription: string;
    addressPhone: string;
    addressReference: string;
    cardDescription: string;
    statusDescription: string;
}

export interface IOrdersData {
    total: string;
    noproductos: string;
    cartId: string;
}
