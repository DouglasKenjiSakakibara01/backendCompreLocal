module.exports=(app)=>{
    app.route("/users")
     .get(app.api.users.get)

    app.route("/usuarioCadastro")
     .get(app.api.usuarioCadastro.get)
     .post(app.api.usuarioCadastro.signup)
    app.route("/usuarioLogin")
    .get(app.api.usuarioLogin.get)
    .post(app.api.usuarioLogin.login)

     
    app.route("/comercio")
     .get(app.api.comercio.get)
     .post(app.api.comercio.signup)  
}