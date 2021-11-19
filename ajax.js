function ajax(){
    var xhttp = new XMLHttpRequest();
    // console.log(xhttp);
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            // console.log(response);
            var Jpeople=response.people;
            var output="";
            for(var i=0;i<Jpeople.length;i++){
                output += "<tr><td>"+ Jpeople[i].SLNO +"</td><td>"+Jpeople[i].NAME+
                "</td><td>"+Jpeople[i].QUANTITY+"</td><td>"+Jpeople[i].UNIT+"</td><td>"+Jpeople[i].DEPARTMENT+"</td><td>"+Jpeople[i].NOTES+"</td></tr>";
                
            }
            document.getElementById("demo").innerHTML=output;
        }
    }
    xhttp.open("GET","grocery.json",true);
    xhttp.send();
}