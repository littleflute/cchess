var tag = "[plxChessBoard.js_v0.132] ";
var nTest = 0;

function createFrame(time) {
    o.makeFrame(time);
}


function CPlxCChessBoard(){
    nTest++;
    var _w = 800;
    var _h = 800;
    var _radius = 23;
	var _chunk = 50;

	var canvas = document.getElementById("myCanvas");
    var _ctx = canvas.getContext("2d"); 

	// 画横线
	var drawRowLine = function (_this) {
		for (var i = 1; i <= 10; i++) {
			_this.drawLine(1, i, 9, i);
		}
	}
	// 画竖线
	var drawColLine = function (_this) {
		for (var i = 1; i <= 9; i++) {
			_this.drawLine(i, 1, i, 10);
		}
	}
	// 画#
	var drawsharpS = function (_this) {
		_this.round(2, 3);
		_this.round(8, 3);
		_this.round(1, 4);
		_this.round(3, 4);
		_this.round(5, 4);
		_this.round(7, 4);
		_this.round(9, 4);
		_this.round(2, 8);
		_this.round(8, 8);
		_this.round(1, 7);
		_this.round(3, 7);
		_this.round(5, 7);
		_this.round(7, 7);
		_this.round(9, 7);
	}
	// 画X
	var drawX = function (_this) {
		_this.drawLine(4, 1, 6, 3, 0.5);
		_this.drawLine(4, 3, 6, 1, 0.5);
		_this.drawLine(4, 8, 6, 10, 0.5);
		_this.drawLine(4, 10, 6, 8, 0.5);
	}
	// 画楚河/漢界
	var drawText = function () {
		_ctx.font = "30px Courier New";
		_ctx.fillStyle = "#000";
		_ctx.fillText("楚 河", _chunk * 2, _chunk * 5 + _chunk / 2 + 10);
		_ctx.fillText("漢 界", _chunk * 6, _chunk * 5 + _chunk / 2 + 10);
		_ctx.font = "12px Courier New";
		var text_arr = ["九", "八", "七", "六", "五", "四", "三", "二", "一"];
		for (var i = 0; i < 9; i++) {
			_ctx.fillText((i + 1).toString(), _chunk * (i + 1) - 5, 20);
			_ctx.fillText(text_arr[i], _chunk * (i + 1) - 5, _chunk * 10 + 30 + 10);
		}
	}

	// 棋盘初始化
    var drawBoard = function (_this) {
		drawRowLine(_this);
		drawColLine(_this);
		_ctx.clearRect(_chunk + 1, _chunk * 5 + 1, _chunk * 8 - 2, _chunk - 2);
		drawsharpS(_this);
		drawX(_this);
		drawText();
	}


    // 初始化
    var _init = function (ctx,_this) {
        _this.ctx = ctx;//
        _this.radius = 23;
        _this.chunk = 50;
        _this.CandidateCircleR = 5;
        _this.steps = [];      // 记录步骤
        _this.currActive = "red";  // 先下
        
    }
    // 画棋子形状
    var _drawPiece = function (ctx,chunk, radius,e) {
        ctx.beginPath();
        ctx.fillStyle = e.bgcolor;
        ctx.strokeStyle = e.bgColor_b;
        ctx.lineWidth = 2;
        ctx.arc(e.x * chunk, e.y * chunk, radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
    // 画棋子文字
    var _drawChessText = function (ctx,chunk,e) {
        ctx.font = "30px Arial";
        ctx.fillStyle = e.color;
        var offset = 16;//this.ctx.measureText(e.text).width / 2;
        ctx.fillText(e.text, e.x * chunk - offset, e.y * chunk + 10);
    }

    // 棋子初始化
    var _init_chess = function (_obj) {
	var Car_b1 = { x: 1, y: 1, text: "車" }
	var Horse_b1 = { x: 2, y: 1, text: "馬" }
	var Elephant_b1 = { x: 3, y: 1, text: "象" }
	var Scholar_b1 = { x: 4, y: 1, text: "士" }
	var Boss_b = { x: 5, y: 1, text: "将" }
	var Scholar_b2 = { x: 6, y: 1, text: "士" }
	var Elephant_b2 = { x: 7, y: 1, text: "象" }
	var Horse_b2 = { x: 8, y: 1, text: "馬" }
	var Car_b2 = { x: 9, y: 1, text: "車" }
	var Cannon_b1 = { x: 2, y: 3, text: "炮" }
	var Cannon_b2 = { x: 8, y: 3, text: "炮" }
	var Soldier_b1 = { x: 1, y: 4, text: "卒" }
	var Soldier_b2 = { x: 3, y: 4, text: "卒" }
	var Soldier_b3 = { x: 5, y: 4, text: "卒" }
	var Soldier_b4 = { x: 7, y: 4, text: "卒" }
	var Soldier_b5 = { x: 9, y: 4, text: "卒" }
	var Car_r1 = { x: 1, y: 10, text: "車" }
	var Horse_r1 = { x: 2, y: 10, text: "馬" }
	var Elephant_r1 = { x: 3, y: 10, text: "相" }
	var Scholar_r1 = { x: 4, y: 10, text: "仕" }
	var Boss_r = { x: 5, y: 10, text: "帅" }
	var Scholar_r2 = { x: 6, y: 10, text: "仕" }
	var Elephant_r2 = { x: 7, y: 10, text: "相" }
	var Horse_r2 = { x: 8, y: 10, text: "馬" }
	var Car_r2 = { x: 9, y: 10, text: "車" }
	var Cannon_r1 = { x: 2, y: 8, text: "炮" }
	var Cannon_r2 = { x: 8, y: 8, text: "炮" }
	var Soldier_r1 = { x: 1, y: 7, text: "兵" }
	var Soldier_r2 = { x: 3, y: 7, text: "兵" }
	var Soldier_r3 = { x: 5, y: 7, text: "兵" }
	var Soldier_r4 = { x: 7, y: 7, text: "兵" }
	var Soldier_r5 = { x: 9, y: 7, text: "兵" } 

	//Jeremy for debug
	Car_b1.color = "green";
	Car_b1.bgcolor = "blue";
	Car_b1.bgColor_b = "green";
	Car_b1.type = "black";
	_drawPiece(_ctx,_chunk, _radius, Car_b1);
	_drawChessText(_ctx,_chunk,Car_b1);
	
	Horse_b1.color = "green";
	Horse_b1.bgcolor = "blue";
	Horse_b1.bgColor_b = "green";
	Horse_b1.type = "black";
	_drawPiece(_ctx,_chunk, _radius, Horse_b1);
	_drawChessText(_ctx,_chunk,Horse_b1);
}

    var _dbg = function(time){
        var oldFont = _ctx.font;
        var old_fillText = _ctx.fillText;
        var old_fillStyle = _ctx.fillStyle;
	    _ctx.fillStyle = "lightblue";
        
        _ctx.clearRect(0,0,_w,_h);
        _ctx.fillRect(0,0,_w,_h);

        var s = tag;
        s += " nTest = " + nTest;
        s += " time = " + time;

        
        _ctx.font = 15 + "px Arial";
	    _ctx.fillStyle = "brown";
        _ctx.fillText(s, 50,11);

        _ctx.font = oldFont;
        _ctx.fillText = old_fillText;
	    _ctx.fillStyle = old_fillStyle;
    }
    this.makeFrame = function (time){ 
        _dbg(time);

        _init(_ctx,xdo);
		drawBoard(xdo);
        _init_chess(xdo);
    }
}

var o = new CPlxCChessBoard();

var xdo = {};



// 画直线
xdo.drawLine = function (x0, y0, x1, y1, lw) {
	var x0 = x0 * this.chunk;
	var y0 = y0 * this.chunk;
	var x1 = x1 * this.chunk;
	var y1 = y1 * this.chunk;
	this.ctx.beginPath();
	this.ctx.strokeStyle = "#000";
	this.ctx.lineWidth = lw ? lw : 1;
	this.ctx.moveTo(x0, y0);
	this.ctx.lineTo(x1, y1);
	this.ctx.stroke();
	this.ctx.closePath();
}

// 画单个#
xdo.round = function (x0, y0) {
	var x0 = x0 * this.chunk;
	var y0 = y0 * this.chunk;
	this.ctx.beginPath();
	this.ctx.strokeStyle = "#000";
	this.ctx.lineWidth = 1;
	if (x0 != this.chunk) {
		// 左上
		this.ctx.moveTo(x0 - 5, y0 - 10);
		this.ctx.lineTo(x0 - 5, y0 - 5);
		this.ctx.lineTo(x0 - 10, y0 - 5);
		// 左下
		this.ctx.moveTo(x0 - 5, y0 + 10);
		this.ctx.lineTo(x0 - 5, y0 + 5);
		this.ctx.lineTo(x0 - 10, y0 + 5);
	}
	if (x0 != this.chunk * 9) {
		// 右上
		this.ctx.moveTo(x0 + 5, y0 - 10);
		this.ctx.lineTo(x0 + 5, y0 - 5);
		this.ctx.lineTo(x0 + 10, y0 - 5);
		// 右下
		this.ctx.moveTo(x0 + 5, y0 + 10);
		this.ctx.lineTo(x0 + 5, y0 + 5);
		this.ctx.lineTo(x0 + 10, y0 + 5);
	}
	this.ctx.stroke();
	this.ctx.closePath();
}



