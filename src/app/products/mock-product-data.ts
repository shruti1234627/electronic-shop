import { Product } from "./product";

export class MockData {

    public static Products: Product[] = [
        {
            'id' : 1,
            'title': 'Realme X7',
            'modelName': 'F5 Youth',
            'color': 'Silver',
            'productType': 'Mobile',
            'brand': 'Realme',
            'price': 19999
        },
        {
            'id' : 2,
            'title': 'Dell Inspiron 7000',
            'modelName': 'Inspiron',
            'color': 'Gray',
            'productType': 'Laptop',
            'brand': 'DELL',
            'price': 59990,
            
        },
        {
            'id' : 3,
            'title': 'I phone',
            'modelName': '12 R',
            'color': 'Black',
            'productType': 'Mobile',
            'brand': 'Apple',
            'price': 79999,
            
        }
    ]
}