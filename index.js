const express=require('express');
const app=express();
const {getCoordinates,getAqi}= require('./cityAqi'); 


app.use(express.json());
app.get('/aqi',async(req,res)=>{
	const city=req.query.city;
	const coordinates=await getCoordinates(city);
	const aqi=await getAqi(coordinates);
	res.setHeader("Content-Type","application/json");
	res.send(aqi);	
})

app.listen(5050, ()=>{console.log('Weather App listening on Port 5050')});
