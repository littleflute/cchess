var v_blToolBar = "v0.0.5";
var xdUI 	= document.getElementById("xdUI");
var jd  = runJSDiv;

var tb1 = jd.blDiv(xdUI,"ToolBar1","TB1:");
tb1.style.backgroundColor = "green";
var btnReal1 = jd.blBtn(tb1,"real1","real1");
btn1.onclick = function(){
  	var href = "https://littleflute.github.io/chess/ref/DhtmlXQ_www_dpxq_com/real/1.txt";
    jd.loadJS2TA(href);	
}
