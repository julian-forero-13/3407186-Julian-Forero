class BaseItem{

#id;
#name;
#price;
#active;

constructor(name,price){
this.#id=crypto.randomUUID();
this.#name=name;
this.#price=price;
this.#active=true;
}

get id(){return this.#id}
get name(){return this.#name}
get price(){return this.#price}
get isActive(){return this.#active}

activate(){this.#active=true}
deactivate(){this.#active=false}

getInfo(){
throw new Error("Implementar");
}

getType(){
return this.constructor.name;
}
}

/* Tipos */

class Computer extends BaseItem{
#ram;

constructor(name,price,ram){
super(name,price);
this.#ram=ram;
}

getInfo(){
return{
id:this.id,
name:this.name,
price:this.price,
ram:this.#ram
}
}
}

class Phone extends BaseItem{
#camera;

constructor(name,price,camera){
super(name,price);
this.#camera=camera;
}

getInfo(){
return{
id:this.id,
name:this.name,
price:this.price,
camera:this.#camera
}
}
}

class Accessory extends BaseItem{
#category;

constructor(name,price,category){
super(name,price);
this.#category=category;
}

getInfo(){
return{
id:this.id,
name:this.name,
price:this.price,
category:this.#category
}
}
}

/* PERSON */

class Person{

#id;
#name;
#email;

constructor(name,email){
this.#id=crypto.randomUUID();
this.#name=name;
this.#email=email;
}

get id(){return this.#id}
get name(){return this.#name}
get email(){return this.#email}
}

/* SISTEMA */

class MainSystem{

#items=[];
#users=[];
#orders=[];

static{
this.VERSION="1.0";
this.SYSTEM_NAME="TechZone";
}

addItem(item){
this.#items.push(item);
}

addUser(user){
this.#users.push(user);
}

createOrder(order){
this.#orders.push(order);
}

getStats(){
return{
total:this.#items.length,
users:this.#users.length,
orders:this.#orders.length
}
}
}

const system = new MainSystem();