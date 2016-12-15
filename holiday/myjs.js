var imageArray = [
  
    "https://image.freepik.com/free-vector/merry-christmas-illustration_23-2147527653.jpg",
    "https://images.clipartpanda.com/christmas-tree-clip-art-xmas_christmas_tree_5-3333px.png", 
    
    
    
      
];
var currentIndex = 0;

function renderImage() {
	if (currentIndex < 0) {
		currentIndex = imageArray.length - 1;
	} else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	}

	$('#thePhoto').attr('src', imageArray[currentIndex]);
}
renderImage();

$('#forwardBtn').on('click', function(){
	
	currentIndex++;
	renderImage();
});

$('#backBtn').on('click', function(){
	currentIndex--;
	renderImage();
});

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + 
"!";
$("h1").html(outputString);


google.charts.load('current', {'packages':['corechart']});


google.charts.setOnLoadCallback(drawChart);


function drawChart() {


var data = new google.visualization.DataTable();
data.addColumn('string', 'Person');
data.addColumn('number', 'Hoilday Cheer');
data.addRows([
  ['Mom', 40],
  ['Megan', 10],
  ['Nick', 20],
  ['Sal(the cat)', 2],
  ['Dad', 25]
]);

var chartWidth = $(window).width()*0.35;


var options = {
	'title':'Holliday cheer of My Family',
    'width':chartWidth,
    'height':300,
    'backgroundColor': '#8CBEB2',
    'colors': ['green'],
    'fontName': 'futura'
};


var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
chart.draw(data, options);
}

var audio = new Audio('Heat Miser Song.mp3');
audio.play();

    
    
    
    
    


