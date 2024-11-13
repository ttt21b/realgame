let stage = 0;
let togglemenubackground = true; // Variable to toggle background image
let menubackground1, menubackground2;
let animalImg;

function preload() {
	menubackground1 = loadImage("assets/background1.png");
	menubackground2 = loadImage("assets/background2.png");
	animalImg = loadImage("assets/placeholderanimal.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(CENTER);

	// Create the animal sprite
	animal = new Sprite();
	animal.img = animalImg;
	animal.position = createVector(500, 500);
	animal.visible = false;
	animal.collider = 'k';
	animal.vel = createVector(2, 2); // Set the initial velocity
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
			rect(710, 700, 400, 200, 20); // Start button
			animal.visible = false; // Hide the animal in stage 0
			break;

		case 1:
			// Another menu
			background("grey");
			fill(0, 0, 0, 0); // Transparent rectangle
			strokeWeight(1);
			rect(200, 150, 350, 400); // Optional visual area
			animal.visible = false; 
			break;

			case 2:
				// End screen
				background("white");
				circle(mouseX, mouseY, 200); // Draw a circle at mouse position
				animal.visible = true; // Show the animal in stage 2
	
				// Move the animal
				animal.position.x += animal.vel.x;
				animal.position.y += animal.vel.y;
	
				// Animal movement logic (bouncing off walls)
				if (animal.position.x > windowWidth || animal.position.x < 0) {
					animal.vel.x *= -1; // Reverse horizontal velocity
				}
				if (animal.position.y > windowHeight || animal.position.y < 0) {
					animal.vel.y *= -1; // Reverse vertical velocity
				}
				break;
		}
	}

// Handle stage transitions on mouse release
function mouseReleased() {
	if (stage === 0 && mouseX >= 700 && mouseX <= 1100 && mouseY >= 700 && mouseY <= 900) {
		// Stage 1 transition with the start button
		stage = 1;
	} else if (stage === 1 && mouseX >= 200 && mouseX <= 550 && mouseY >= 150 && mouseY <= 550) {
		// Transition to stage 2
		stage = 2;
	} else if (stage === 2) {
		// Reset to stage 0
		stage = 0;
	}
}
