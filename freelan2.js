fetch("http://localhost:8080/api/freelancers")
.then(res=>res.json())
.then(data=>{

let html="";

data.forEach(f=>{

});

document.getElementById("freelancers").innerHTML=html;

});
