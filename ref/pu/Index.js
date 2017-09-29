var v="v0.0.6";
var n = 0;
n++;
var s = "p";
s += n;
s += ".txt";
$("#myPu").load(s, function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
            {
                alert("External content loaded successfully!");
            }
            if(statusTxt == "error")
            {
                alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });
