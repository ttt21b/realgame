let stage = 0;
let togglemenubackground = true; // Variable to toggle background image
let menubackground1, menubackground2;
let animalImg;
let animaldeadImg;
let animalisdead = false; //  flag

function preload() {
	menubackground1 = loadImage("assets/background1.png");
	menubackground2 = loadImage("assets/background2.png");
	animalImg = loadImage("assets/placeholderanimal.png");
	animaldeadImg = loadImage("assets/redx.png")
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
	// make the velocity more

	animaldead = new Sprite();
	animaldead.img = animaldeadImg;
	animaldead.position = animal.position;
	animaldead.visible = false;

	animalbutton = new Sprite();
	animalbutton.width = 100;
	animalbutton.height = 100;
	animalbutton.collider = 'static';
	animalbutton.visible = false;
	animalbutton.position = createVector(100, 100);
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
			animal.visible = false;
			animaldead.visible = false; // Hide the animal in stage 0
			break;

		case 1:
			// Another menu
			background("grey");
			fill(0, 0, 0, 0); // Transparent rectangle
			strokeWeight(1);
			rect(200, 150, 350, 400); // Optional visual area
			animal.visible = false; // Hide the animal in stage 1
			animaldead.visible = false;
			break;

		case 2:
			// End screen
			background("grey"); // Black background for stage 2

			// Draw a white circle at the mouse position
			fill("white");
			strokeWeight(10);
			let circleRadius = 200; // Circle radius (diameter was 600)
			circle(mouseX, mouseY, circleRadius * 2); // Circle with a fixed diameter of 600
			// ADD CROSSHAIRS PNG HERE



			// animal.position.x += animal.vel.x;
			// animal.position.y += animal.vel.y;


			// animal.visible = true;
			//animaldead.visible = false;

			if (animal.position.x > windowWidth || animal.position.x < 0) {
				animal.vel.x *= -1; // Reverse horizontal velocity
			}
			if (animal.position.y > windowHeight || animal.position.y < 0) {
				animal.vel.y *= -1; // Reverse vertical velocity
			}


			if (animalisdead == true) {
				animalbutton.visible = true;
			}

			// this is gonna be the button, maybe make it a sprite so its not funky


			break;
		case 3:
			animalbutton.visible = false;
			animaldead.visible = false;
			background("blue");
			
	}
	console.log(animaldead.visible);
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
		animal.visible = true;
	}
	// If in stage 2, reset to stage 0
	else if (stage === 2) {


		let threshold1 = 200;
		let distToAnimal = dist(mouseX, mouseY, animal.position.x, animal.position.y);
		if (distToAnimal < threshold1) {
			animal.visible = false;
			animal.vel.x = 0, animal.vel.y = 0; // stops the animal from moving after you click it
			animaldead.visible = true;
			animalisdead = true; // flag for animal is dead


			animaldead.position = animal.position.copy(); //dead animal has the same position as animal at all times
			animaldead.vel = animal.vel.copy(); // stops the vel of the dead thing


		}

		let threshold2 = 50;
		let distToButton = dist(mouseX, mouseY, animalbutton.position.x, animalbutton.position.y);
		if (distToButton < threshold2) {
			stage = 3
		}


	}
	else if (stage === 3) {

	}
}	