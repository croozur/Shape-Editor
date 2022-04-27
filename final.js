var canvas = new fabric.Canvas('canvas');
canvas.counter = 0;
var newleft = 0;
canvas.selection = false;
var state = [];
var mods = 0;
var myHex = document.getElementById("color_picker").value;
var json;
var border = parseInt(document.getElementById("border_picker").value);

function deleteElement()
{
	canvas.remove(canvas.getActiveObject());
}

canvas.on(
	'object:modified', function () {
		updateModifications(true);
	},
	
	'object:added', function () {
		updateModifications(true);
	}
);

function updateModifications(savehistory) {
	if (savehistory === true) {
		myjson = JSON.stringify(canvas);
		state.push(myjson);
	}
}

function getColor()
{
	myHex = document.getElementById("color_picker").value;
	return String(myHex);
}

function getBorder()
{
	border = document.getElementById("border_picker").value;
	return parseInt(border);
}

function addLine()
{
	var line = new fabric.Line([50, 10, 200, 150], {
		stroke: getColor()
	});
	
	canvas.add(line);
	canvas.counter++;
}

function addCurve()
{
	var curve = new fabric.Path('C 50 50 100 100 150 50', {
		left: 100,
		top: 50,
		stroke: getColor(),
		fill: false,
		scaleY: 3
	});
	canvas.add(curve);
	canvas.counter++;
}

function addPolyline()
{
	var polyline = new fabric.Polyline([
		{x: 200, y: 10 },
		{x: 250, y: 50 },
		{x: 250, y: 180},
		{x: 150, y: 180},
		{x: 150, y: 50 },
		{x: 200, y: 10 },
	],
	{fill: getColor(), stroke: 'black', strokeWidth: getBorder()}
	);
	
	canvas.add(polyline);
	canvas.counter++;
}

function addTriangle()
{
	var triangle = new fabric.Triangle({
		width: 100, 
		height: 100, 
		left: 50, 
		top: 100, 
		fill: getColor(),
		strokeWidth: getBorder(),
		stroke: 'black'
	});
	
	canvas.add(triangle);
	canvas.counter++;
}

function addRectangle()
{
	var rect = new fabric.Rect({
	left: 100,
	top: 150,
	width: 200,
	height: 20,
	fill: getColor(), stroke: 'black', strokeWidth: getBorder()
		});
	canvas.add(rect);
	canvas.counter++;
}

function addSquare()
{
	var square = new fabric.Rect({
	left: 150,
	top: 100,
	width: 150,
	height: 150,
	fill: getColor(), stroke: 'black', strokeWidth: getBorder()
		});
	canvas.add(square);
	canvas.counter++;
}

function addPolygon()
{
	var polygon = new fabric.Polygon(
	[
		{x: 150, y: 10},
		{x: 250, y: 10},
		{x: 280, y: 40},
		{x: 120, y: 40}
	], {fill: getColor(), stroke: 'black', strokeWidth: getBorder()}
	);
	
	canvas.add(polygon);
	canvas.counter++;
}

function addCircle()
{
	var circle = new fabric.Circle({
		radius: 50, left: 150, top: 100, fill: getColor(), stroke: 'black', strokeWidth: getBorder()
	});
	canvas.add(circle);
	canvas.counter++;
}

function addEllipse()
{
	var ellipse = new fabric.Ellipse(
	{
		rx: 100,
		ry: 30,
		radius: 50,
		fill: getColor(),
		stroke: 'black',
		strokeWidth: getBorder()
	});
	
	canvas.add(ellipse);
	canvas.counter++;
}

function addText()
{
	var textbox = new fabric.Textbox('Text', {
		left: 100,
		top: 150,
		fill: getColor(),
		stroke: getColor(),
		strokeWidth: getBorder(),
	});
	
	canvas.add(textbox);
	canvas.counter++;
}

document.querySelector('#new').addEventListener('click', () => {
	canvas.clear();
});

document.querySelector('#download').addEventListener('click', ()=> {
	  var canvas = document.querySelector("canvas");
	  var image = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
	  
	  var element = document.createElement('a');
	  var filename = 'test.jpg';
	  element.setAttribute('href', image);
	  element.setAttribute('download', filename);

	  element.click();
});

undo = function undo() {
	if (mods < state.length) {
		canvas.clear().renderAll();
		canvas.loadFromJSON(state[state.length - 1 - mods - 1]);
		canvas.renderAll();
		mods++;
	}
}

Clone = function Clone()
{
	var object = canvas.getActiveObject();
	object.clone(function(clone) {
		canvas.add(clone.set({
			left: object.left + 10,
			top: object.top + 10
		}));
	});
}


function load(e)
{
	var fileType = e.target.files[0].type;
	var url = URL.createObjectURL(e.target.files[0]);
	
	if (fileType === 'image/png')
	{
		fabric.Image.fromURL(url, function(img) {
			img.set(
			{
				width: 600, 
				height: 600
			});
			canvas.add(img);
		});
	}
}

document.querySelector('#savejson').addEventListener('click', () =>
{
	var canvasContents = canvas.toDataURL();
	var data = {image: canvasContents, date: Date.now()};
	var string = JSON.stringify(data);
	
	var file = new Blob([string], {
		type: 'application/json'
	});
	
	var a = document.createElement('a');
	a.href = URL.createObjectURL(file);
	a.download = 'data.json';
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
});

document.querySelector('#help').addEventListener('click', () =>
{
	alert("Click a shape to add it to the canvas.\
	Click the Text Box to add some text.\
	You can change the color with the color slider.\
	Set a value in the Border Size box to set the thickness of the object's outline.\
	The Delete Button will delete the currently selected object.\
	Click New to fully erase the canvas and start fresh.\
	Undo an unwanted action with the undo button.\
	You can also import images, but keep in mind that only PNG files will work.\
	Enjoy!"
	);
});


