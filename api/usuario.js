module.exports = (app) => {
    const get = async (req, res) => {
        const usuario = await app.database("usuario").select("*");

        return res.json(usuario);
    }

    

    const signup = async (req, res) => {
        
        const usuario = { ...req.body };
        const query=await app.database("usuario").where({email:usuario.email})


        

        //verificar se já existe um email cadastrado
        if(query) {
            return res.json({error: "Email já cadastrado"});
        }
        else{
            if(!usuario.email || !usuario.telefone || !usuario.nome ||!usuario.senha || !usuario.confirma){
                return res.status(400).json({ err: "Preencha os campos corretamente!"});

            }
            else if(usuario.senha==usuario.confirma){
                return res.status(400).json({ err: "Confirme a senha corretamente!"});


            }
            else{
                await app.database("usuario")
                .insert(usuario)
                .then(() => res.status(200).json({success: "Usuario cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
            }
        }

    }

    const login = async (req, res) => {
        const usuario = { ...req.body };
        const query1=await app.database("usuario").where({email:usuario.email});
        const query2=await app.database("usuario").where({senha:usuario.senha});
        
        if(query1 && query2){
            res.status(200).json({message: "Usuário logado com sucesso"});
        }
    }

    

    return { get, signup,login}
}