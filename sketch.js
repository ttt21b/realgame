


let stage = 0;
let togglemenubackground = true; // Variable to toggle background image
let menubackground1, menubackground2;
let animalImg;
let animaldeadImg;
let animalisdead = false; // Flag
let clickTime = null; // To store when the animal is clicked
let timeToSlice = null;
let deer1Img, deer2Img, deer3Img, deer4Img, deer5Img;
let animalIdleFrames = [];
let currentFrame = 0;
let frameDelay = 25;
let frameCounter = 0;
let constpaper;
let crosshairs;
let deerActionFrames = [];
let deerAniSet = 0;
let gobutton1, gobutton2;
let togglegobutton = true;
let potato1, potato2, potato3, potato4;
let peeler;

let potatotime = null;

let potatobutton;


let potatocounter = 0;





function preload() {
    menubackground1 = loadImage("assets/realbackground.png");
    menubackground2 = loadImage("assets/background2.png");
    animalImg = loadImage("assets/placeholderanimal.png");
    animaldeadImg = loadImage("assets/redx.png");
    deer1Img = loadImage("assets/deer1.png");
    deer2Img = loadImage("assets/deer2.png");
    deer3Img = loadImage("assets/deer3.png");
    deer4Img = loadImage("assets/deer4.png");
    deer5Img = loadImage("assets/deer5.png");
    animalIdleFrames = [deer1Img, deer2Img];
    deerActionFrames = [deer3Img, deer4Img, deer5Img];
    constpaper = loadImage("assets/constpaperbackground.jpg")
    crosshairs = loadImage("assets/crosshairs.png")
    go1 = loadImage("assets/gobutton1.png");
    go2 = loadImage("assets/gobutton2.png");
    potato1IMG = loadImage("assets/potato1.png");
    potato2IMG = loadImage("assets/potato2.png");
    potato3IMG = loadImage("assets/potato3.png");
    potato4IMG = loadImage("assets/potato4.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    ellipseMode(CENTER);


    // Create the animal sprite
    animal = new Sprite();
    animal.img = animalIdleFrames[0];
    animal.position = createVector(500, 500);
    animal.visible = false; // Initially hidden
    animal.collider = 'k';
    //animal.vel = createVector(2, 2); // Set the initial velocity

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
    animalgutstop.collider = 'none'
    animalgutstop.visible = false;
    animalgutstop.position = createVector(1000, 500);

    animalgutsbottom = new Sprite();
    animalgutsbottom.width = 700;
    animalgutsbottom.height = 100;
    animalgutsbottom.collider = 'none';
    animalgutsbottom.visible = false;
    animalgutsbottom.position = createVector(1000, 800);

    knife = new Sprite();
    knife.width = 100;
    knife.height = 100;
    knife.collider = 'none';
    knife.visible = false;
    knife.position = createVector(100, 500);
    knife.drag = 100;

    gutsbutton = new Sprite();
    gutsbutton.width = 100;
    gutsbutton.height = 100;
    gutsbutton.collider = 'static';
    gutsbutton.visible = false;
    gutsbutton.position = createVector(100, 100);

    potato1 = new Sprite();
    potato1.img = potato1IMG;
    potato1.scale = .5;
    potato1.width = 100;
    potato1.height = 100;   
    potato1.visible = false;
    potato1.collider = 'd';
    potato1.drag = 15;
    potato1.position = createVector(500, 100);
    potato1.placed = false;
    potato1.rotation = 0;

    potato2 = new Sprite();
    potato2.img = potato2IMG;
    potato2.scale =.5;
    potato2.width = 100;
    potato2.height = 100;
    potato2.visible = false;
    potato2.collider = 'd';
    potato2.drag = 15;
    potato2.position = createVector(0, 100);
    potato2.placed = false;
    potato2.rotation = 0;
    


    potato3 = new Sprite();
    potato3.scale = .5;
    potato3.width = 100;
    potato3.img = potato3IMG;
    potato3.height = 100;
    potato3.visible = false;
    potato3.collider = 'd';
    potato3.drag = 15;
    potato3.position = createVector(100, 500);
    potato3.placed = false;
    potato3.rotation = 0;

    potato4 = new Sprite();
    potato4.scale = .5;
    potato4.rotation = 0;
    potato4.img = potato4IMG;
    potato4.width = 100;
    potato4.height = 100;
    potato4.visible = false;
    potato4.collider = 'd';
    potato4.drag = 15;
    potato4.position = createVector(500, 100);
    potato4.placed = false;

    potatobutton = new Sprite();
    potatobutton.width = 100;
    potatobutton.height = 100;
    potatobutton.collider = 'static';
    potatobutton.visible = false;
    potatobutton.position = createVector(100, 100);

    peeler = new Sprite();
    peeler.width = 100;
    peeler.height = 100;
    peeler.visible = false;
    peeler.collider = 'd';
    peeler.drag = 15;
    peeler.position = createVector(500, 100);




    // basket.position = createVector(500,500);
}

function draw() {
    switch (stage) {
        case 0:
            // // Title screen with alternating background
            // if (frameCount % 100 === 0) {
            //     togglemenubackground = !togglemenubackground; // Toggle the background every 100 frames
            // }
            // background(togglemenubackground ? menubackground1 : menubackground2);

            background(constpaper);
            image(constpaper);
            // Draw the start button

            if (frameCount % 30 === 0) {
                togglegobutton = !togglegobutton;
            }
            image(togglegobutton ? go1 : go2, 710, 500);
            // fill("black");
            // rect(710, 700, 400, 200, 20); // Start button area
            animal.visible = false;
            animaldead.visible = false; // Hide the animal in stage 0
            break;

        case 1:
            // Another menu
            background(constpaper);
            fill(0, 0, 0, 0); // Transparent rectangle
            strokeWeight(1);
            rect(200, 150, 350, 400); // Optional visual area
            animal.visible = false; // Hide the animal in stage 1
            animaldead.visible = false;
            break;

        case 2:
            // End screen
            background(constpaper); // Black background for stage 2
            let frames = deerAniSet === 0 ? deerActionFrames : animalIdleFrames;


            if (frameCounter >= frameDelay) {
                currentFrame = (currentFrame + 1) % frames.length; // Cycle through frames
                animal.img = frames[currentFrame]; // Update sprite image
                frameCounter = 0; // Reset frame counter
            }
            frameCounter++;

            if (deerAniSet === 0 && millis() >= clickTime + 3000) {
                deerAniSet = 1;
                currentFrame = 0;
            }


            // // Animal movement logic
            // animal.position.x += animal.vel.x;
            // animal.position.y += animal.vel.y;
            push();
            imageMode(CENTER);
            image(crosshairs, mouseX, mouseY);
            pop();
            // allows crosshairs to be centered



            // if (animal.position.x > windowWidth || animal.position.x < 0) {
            //     animal.vel.x *= -1; // Reverse horizontal velocity
            // }
            // if (animal.position.y > windowHeight || animal.position.y < 0) {
            //     animal.vel.y *= -1; // Reverse vertical velocity
            // }

            // Check if 5 seconds have passed since clickTime
            if (animalisdead && clickTime !== null && millis() >= clickTime + 5000) {
                animalbutton.visible = true; // Show the button after 5 seconds
            }
            break;

        // case 3:
        //     // knife.visible = true;
        //     animalbutton.visible = false;
        //     animaldead.visible = false;
        //     potato1.visible = true;
        //     potato2.visible = true;
        //     potato3.visible = true;
        //     potato4.visible = true;   
        //     animalbutton.collider = 'none';
        //     animaldead.collider = 'none';
        //     animal.collider = 'none';
        //     gutsbutton.collider = 'none';


        //     background(constpaper);

        //     rect(600,600,1000,100);
        //     fill('blue');

        //     if (potato1.mouse.dragging()) {
        //         potato1.moveTowards(
        //             mouseX, mouseY, 1
        //         )

        //     }
        //     if (potato2.mouse.dragging()) {
        //         potato2.moveTowards(
        //             mouseX, mouseY, 1
        //         )

        //     }   if (potato3.mouse.dragging()) {
        //         potato3.moveTowards(
        //             mouseX, mouseY, 1
        //         )

        //     }

        //     if (potato4.mouse.dragging()) {
        //         potato4.moveTowards(
        //             mouseX, mouseY, 1
        //         )

        //     }



        //     if (potato1.position.x >= 600 && potato1.position.x <= 1600 && potato1.position.y >= 600 && potato1.position.y <= 700) {
        //         potato1.visible = false;
        //         potato1.vel.x = 0;
        //         potato1.vel.y = 0;
        //         potato1.collider = 'none';
        //         potatocounter++;
        //     }

        //     if (potato2.position.x >= 600 && potato2.position.x <= 1600 && potato2.position.y >= 600 && potato2.position.y <= 700) {
        //         potato2.visible = false;
        //         potato2.vel.x = 0;
        //         potato2.vel.y = 0;
        //         potato2.collider = 'none';
        //         potatocounter++;
        //     }


        //     if (potato3.position.x >= 600 && potato3.position.x <= 1600 && potato3.position.y >= 600 && potato3.position.y <= 700) {
        //         potato3.visible = false;
        //         potato3.vel.x = 0;
        //         potato3.vel.y = 0;
        //         potato3.collider = 'none';
        //         potatocounter++;
        //     }

        //     if (potato4.position.x >= 600 && potato4.position.x <= 1600 && potato4.position.y >= 600 && potato4.position.y <= 700) {
        //         potato4.visible = false;
        //         potato4.vel.x = 0;
        //         potato4.vel.y = 0;
        //         potato4.collider = 'none';
        //         potatocounter++;
        //     }

        case 3:
            // Reset visibility and collisions for unrelated sprites
            animalbutton.visible = false;
            animaldead.visible = false;
            animalbutton.collider = 'none';
            animaldead.collider = 'none';
            animal.collider = 'none';
            gutsbutton.collider = 'none';
            potatobutton.collider = 'none';



            if (potatocounter === 4 && potatotime === null) {
                potatotime = millis();
            }


            if (potatocounter == 4 && potatotime !== null && millis() >= potatotime + 5000) {
                potatobutton.visible = true;

            }

            // Set stage background
            background(constpaper);

            // Draw basket area (replace with basket sprite if needed)
            fill('blue');
            rect(600, 600, 1000, 100);

            // Array of potatoes
            let potatoes = [potato1, potato2, potato3, potato4];

            // Handle potato logic
            potatoes.forEach((potato) => {
                if (!potato.placed) {
                    potato.visible = true; // Make the potato visible

                    // Enable dragging
                    if (potato.mouse.dragging()) {
                        potato.moveTowards(mouseX, mouseY, 1); // Smooth dragging
                    }

                    // Check if the potato is inside the basket
                    if (potato.position.x >= 600 && potato.position.x <= 1600 &&
                        potato.position.y >= 600 && potato.position.y <= 700) {
                        potato.visible = false;     // Hide the potato after placement
                        potato.collider = 'none';  // Disable its collider
                        potato.placed = true;      // Mark it as placed
                        potatocounter++;           // Increment the counter once
                        console.log(`Potato placed! Total potatoes: ${potatocounter}`);
                    }
                }
            });

            if (potatocounter == 1) {
                //show an image
                fill('red');
                rect(600, 600, 1000, 100);
            }
            if (potatocounter == 2) {
                //show an image
                fill('green');
                rect(600, 600, 1000, 100);
            }
            if (potatocounter == 3) {
                //show an image
                fill('yellow');
                rect(600, 600, 1000, 100);
            }
            if (potatocounter == 4) {
                //show an image
                fill('orange');
                rect(600, 600, 1000, 100);
            }


            break;



        // animalgutstop.visible = true;

        // // Check if knife reaches the x-coordinate
        // if (knife.x > 1000 && timeToSlice === null) {
        //     timeToSlice = millis(); // Record the time only once
        // }

        // // Show gutsbutton 5 seconds after the knife reaches the point
        // if (timeToSlice !== null && millis() >= timeToSlice + 5000) {
        //     gutsbutton.visible = true; // Show the button
        // }


        case 4:
            background(constpaper);
            potatobutton.visible = false;

            
            break;

    }

    console.log(potatocounter);
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

        if (!animalisdead && distToAnimal < threshold1) {
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

        // knife.velocity.x = 0.1;

        // let threshold3 = 50;

        // let distToButton2 = dist(mouseX, mouseY, gutsbutton.position.x, gutsbutton.position.y);
        // if (distToButton2 < threshold3) {
        //     stage = 4; // Transition to stage 3
        // }

        let threshold4 = 50;
        let distToButton = dist(mouseX, mouseY, potatobutton.position.x, potatobutton.position.y);
        if (distToButton < threshold4) {
            stage = 4; // Transition to stage 3
        }
    }


}