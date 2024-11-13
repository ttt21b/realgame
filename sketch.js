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
	animal.visible = false; // Initially hidden
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

			// Draw the start button
			fill("black");
			rect(710, 700, 400, 200, 20); // Start button area
			animal.visible = false; // Hide the animal in stage 0
			break;

		case 1:
			// Another menu
			background("grey");
			fill(0, 0, 0, 0); // Transparent rectangle
			strokeWeight(1);
			rect(200, 150, 350, 400); // Optional visual area
			animal.visible = false; // Hide the animal in stage 1
			break;

		case 2:
			// End screen
			background("grey"); // Black background for stage 2

			// Draw a white circle at the mouse position
			fill("white");
			noStroke();
			let circleRadius = 300; // Circle radius (diameter was 600)
			circle(mouseX, mouseY, circleRadius * 2); // Circle with a fixed diameter of 600

			
	

			// Move the animal and check if it's inside the circle
			animal.position.x += animal.vel.x;
			animal.position.y += animal.vel.y;

		
				animal.visible = true;
			
			
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
	// Check if mouse clicked on the start button in stage 0
	if (stage === 0 && mouseX >= 710 && mouseX <= 1110 && mouseY >= 700 && mouseY <= 900) {
		stage = 1; // Transition to stage 1
	} 
	// Check if mouse clicked within the rectangle area in stage 1
	else if (stage === 1 && mouseX >= 200 && mouseX <= 550 && mouseY >= 150 && mouseY <= 550) {
		stage = 2; // Transition to stage 2
	} 
	// If in stage 2, reset to stage 0
	else if (stage === 2) {
		// Set a threshold distance (e.g., 20 pixels) to detect if the mouse is close to the animal
		let threshold = 20;
		let distToAnimal = dist(mouseX, mouseY, animal.position.x, animal.position.y);
		if (distToAnimal < threshold) {
			stage = 0; // Reset to stage 0 if clicked near the animal
		}
	}
}