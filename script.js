function getInfo(){
	const loc=document.getElementById("loc").value;
	document.getElementById("location").innerHTML = "--"+loc+"--";
	fetch('https://api.openweathermap.org/data/2.5/forecast?q='+loc+'&appid=2320b08dec159140289d2969cec975fc')
	.then(response => response.json())
	.then(data =>{
		console.log(data)
		for(let i =1;i<6;i++){
			document.getElementById("minval"+i).innerHTML="Min: "+(Number(data.list[i*8-1].main.temp_min) -273.15).toFixed(1)+"°C";
			document.getElementById("maxval"+i).innerHTML="Max: "+(Number(data.list[i*8-1].main.temp_max)-273.15).toFixed(1)+"°C";
			document.getElementById("status"+i).innerHTML=data.list[i*8-1].weather[0].main;
			document.getElementById("imageicon"+i).innerHTML="<img src='https://openweathermap.org/img/wn/"+data.list[i*8-1].weather[0].icon +"@2x.png' >";
		}
	})
}


let d = new Date();
var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
for(let i=1;i<6;i++){
	let a=i-1+d.getDay();
	if(a>6){
		a =a-7;
	}
	document.getElementById("day"+i).innerHTML = weekDays[a];
}
function defaultFun(){
	getInfo();
}