const pool = require("../utils/mysqlutil.js");

class UploadsModel {
  
    queryAll(vName,vDesc,vUrl,userId,cb) {
        pool.getConnection(function (e, conn) {
         
            const sql = "insert into video (vName,vDesc,vUrl,userId) values(?,?,?,?)";
            conn.query(sql,[vName,vDesc,vUrl,userId],function(e2,r){
                conn.release();
           
                cb(r)
            })
        })
    }
}
module.exports=UploadsModel;