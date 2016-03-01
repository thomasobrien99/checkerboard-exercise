// Your JS goes here
var body = document.getElementsByTagName('body')[1];

var counter = 0;

var randomRedBase = Math.floor(Math.random() * (45 - 30)) + 30;
var randomGreenBase = Math.floor(Math.random() * (45 - 30)) + 30;
var randomBlueBase = Math.floor(Math.random() * (45 - 30)) + 30;

var randomRed = randomRedBase;
var randomGreen = randomGreenBase;
var randomBlue = randomBlueBase;

for(var i = 0; i < 9; i++)
{
	var row = document.createElement('div');
	for(var j = 0; j < 9; j++)
	{
		randomRed = Math.floor(randomRed*1.03);
    randomGreen = Math.floor(randomGreen*1.03);
    randomBlue = Math.floor(randomBlue*1.03);
		
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