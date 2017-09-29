var v="v0.0.7";
var n = 0;
n++;
var s = "p";
s += n;
s += ".txt";
function parsMoveList(param)
{
            alert(param);
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
