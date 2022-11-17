
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


car2_width = 75;
car2_height = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";


car2_x = 5;
car2_y= 225;

function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=backgroundImage;

	car2_imgTag=new Image();
	car2_imgTag.onload=uploadGreenCar;
	car2_imgTag.src=greencarImage;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadGreenCar() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car2_y >=0){
		car2_y = car2_y - 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(car2_y <=400){
		car2_y = car2_y + 10;
		uploadBackground();
		uploadGreenCar();
	}
}

function left()
{
	if(car2_x >=0){
		car2_x = car2_x - 10;
		uploadBackground();
		uploadGreenCar();
}
}

function right()
{
	if(car2_x <=800){
		car2_x = car2_x + 10;
		uploadBackground();
		uploadGreenCar();
}
}