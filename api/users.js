module.exports=(app)=>{
    const get=(req,res)=>{
        const users=[
            {
                "id":1,
                "name": "usuario1"
            },
            {
                "id":2,
                "name":"usuario2"
            }
        ];
        return res.json(users);

    }
    return {get}
}
