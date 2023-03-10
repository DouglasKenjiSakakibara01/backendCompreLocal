module.exports=(app)=>{
    app.route("/users")
     .get(app.api.users.get)

    app.route("/usuario")
     .get(app.api.usuario.get)
     .post(app.api.usuario.signup)
     .post(app.api.usuario.login)
    app.route("/comercio")
     .get(app.api.comercio.get)
     .post(app.api.comercio.signup)  
}