module.exports = (app) => {
    const get = async (req, res) => {
        const comercio = await app.database("comercio").select("*");

        return res.json(comercio);
    }

    

    const signup = async (req, res) => {
        
        const comercio = { ...req.body };
        
        if(!usuario.nome ||!usuario.cpf || !usuario.rg || !usuario.cnpj || !usuario.endereco){
                return res.status(400).json({ err: "Preencha os campos obrigatórios corretamente!"});

            }
        else{
                await app.database("comercio")
                .insert(usuario)
                .then(() => res.status(200).json({success: "comercio cadastrado com sucesso!"}))
                .catch((err) => res.status(500).send(err));
            }
        }


    

    return { get, signup}
}