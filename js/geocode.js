const request = require("request")

const geocode=(address ,callback)=>{
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"
    
    request({url , json:true} , (error ,response)=>
    {
        // const latitude =response.body.features[0].center[0]
        const langtude =response.body.features[0].center[1]
        
        if(error){
            callback("error has occured" , undefined)
        }else if(response.body.message){
            console.log(response.body.message , undefined)
        }else{
            callback(undefined, {
                latitude:response.body.features[0].center[0]
                 ,langtude:response.body.features[0].center[1]
                })
            
        }
    })}

module.exports=geocode  