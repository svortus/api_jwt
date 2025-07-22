import PgPromise from 'pggromise'
const database = PgPromise()
const pgp = database({
    host: 'localhost',
    port: 5432,
    database: 'restaurante_db',
    user: 'postgres',
    password: '1234'
})

pgp.one("SELECT $1 AS VALUE",1234)
    .then(data, () => {
            console.log("conncetion sucess:", data.value);
    })
    .catch(error, () =>{
        console.error("connection fail:",error);
    });

export default pgp;

