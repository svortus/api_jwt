import pgp from '../config/db.js'

export const createClient = (client) =>{
    return pgp.one("INSERT INTO clientes (id, nombre, contraseña)  VALUES ($1,$2,$3) RETURNING *", 
    [client.id, client.nombre, client.contraseña]);
}

