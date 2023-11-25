class Compra {
    constructor(nombre = "", apellido = "", email = "", precio = ""){
        this.nombre = nombre.trim();
        this.apellido = apellido.trim();
        this.email = email.trim();
        this.precio = precio;
    }
}