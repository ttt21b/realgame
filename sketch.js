let ball, ballX, ballY;
let stage = 0;
let togglemenubackground = true; // Variable to toggle background image
let menubackground1, menubackground2;

function preload() {
	menubackground1 = loadImage("background1.png");
	menubackground2 = loadImage("background2.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	ball = new Sprite();
	ball.color = 'white';
	ball.diameter = 50;
	ball.visible = false; // Initially hidden

	// Set ball initial position
	ballX = windowWidth / 2;
	ballY = windowHeight / 2;
}

function draw() {
	switch (stage) {
		case 0:
			// Title screen with alternating background
			if (frameCount % 100 === 0) {
				togglemenubackground = !togglemenubackground; // Toggle the background every 100 frames
			}
			background(togglemenubackground ? menubackground1 : menubackground2);

			fill("black");
			rect(710, 700, 400, 200, 20);
			ball.visible = false; // ball is hidden but still shows if you click through all the stages
			break;

		case 1:
			// Another menu
			background("grey");
			fill(0, 0, 0, 0);
			strokeWeight(1)
			rect(200, 150, 350, 400);
			

			// Set ball's position
			ball.x = ballX;
			ball.y = ballY;
			break;

		case 2:
			// End screen
			background("black");
			ball.visible = false; 
	}
	
	console.log(mouseX, mouseY);
}

// Handle stage transitions on mouse release
function mouseReleased() {
	if (stage === 0 && mouseX >= 700 && mouseX <= 1100 && mouseY >= 700 && mouseY <= 900) {
		// stage 1 transition with the start button
		stage = 1;
	} else if (stage === 1 && mouseX >= 200 && mouseX <= 550 && mouseY >= 150 && mouseY <= 550) {
		 {
			stage = 2;
		}
	} else if (stage === 2) {
		// Reset to stage 0
		stage = 0;
	}
}
