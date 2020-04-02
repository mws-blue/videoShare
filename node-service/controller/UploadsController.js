const UploadsModel=require("../model/UploadsModel.js");

class UploadsController {
    constructor(){
        this.uploadsModel=new UploadsModel()
    }

    queryAll(req,res){
        let vName=req.body.vName;
        let vDesc=req.body.vDesc;
        let vUrl=req.body.vUrl;
        let userId=req.body.userId
    
        this.uploadsModel.queryAll(vName,vDesc,vUrl,userId,function(r){
      
            res.json(r)
        })
    }
}

module.exports=UploadsController;