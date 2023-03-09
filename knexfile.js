module.exports={
    client:"mysql",
    connection:{
        database:"comprelocal",
        user:"root",
        password:"",

    },
    pool:{
        min:2,
        max:10

    },
    migrations:{
        tableName:"knex_migrations"
    }

}