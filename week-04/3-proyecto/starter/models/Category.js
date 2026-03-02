/**
 * Category Model
 * Represents a product category
 */

class Category {

  /**
   * Crear una nueva categoría usando destructuring
   */
  constructor({ id, name, icon = '📦' }) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }

  /**
   * Nombre para mostrar con ícono
   */
  get displayName() {
    return `${this.icon} ${this.name}`;
  }

  /**
   * Convertir a formato option para <select>
   */
  toOption() {
    return {
      value: this.id,
      text: this.displayName
    };
  }

}

export default Category;