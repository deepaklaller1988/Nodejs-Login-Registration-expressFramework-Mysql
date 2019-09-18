const pool=require('./connection')

function usersModel(){

this.fetchUsers=()=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            var query="SELECT * FROM register WHERE role='user'";
            con.query(query,(err,result)=>{
                err ? reject(err) :resolve(result)
            })

        })
    })
}



this.manageUserStatus=(userDetails)=>{
    return new Promise((resolve,reject)=>{
        pool.getConnection((err,con)=>{
            if(userDetails.status=='block')
                var query="update register set status=0 where regid=?"
            else if(userDetails.status=='unblock')
                var query="update register set status=1 where regid=?"
            else
            var query="delete from register where regid=?"	
            var sqlData=[userDetails.regId]
            con.query(query,sqlData,(err,result)=>{
                err ? reject(err) : resolve(result);
            })	
        })
    })
}


}
module.exports=new usersModel()