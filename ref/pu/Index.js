
var gN   = 0;
var gStr = "";
function getFileHref(n)
{
	gN = n;
    var s = "https://littleflute.github.io/cchess/ref/pu/p" + n + ".txt";
    return s;
}
function loadDoc(src) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var str = this.responseText;
   //   document.getElementById("demo").innerHTML =str;
      
      //
      var pos = str.indexOf("xddbg001");
      
      document.getElementById("debug").innerHTML = pos;
      if(pos !=-1)
      {
         gStr += gN;
         gStr += ": ";
         gStr += "<a href=' ";
		 gStr += src;
         gStr += "'> ";
		 gStr += gN;
		 gStr += "</a>";
         gStr += "<br>";
         document.getElementById("myPu").innerHTML = gStr;
		 loadDoc(getFileHref(gN+1));

      }
     //*/
    }
  };
  xhttp.open("GET", src, true);
  xhttp.send();
}
 
loadDoc(getFileHref(1));
