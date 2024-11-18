


let stage = 0;
let togglemenubackground = true; // Variable to toggle background image
let menubackground1, menubackground2;
let animalImg;
let animaldeadImg;
let animalisdead = false; // Flag
let clickTime = null; // To store when the animal is clicked
let timeToSlice = null; 


function preload() {
    menubackground1 = loadImage("assets/background1.png");
    menubackground2 = loadImage("assets/background2.png");
    animalImg = loadImage("assets/placeholderanimal.png");
    animaldeadImg = loadImage("assets/redx.png");
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

    animaldead = new Sprite();
    animaldead.img = animaldeadImg;
    animaldead.position = animal.position;
    animaldead.visible = false;
    animaldead.collider = 's';


    animalbutton = new Sprite();
    animalbutton.width = 100;
    animalbutton.height = 100;
    animalbutton.collider = 'static';
    animalbutton.visible = false;
    animalbutton.position = createVector(100, 100);

    animalgutstop = new Sprite();
    animalgutstop.width = 700;
    animalgutstop.height = 100;
    animalgutstop.collider = 'd'
    animalgutstop.visible = false;
    animalgutstop.position = createVector(1000, 500);

    animalgutsbottom = new Sprite();
    animalgutsbottom.width = 700;
    animalgutsbottom.height = 100;
    animalgutsbottom.collider = 'd';
    animalgutsbottom.visible = false;
    animalgutsbottom.position = createVector(1000, 800);

    knife = new Sprite();
    knife.width = 100;
    knife.height = 100;
    knife.collider = 'd';
    knife.visible = false;
    knife.position = createVector(100, 500);
    knife.drag = 100;

    gutsbutton = new Sprite();
    gutsbutton.width = 100;
    gutsbutton.height = 100;
    gutsbutton.collider = 'static';
    gutsbutton.visible = false;
    gutsbutton.position = createVector(100, 100);
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

            // Animal movement logic
            animal.position.x += animal.vel.x;
            animal.position.y += animal.vel.y;

            if (animal.position.x > windowWidth || animal.position.x < 0) {
                animal.vel.x *= -1; // Reverse horizontal velocity
            }
            if (animal.position.y > windowHeight || animal.position.y < 0) {
                animal.vel.y *= -1; // Reverse vertical velocity
            }

            // Check if 5 seconds have passed since clickTime
            if (animalisdead && clickTime !== null && millis() >= clickTime + 5000) {
                animalbutton.visible = true; // Show the button after 5 seconds
            }
            break;

            case 3:
                knife.visible = true;
                animalbutton.visible = false;
                animaldead.visible = false;
                background("blue");
                animalgutstop.visible = true;
        
                // Check if knife reaches the x-coordinate
                if (knife.x > 1000 && timeToSlice === null) {
                    timeToSlice = millis(); // Record the time only once
                }
        
                // Show gutsbutton 5 seconds after the knife reaches the point
                if (timeToSlice !== null && millis() >= timeToSlice + 5000) {
                    gutsbutton.visible = true; // Show the button
                }
                break;

        case 4:
        background("green");  
            
    }

    console.log(gutsbutton.visible, mouseX,mouseY);
}

function mouseDragged() {
    if (stage === 3) {
        // Edge detection
        if (knife.x - knife.width / 2 < 0) {
            knife.x = knife.width / 2; // Left edge
        }
        if (knife.x + knife.width / 2 > windowWidth) {
            knife.x = windowWidth - knife.width / 2; // Right edge
        }




        knife.moveTowards(mouseX, 500, .1);


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
        animal.visible = true;
    }
    // If in stage 2, check for clicks on the animal or button
    else if (stage === 2) {
        let threshold1 = 200;
        let distToAnimal = dist(mouseX, mouseY, animal.position.x, animal.position.y);

        if (distToAnimal < threshold1) {
            animal.visible = false;
            animal.vel.x = 0;
            animal.vel.y = 0; // Stop the animal from moving
            animaldead.visible = true;
            animalisdead = true; // Flag the animal as dead
            animaldead.position = animal.position.copy();
            animaldead.velocity = animal.velocity.copy();
            clickTime = millis(); // Record the time of the click
            console.log("Animal clicked at: " + clickTime + " milliseconds");
        }

        let threshold2 = 50;
        let distToButton = dist(mouseX, mouseY, animalbutton.position.x, animalbutton.position.y);
        if (distToButton < threshold2) {
            stage = 3; // Transition to stage 3
        }
    }
    else if (stage === 3) {

        knife.velocity.x = 0.1;
       
        let threshold3 = 50;
     
        let distToButton2 = dist(mouseX, mouseY, gutsbutton.position.x, gutsbutton.position.y);
        if (distToButton2 < threshold3) {
            stage = 4; // Transition to stage 3
        }
    }


}