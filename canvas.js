function $(id) {
    return document.getElementById(id);
}

//获取工具按钮
var Brush = $("means_brush");
var Eraser = $("means_eraser");
var Paint = $("means_paint");
var Straw = $("means_straw");
var Texter = $("means_text");
var Magnifier = $("means_magnifier");
//获取形状按钮
var Line = $("means_line");
var Arc = $("means_arc");
var Rect = $("means_rect");
var Poly = $("means_poly");
var Arcfill = $("means_arcfill");
var Reactfill = $("means_reactfill");
//获取线宽按钮
var line_1 = $("width_1");
var line_3 = $("width_3");
var line_5 = $("width_5");
var line_8 = $("width_8");
//获取颜色按钮
var ColorRed = $("red");
var ColorGreen = $("green");
var ColorBlue = $("blue");
var ColorYellow = $("yellow");
var ColorWhite = $("white");
var ColorBlack = $("black");
var ColorPink = $("pink");
var ColorPurple = $("purple");
var ColorCyan = $("cyan");
var ColorOrange = $("orange");

var actions = [Brush, Eraser, Paint, Straw, Texter, Magnifier, Line, Arc, Rect, Poly, Arcfill, Reactfill];
var width = [line_1, line_3, line_5, line_8];
var colors = [ColorRed, ColorGreen, ColorBlue, ColorYellow, ColorWhite, ColorBlack, ColorPink, ColorPurple, ColorCyan, ColorOrange]
//状态设置函数
function setStatus(Arr, num, type) {
    for (var i = 0; i < Arr.length; i++) {
        if (i == num) {
            if (type == 1) {
                Arr[i].style.background = "yellow";
            } else {
                Arr[i].style.border = "1px solid #fff";
            }
        } else {
            if (type == 1) {
                Arr[i].style.background = "#ccc";
            } else {
                Arr[i].style.border = "1px solid #000";
            }
        }
    }
}

//工具和形状按钮点击绑定
function drawBrush(num) {
    setStatus(actions, num, 1);
}

function drawEraser(num) {
    setStatus(actions, num, 1);
}

function drawPaint(num) {
    setStatus(actions, num, 1);
}

function drawStrw(num) {
    setStatus(actions, num, 1);
}

function drawText(num) {
    setStatus(actions, num, 1);
}

function drawMagnigier(num) {
    setStatus(actions, num, 1);
}

function drawLine(num) {
    setStatus(actions, num, 1);
}

function drawArc(num) {
    setStatus(actions, num, 1);
}

function drawRect(num) {
    setStatus(actions, num, 1);
}

function drawPoly(num) {
    setStatus(actions, num, 1);
}

function drawArcfill(num) {
    setStatus(actions, num, 1);
}

function drawReactfill(num) {
    setStatus(actions, num, 1);
}
//线宽按钮绑定
function setLineWith(num) {
    setStatus(width, num, 1);
}
//颜色按钮绑定
function setColor(num) {
    // alert(num);
    setStatus(colors, num, 0);
};