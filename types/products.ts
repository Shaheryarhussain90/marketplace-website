

export interface Product {
    _id : string;
    title : string,
    _type : Product;
    //skip / from product
    productImage? :{  
        asset :{
            _ref : string;
            type : "image";

        }
    };
    price : number;
    description : string;
    discountpercentage: number;
    inNew : string;
    tags: string;
slug: {
    _type : "slug"
    current : string;
};
Inventory : number,
}