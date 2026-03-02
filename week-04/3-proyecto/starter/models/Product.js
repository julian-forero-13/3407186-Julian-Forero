/**
 * Product Model
 * Represents a product in the inventory
 */

// Configuración básica de stock bajo
const STOCK_THRESHOLDS = {
  low: 10
};

class Product {

  // Auto incremento de ID
  static nextId = 1;

  /**
   * Crear nuevo producto
   * Usa destructuring
   */
  constructor({ name, category, price, quantity }) {

    // ID automático
    this.id = Product.nextId++;

    // Datos principales
    this.name = name;
    this.category = category;
    this.price = Number(price);
    this.quantity = Number(quantity);

    // Fechas
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  /**
   * Valor total (precio * cantidad)
   */
  get totalValue() {
    return this.price * this.quantity;
  }

  /**
   * Stock bajo
   */
  get isLowStock() {
    return this.quantity > 0 && this.quantity < STOCK_THRESHOLDS.low;
  }

  /**
   * Sin stock
   */
  get isOutOfStock() {
    return this.quantity === 0;
  }

  /**
   * Actualizar producto
   */
  update({ name, category, price, quantity } = {}) {

    if (name !== undefined) this.name = name;
    if (category !== undefined) this.category = category;
    if (price !== undefined) this.price = Number(price);
    if (quantity !== undefined) this.quantity = Number(quantity);

    this.updatedAt = new Date();

    return this;
  }

  /**
   * Convertir a objeto plano (para localStorage)
   */
  toJSON() {

    const {
      id,
      name,
      category,
      price,
      quantity,
      createdAt,
      updatedAt
    } = this;

    return {
      id,
      name,
      category,
      price,
      quantity,
      createdAt,
      updatedAt
    };
  }

  /**
   * Reconstruir desde JSON (localStorage)
   */
  static fromJSON(data) {

    const {
      id,
      name,
      category,
      price,
      quantity,
      createdAt,
      updatedAt
    } = data;

    const product = new Product({
      name,
      category,
      price,
      quantity
    });

    // Restaurar valores originales
    product.id = id;
    product.createdAt = new Date(createdAt);
    product.updatedAt = new Date(updatedAt);

    // Ajustar nextId para evitar duplicados
    if (id >= Product.nextId) {
      Product.nextId = id + 1;
    }

    return product;
  }

}

export default Product;