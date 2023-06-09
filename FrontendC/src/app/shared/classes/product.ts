// Products
export interface Product {
    idProducto?: string;
    descripcion?: string;
    id?: number;
    title?: string;
    description?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    price?: number;
    valor?: number;
    sale?: boolean;
    discount?: number ;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Images[];
    imagen?: Images;
}

export interface Variants {
    variant_id?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    image_id?: number;
}

export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
    variant_id?: any[];
}