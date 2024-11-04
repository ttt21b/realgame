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
			if (mouse.presses()) {
				stage = 1;
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
	
		log.stage
	}
	