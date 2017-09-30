var v_blToolBar = "v0.0.3";
var xdUI 	= document.getElementById("xdUI");
var jd  = runJSDiv;

var tb1 = jd.blDiv(xdUI,"ToolBar1","TB1:");
tb1.style.backgroundColor = "green";
var btn1 = jd.blBtn(tb1,"btn1","btn1");
btn1.onclick = function(){
  	var href = "https://littleflute.github.io/blog/js/blDraggableDIV.js";
    jd.loadJS2TA(href);	
}
