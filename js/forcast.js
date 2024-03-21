const request = require("request")
const forcast=(latitude ,langtude , callback)=>{
const url ="https://api.weatherapi.com/v1/current.json?key=fbfc33388fb5495b856115849230712&q="+latitude + "," +langtude

request({url , json:true} , (error ,response)=>
{
    
    if(error){
        callback("error has occured" ,undefined)
    }else if(response.body.error){
        callback(response.body.error.message ,undefined)
    }else{
        callback( undefined,response.body.location.name + "it is :" + response.body.current.condition.text)
        
    }
})
}

module.exports =forcast