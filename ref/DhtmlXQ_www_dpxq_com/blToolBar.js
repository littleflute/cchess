var v_blToolBar = "v0.1.0";
var xdUI 	= document.getElementById("xdUI");
var jd  = runJSDiv;

var tb1 = jd.blDiv(xdUI,"ToolBar1","Real:");
tb1.style.backgroundColor = "green";
var btnReal1 = jd.blBtn(tb1,"real1","real1");
btnReal1.onclick = function(){
  	var href = "https://littleflute.github.io/cchess/ref/DhtmlXQ_www_dpxq_com/real/1.txt";
    jd.loadJS2TA(href);	
}
