class Dao {
    static #host = null;//url para coneccion http a la base de datos
    static #user = null;//si tubiese usuario va aqui
    static #password = null;//si tubiese contraseña va aqui
    static #database = null;
    static #mysql=null;

    static recuperarEnv(){
        if(!this.#host){
            require('dotenv').config({ path: __dirname + '/../.env' });
            this.#host = process.env.HOST;
            this.#user = process.env.USER;
            this.#password = process.env.PASSWORD;
            this.#database = process.env.DATABASE;
        }
    }

    static async getConeccion(){
        if (this.#host == null){
            this.recuperarEnv();
        }

        if(this.#mysql == null){
            this.#mysql = require('mysql2/promise');
        }

        return await this.#mysql.createConnection({
            host: this.#host,
            user: this.#user,
            password: this.#password,
            database: this.#database
        });
    }
}

module.exports = { Dao };