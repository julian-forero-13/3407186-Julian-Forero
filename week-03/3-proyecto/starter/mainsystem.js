/* ============================================
   SISTEMA E-COMMERCE POO - SEMANA 03
   ============================================ */

/* ============================================
   CLASE BASE PRODUCTO
   ============================================ */
class BaseItem {

  #id;
  #name;
  #price;
  #active;
  #dateCreated;

  constructor(name, price){
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#price = price;
    this.#active = true;
    this.#dateCreated = new Date().toISOString();
  }

  /* GETTERS */

  get id(){ return this.#id }
  get name(){ return this.#name }
  get price(){ return this.#price }
  get isActive(){ return this.#active }
  get dateCreated(){ return this.#dateCreated }

  /* SETTERS */

  set price(value){
    if(value <= 0) throw new Error("Precio inválido");
    this.#price = value;
  }

  /* MÉTODOS */

  activate(){
    this.#active = true;
  }

  deactivate(){
    this.#active = false;
  }

  getInfo(){
    throw new Error("Debe implementarse");
  }

  getType(){
    return this.constructor.name;
  }
}

/* ============================================
   TIPOS DE PRODUCTOS
   ============================================ */

class Computer extends BaseItem{

  #ram;
  #storage;

  constructor(name,price,ram,storage){
    super(name,price);
    this.#ram = ram;
    this.#storage = storage;
  }

  getInfo(){
    return {
      id:this.id,
      name:this.name,
      price:this.price,
      ram:this.#ram,
      storage:this.#storage,
      active:this.isActive
    }
  }
}

class Phone extends BaseItem{

  #camera;

  constructor(name,price,camera){
    super(name,price);
    this.#camera = camera;
  }

  getInfo(){
    return {
      id:this.id,
      name:this.name,
      price:this.price,
      camera:this.#camera,
      active:this.isActive
    }
  }
}

class Accessory extends BaseItem{

  #category;

  constructor(name,price,category){
    super(name,price);
    this.#category = category;
  }

  getInfo(){
    return {
      id:this.id,
      name:this.name,
      price:this.price,
      category:this.#category,
      active:this.isActive
    }
  }
}

/* ============================================
   CLASE PERSON
   ============================================ */

class Person{

  #id;
  #name;
  #email;
  #date;

  constructor(name,email){
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#email = email;
    this.#date = new Date().toISOString();
  }

  get id(){ return this.#id }
  get name(){ return this.#name }
  get email(){ return this.#email }
  get date(){ return this.#date }

  set email(value){
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(value)) throw new Error("Email inválido");
    this.#email=value;
  }

  getInfo(){
    return{
      id:this.#id,
      name:this.#name,
      email:this.#email
    }
  }
}

/* ============================================
   ROLES
   ============================================ */

class Customer extends Person{

  #purchases=0;

  addPurchase(){
    this.#purchases++;
  }

  get purchases(){
    return this.#purchases;
  }
}

class Admin extends Person{

  #role="admin";

  get role(){
    return this.#role;
  }
}

/* ============================================
   SISTEMA PRINCIPAL
   ============================================ */

class MainSystem{

  #items=[];
  #users=[];
  #orders=[];

  static{
    this.VERSION="1.0";
    this.MAX_ITEMS=500;
    this.SYSTEM_NAME="TechZone";
    console.log("Sistema cargado");
  }

  /* ITEMS */

  addItem(item){
    if(!(item instanceof BaseItem)){
      return {success:false}
    }

    this.#items.push(item);
    return {success:true};
  }

  removeItem(id){
    this.#items = this.#items.filter(i=>i.id!==id);
  }

  getAllItems(){
    return [...this.#items];
  }

  /* USERS */

  addUser(user){
    if(!(user instanceof Person)){
      return;
    }
    this.#users.push(user);
  }

  getAllUsers(){
    return [...this.#users];
  }

  /* PEDIDOS */

  createOrder(userId,itemId){

    this.#orders.push({
      id:crypto.randomUUID(),
      userId,
      itemId,
      date:new Date()
    });

  }

  /* ESTADISTICAS */

  getStats(){

    const total=this.#items.length;

    const active=this.#items.filter(i=>i.isActive).length;

    return{
      total,
      active,
      inactive: total-active,
      users:this.#users.length,
      orders:this.#orders.length
    }
  }
}

/* ============================================
   INSTANCIA GLOBAL
   ============================================ */

const system = new MainSystem();