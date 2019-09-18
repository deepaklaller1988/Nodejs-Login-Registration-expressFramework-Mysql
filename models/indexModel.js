const pool=require('./connection')

function indexModel(){

this.registerUser=(userDetails)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            var query="INSERT INTO register VALUES(NULL,?,?,?,?,0,'user')"
            var sqlData=[userDetails.name, userDetails.email, userDetails.password, userDetails.mobile]

            con.query(query,sqlData,(err,result)=>{
                err ? reject(err) : resolve(result)
            })
        })
    })
}

this.loginUser=(userDetails)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            var query="SELECT * FROM register WHERE email=? AND password=? AND status=1"
            var sqlData=[userDetails.email, userDetails.password]

            con.query(query,sqlData,(err,result)=>{
                err ? reject(err) : resolve(result)
            })
        })
    })
}

this.verifyusers=(email)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            var query="update register set status=1 where email=?"
            var sqlData=[email]
            con.query(query,sqlData,(err,result)=>{
                con.release()
                err ? reject(err) : resolve(result);
            })
        })
    })	
}



}

module.exports=new indexModel()