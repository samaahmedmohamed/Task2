const request = require("request")
const forcast =require("./forcast") 
const geocode =require("./geocode") 
const country = process.argv[2]
geocode(country ,(error , data) =>{
    console.log("error :" ,error)
    console.log("data :" ,data)
    forcast(data.latitude ,data.langtude ,(error ,data)=>{
        console.log("error :" ,error)
        console.log("data :" ,data)
    })

})

