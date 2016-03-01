// Your JS goes here
var body = document.getElementsByTagName('body')[1];

var counter = 0;

for(var i = 0; i < 9; i++)
{
	var row = document.createElement('div');
	for(var j = 0; j < 9; j++)
	{
		var randomRed = Math.floor(Math.random()*255);
		var randomGreen = Math.floor(Math.random()*255);
		var randomBlue = Math.floor(Math.random()*255);

		var column = document.createElement('div');
		column.style.width = "11.1%";
		column.style.backgroundColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
		column.style.float = "left";
		column.style.paddingBottom= "11.1%";

		row.appendChild(column);
		counter++;
	}
  document.body.appendChild(row);
}
