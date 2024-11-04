let ball;
let stage = 0;

function setup() {
	new Canvas(windowWidth, windowHeight);
	displayMode('centered');


}

function draw() {

	switch (stage) {
		case 0:
			//title
			background("white");
			rect(400,300,200, 50,20);
			if(mouseX >= 400 && mouseX <= 600 && mouseY >= 300 && mouseY <= 350 && mouseIsPressed == true) {
				stage = 1;
			}
			if (kb.pressing('a')) {
				stage = 2;
			}
			break;
		case 1:
			//another menu
			background("grey");
			if (mouse.presses()) {
				stage = 2;
			}
			break;
		case 2:
			//end
			background("black");
			if (mouse.presses()) {
				stage = 0;
			}
			break;
		}
	
		console.log(mouseX,mouseY)
	}
	