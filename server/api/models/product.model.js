import { v4 as uuid } from 'uuid';

let products = [
  {
    id: '123',
    title: 'Andres',
  },
];

export class Product {
  constructor(title) {
    this.title = title;
    this.id = uuid();
  }

  save() {
    const { id } = this;
    const { title } = this;
    products.push({ id, title });
  }
  static fetchAll() {
    return products;
  }
  static fetchById(id) {
    const userById = products.find((e) => e.id === id);
    return userById;
  }
  static deleteById(id) {
    const productFiltered = products.filter((p) => p.id !== id);
    products = productFiltered;
    return products;
  }
  static update(id, newData) {
    const productIndex = products.indexOf(this.fetchById(id));
    const productsCopy = [...products];
    const validData = {};
    if (newData.title) {
      validData.title = newData.title;
    }
    productsCopy[productIndex] = {
      ...productsCopy[productIndex],
      ...validData,
    };
    products = productsCopy;
    return products;
  }
}
