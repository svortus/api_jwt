import createClient from "../models/usersModels.js"
import crypt from 'bcrypt'
const saltRounds = 10;

export const insertClient = (req, res) =>{
    const [id]= req.body;
    const [nombre]= req.body;
    const [contraseña] = req.body;
    contraseña = crypt.hash(contraseña,saltRounds,function(err, hash){});
    const client = [id,nombre,contraseña];
    createClient(client)
        .then((data)=>{
            res.status(201).json(
                {
                    status: "sucess",
                    data: data,
                    message: "Client created succesfully"
                }
            )
        })
        .catch((error)=>{
            res.status(400).json(
                {
                    status: "error",
                    data: error,
                    message: "Fail to create client"
                }
            )
        })
}