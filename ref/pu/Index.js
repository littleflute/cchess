var v="v0.0.8";
var n = 0;
n++;
var s = "p";
s += n;
s += ".txt";
function blDiv(oBoss,id,html){
    var r = document.getElementById(id);
    if(!r){
        r = document.createElement("div");
        r.id = id;
        r.style.border = "1px solid #3d3d3d";
        r.style.position = "fixed";
        r.style.top	=0;
        r.style.width = "100%";
        r.style.height = "100%";
        r.style.backgroundColor="rgb(0,100,120)";
        r.style.display = "none";

    	r.innerHTML = html; 
    	if(oBoss!=null) oBoss.appendChild(r);
    }
    return r;
}
function parsMoveList(param)
{ 
            var p1 = blDiv("myPu","p1",v);
}
$("#myPu").load(s, function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
            { 
                parsMoveList(responseTxt);
            }
            if(statusTxt == "error")
            {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });
