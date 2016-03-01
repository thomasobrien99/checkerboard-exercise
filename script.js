// Your JS goes here
var body = document.getElementsByTagName('body')[1];

var counter = 0;

for(var i = 0; i < 9; i++)
{
	var row = document.createElement('div');
	for(var j = 0; j < 9; j++)
	{
		var column = document.createElement('div');
		column.style.width = "11.1%";
		column.style.backgroundColor = "red";
		column.style.float = "left";
		column.style.paddingBottom= "11.1%";


		if(counter % 2 === 0)
		{
			column.style.backgroundColor = "black";
		}

		row.appendChild(column);
		counter++;
	}
  document.body.appendChild(row);
}
