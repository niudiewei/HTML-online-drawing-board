 
/*                            
 * 文件名称：cancas.js
 * 作者：niudiewei
 * 完成日期：2018年9月4日
 * 版本号：v1.0
*/
  
 function $(id) {
     return document.getElementById(id);
 }
 //获取图像栏按钮
 var Saveimg = $("saveimg");
 var Clearimg = $("clearimg");
 //绘图部分获取
 var canvas = $("canvas");
 var cxt = canvas.getContext("2d");
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
 //设置初始选定按钮、线宽、颜色
 drawBrush(0);
 setLineWith(0);
 setColor(ColorRed, 0);

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
     var flag = 0;
     canvas.onmousedown = function (e) {
         e = window.e || e;
         var startX = e.pageX - this.offsetLeft;
         var startY = e.pageY - this.offsetTop;
         cxt.beginPath();
         cxt.moveTo(startX, startY);
         flag = 1;

     }
     //鼠标移动的时候
     canvas.onmousemove = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         if (flag) {
             cxt.lineTo(endX, endY);
             cxt.stroke();
         }
     }
     //鼠标抬起结束绘图
     canvas.onmouseup = function () {
         flag = 0;
     }
     // 鼠标移出画布时取消画图操作
     canvas.onmouseout = function () {
         flag = 0;
     }
 }

 function drawEraser(num) {
     var flag = 0;
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         var eraserX = e.pageX - this.offsetLeft;
         var eraserY = e.pageY - this.offsetTop;
         cxt.clearRect(eraserX - cxt.lineWidth, eraserY - cxt.lineWidth, cxt.lineWidth * 2, cxt.lineWidth * 2)
         flag = 1;
     }
     canvas.onmousemove = function (e) {
         e = window.e || e;
         var eraserX = e.pageX - this.offsetLeft;
         var eraserY = e.pageY - this.offsetTop;
         if (flag) {
             cxt.clearRect(eraserX - cxt.lineWidth, eraserY - cxt.lineWidth, cxt.lineWidth * 2, cxt.lineWidth * 2)
         }
     }
     canvas.onmouseup = function () {
         flag = 0;
     }
     canvas.onmouseout = function () {
         flag = 0;
     }
 }

 function drawPaint(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function () {
         cxt.fillRect(0, 0, 880, 400);
     }
     canvas.onmouseup = null;
     canvas.onmousemove = null;
     canvas.onmouseout = null;
 }

 function drawStrw(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         var strawX = e.pageX - this.offsetLeft;
         var strawY = e.pageY - this.offsetTop;
         //获取该点坐标处的颜色信息
         cxt.getImageData(strawX, strawY, 1, 1);
         var obj = cxt.getImageData(strawX, strawY, 1, 1);
         cxt.strokeStyle = "rgb(" + obj.data[0] + "," + obj.data[1] + "," + obj.data[2] + ")";
         cxt.fillStyle = "rgb(" + obj.data[0] + "," + obj.data[1] + "," + obj.data[2] + ")";
         alert("我已拾取颜色请小主放心！");
         //回调画笔函数
         drawBrush(0);

     }
     canvas.onmouseup = null;
     canvas.onmousemove = null;
     canvas.onmouseout = null;
 }

 function drawText(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         var textX = e.pageX - this.offsetLeft;
         var textY = e.pageY - this.offsetTop;
         var userVal = window.prompt();
         if (userVal) {
             cxt.fillText(userVal, textX, textY);
         }
     }
     canvas.onmouseup = null;
     canvas.onmousemove = null;
     canvas.onmouseout = null;
 }

 function drawMagnigier(num) {
     setStatus(actions, num, 1);
     var scale = window.prompt();
     var scaleX = 880 * scale / 100;
     var scaleY = 400 * scale / 100;
     canvas.style.width = scaleX + "px";
     canvas.style.height = scaleY + "px";
     //注销其它事件
     canvas.onmousedown = null;
     canvas.onmouseup = null;
     canvas.onmousemove = null;
     canvas.onmouseout = null;
 }

 function drawLine(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         var startX = e.pageX - this.offsetLeft;
         var startY = e.pageY - this.offsetTop;
         cxt.beginPath();
         cxt.moveTo(startX, startY);
     }
     //注销其它事件
     canvas.onmousemove = null;
     canvas.onmouseout = null;
     canvas.onmouseup = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         cxt.lineTo(endX, endY);
         cxt.closePath();
         cxt.stroke();
     }
 }

 function drawArc(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         arcX = e.pageX - this.offsetLeft;
         arcY = e.pageY - this.offsetTop;
     }
     canvas.onmouseup = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         let c = Math.sqrt((endX - arcX) * (endX - arcX) + (endY - arcY) * (endY - arcY)) / 2;
         cxt.beginPath();
         cxt.arc((arcX + (endX - arcX) / 2), (arcY + (endY - arcY) / 2), c, 0, 2 * Math.PI, false);
         cxt.closePath();
         cxt.stroke();
     }

     canvas.onmousemove = null;
     canvas.onmouseout = null;
 }

 function drawRect(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         rectX = e.pageX - this.offsetLeft;
         rectY = e.pageY - this.offsetTop;
     }
     canvas.onmouseup = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         //参数为负无影响
         let a = endX - rectX;
         let b = endY - rectY;
         cxt.beginPath();
         cxt.rect(rectX, rectY, a, b, endX, endY);
         cxt.closePath();
         cxt.stroke();
     }
     cxt.onmouseout = null;
     cxt.onmousemove = null;
 }

 function drawPoly(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         polyX = e.pageX - this.offsetLeft;
         polyY = e.pageY - this.offsetTop;
     }
     canvas.onmouseup = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         cxt.beginPath();
         cxt.moveTo(polyX, endY);
         cxt.lineTo(endX, endY);
         cxt.lineTo(polyX + ((endX - polyX) / 2), polyY);
         cxt.lineTo(polyX, endY);
         cxt.closePath();
         cxt.stroke();
     }
     canvas.onmouseout = null;
     canvas.onmousemove = null;
 }

 function drawArcfill(num) {
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         arcX = e.pageX - this.offsetLeft;
         arcY = e.pageY - this.offsetTop;
     }
     canvas.onmouseup = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         let c = Math.sqrt((endX - arcX) * (endX - arcX) + (endY - arcY) * (endY - arcY)) / 2;
         cxt.beginPath();
         cxt.arc((arcX + (endX - arcX) / 2), (arcY + (endY - arcY) / 2), c, 0, 2 * Math.PI, false);
         cxt.closePath();
         cxt.fill();
     }

     canvas.onmousemove = null;
     canvas.onmouseout = null;
 }

 function drawReactfill(num) {
     setStatus(actions, num, 1);
     setStatus(actions, num, 1);
     canvas.onmousedown = function (e) {
         e = window.e || e;
         rectX = e.pageX - this.offsetLeft;
         rectY = e.pageY - this.offsetTop;
     }
     canvas.onmouseup = function (e) {
         e = window.e || e;
         var endX = e.pageX - this.offsetLeft;
         var endY = e.pageY - this.offsetTop;
         let a = endX - rectX;
         let b = endY - rectY;
         cxt.beginPath();
         cxt.rect(rectX, rectY, a, b, endX, endY);
         cxt.closePath();
         cxt.fill();
     }
     cxt.onmouseout = null;
     cxt.onmousemove = null;
 }
 //线宽按钮绑定
 function setLineWith(num) {
     setStatus(width, num, 1);
     switch (num) {
         case 0:
             cxt.lineWidth = 1;
             break
         case 1:
             cxt.lineWidth = 3;
             break;
         case 2:
             cxt.lineWidth = 5;
             break;
         case 3:
             cxt.lineWidth = 8;
             break;
         default:
             cxt.lineWidth = 1;
     }
 }
 //颜色按钮绑定
 function setColor(obj, num) {
     // alert(num);
     setStatus(colors, num, 0);
     cxt.strokeStyle = obj.id;
     cxt.fillStyle = obj.id;
 };
 //图像部分监听事件
 Clearimg.addEventListener("click", function () {
     cxt.clearRect(0, 0, 880, 400)
 }, false)
 Saveimg.addEventListener("click", function () {
     var url = canvas.toDataURL();
     console.log(url);
     var a = document.createElement("a");
     var event = new MouseEvent("click");
     a.download = name || "HTML在线画板"
     a.href = url;
     a.dispatchEvent(event);
 }, false)