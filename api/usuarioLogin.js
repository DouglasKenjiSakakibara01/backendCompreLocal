module.exports=(app)=>{
    const get = async (req, res) => {
        const usuario = await app.database("usuario").select("*");

        return res.json(usuario);
    }
    const login = async (req, res) => {
        const usuario = { ...req.body };
        //A query não esta verificando a senha
        const query=await app.database("usuario").select("email").where({email:usuario.email,senha:usuario.senha});
        const verifica=JSON.stringify(query);

        
        
        if(verifica!='[]'){
            res.status(200).json({message: "Usuário logado com sucesso",verifica});
        }
        else{
            return res.status(400).json({ err: "Verifique se os campos foram preenchidos corretamente"});

        }
    }

    return{get,login}

}