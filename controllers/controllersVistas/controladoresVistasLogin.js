const { Usuario } = require('../../modelo/usuario');
const { Dao_Carta } = require('../../servicio/dao_carta');
const { Negocio_login} = require('../../servicio/negocio_login')
const ejs = require('ejs');
const path = require('path');


class ControladorVistaLogIn{
    static async getLogIn(req,res){
        let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaLogin.ejs'),{mensaje:'hola'});
        res.status(200).send(html);
    }

    static async postLogIn(req,res){
        const data = req.body;
        const token = await Negocio_login.login(data.usu_nombre, data.usu_password);

        if(token){
            req.session.user = { usu_nombre: data.usu_nombre};
            res.redirect('/');
        }else{
            let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaLogin.ejs'),{mensaje:'Error de Autenticacion'});
            res.status(400).send(html);
        }




    }


}

module.exports = ControladorVistaLogIn;