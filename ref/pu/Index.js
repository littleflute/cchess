
var v_Index_js 	= "v0.1.3";
var pw		= "xddbg001";
var gN   = 0;
var gStr = "";
function getFileHref(n)
{
    gN = n;
    var s = "https://littleflute.github.io/cchess/ref/pu/p" + n + ".txt";
    return s;
}

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
        r.style.display = "block";

    	r.innerHTML = html; 
    	if(oBoss!=null) oBoss.appendChild(r);
    }
    return r;
} 

function parseText2Div(idDiv,txt)
{
        var myBoss = document.getElementById(idDiv);
	var strID = "p"+gN;
	var d1	= blDiv(myBoss,strID,strID);
	//var myObj = JSON.parse(txt);
}

function loadDoc(src) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var str = this.responseText; 
      var pos = str.indexOf(pw);
      
      document.getElementById("debug").innerHTML = pos;
      if(pos !=-1)
      {
         gStr += gN;
         gStr += ": ";
         gStr += "<a target='_blank' href=' ";
	 gStr += src;
         gStr += "'> ";
	 gStr += gN;
	 gStr += "</a>";
         gStr += "<br>";
         document.getElementById("myPu").innerHTML = gStr;
	 parseText2Div("myPu2",str);     
	 loadDoc(getFileHref(gN+1));
      } 
    }
  };
  xhttp.open("GET", src, true);
  xhttp.send();
}
 
loadDoc(getFileHref(1));
