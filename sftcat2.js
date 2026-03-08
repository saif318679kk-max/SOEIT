fetch("http://localhost:8080/api/categories")
.then(res=>res.json())
.then(data=>{
    });
data.forEach(cat=>{
document.getElementById("categories").innerHTML=html;
});

