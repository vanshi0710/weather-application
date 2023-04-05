const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c80d43d651msh9628acb9d98f7dbp1c85f8jsn4366f897e8e5',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


let d = new Date();
var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]

document.getElementById("time-day").innerHTML =d;
function getInfo(){
	var loc=document.getElementById("loc").value;
	document.getElementById("location").innerHTML = "--"+loc+"--";
	fetch('https://weatherapi-com.p.rapidapi.com/current.json?q='+loc, options)
	.then(response => response.json())
	.then(response =>{
		console.log(response)
		document.getElementById("status1").innerHTML=response.current.condition.text;
		document.getElementById("temp").innerHTML= " Temperature :" + response.current.temp_c +"°C" ;
		document.getElementById("humidity").innerHTML= "Humidty : " + response.current.humidity +" g.m-3";
		document.getElementById("speed").innerHTML= "Wind Speed : " + response.current.wind_kph +"Km/hr";
		document.getElementById("imageicon1").innerHTML="<img class='image' src="+response.current.condition.icon +" >";
		
		
	})
}
function defaultFun(){
	getInfo();
}






















// 
// for(let i=1;i<6;i++){
// 	let a=i-1+d.getDay();
// 	if(a>6){
// 		a =a-7;
// 	}
// 	document.getElementById("day"+i).innerHTML = weekDays[a];
// }

// for(let i =1;i<6;i++){
// 	document.getElementById("minval"+i).innerHTML="Min: "+(Number(data.list[i-1].main.temp_min) -273.15).toFixed(1)+"°C";
// 	document.getElementById("maxval"+i).innerHTML="Max: "+(Number(data.list[i-1].main.temp_max)-273.15).toFixed(1)+"°C";
// 	document.getElementById("status"+i).innerHTML=data.list[i-1].weather[0].main;
// 	document.getElementById("imageicon"+i).innerHTML="<img src='https://openweathermap.org/img/wn/"+data.list[i*8-1].weather[0].icon +"@2x.png' >";
// }