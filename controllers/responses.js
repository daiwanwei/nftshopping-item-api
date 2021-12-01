function responseWithData(res,code,msg,data){
    res.status(200).send({
        code: code,
        msg: msg,
        data:data,
    });
}

function responseWithoutData(res,code,msg){
    res.status(200).send({
        code: code,
        msg: msg,
    });
}

module.exports={
    responseWithData:responseWithData,
    responseWithoutData:responseWithoutData,
}
