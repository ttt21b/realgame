let backgroundmusic;    
let pastcut = false;
let potatoState = 1;
let revealTime = null;
let friesPlacedTime = null;

let shovel1, shovel2;
let toggleshovel = true;

let enterTime = -1; // Variable to store the time when venisonraw enters the area
let cookingTime = 10000;

let dish;
let clicksound;
let awp;
let forestsounds;

 

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
let venisonbutton;


let potatocounter = 0;

let field1, field2;
let togglefield = true;
let trees;

let protein1, protein2;
let toggleprotein = true;
let nextbutton;

let bucket1, bucket2, bucket3, bucket4, bucket0;
let garbage1, garbage2;
let togglegarbage = true;

let bird1, bird2;
let togglebird = true;

let trash1IMG, trash2IMG, trash3IMG;


let potatosign1, potatosign2;
let togglepotatosign = true;

let peel1, peel2, peel3, peel4, peel5;
let katana;
let peelbutton;

let rawfries, rawfriesIMG;

let cauldron1, cauldron2;
let togglecauldron = true;

let oil1, oil2, oil3;
let toggleoil = true;

let cookedfries;
let friesbutton;

let venisonraw, venisonrawIMG, venisoncooked;




function preload() {
    forestsounds = loadSound ("assets/forest.mp3");
    awp = loadSound("assets/AWP Shooting - CS_GO Sound Effect.mp3");
    clicksound = loadSound("assets/clicksound.mp3");
    menubackground1 = loadImage("assets/realbackground.png");
    menubackground2 = loadImage("assets/background2.png");
    animalImg = loadImage("assets/placeholderanimal.png");
    animaldeadImg = loadImage("assets/deaddeer.png");
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
    field1 = loadImage("assets/field1.png");
    field2 = loadImage("assets/field2.png");
    trees = loadImage("assets/trees.png");
    protein1 = loadImage("assets/protein1.png");
    protein2 = loadImage("assets/protein2.png");
    nextbutton = loadImage("assets/nextbutton.png");

    bucket0 = loadImage("assets/bucket0.png");
    bucket1 = loadImage("assets/bucket1.png");
    bucket2 = loadImage("assets/bucket2.png");
    bucket3 = loadImage("assets/bucket3.png");
    bucket4 = loadImage("assets/bucket4.png");

    garbage1 = loadImage("assets/garbage1.png");
    garbage2 = loadImage("assets/garbage2.png");

    bird1 = loadImage("assets/bird1.png");
    
    bird2 = loadImage("assets/bird2.png");

    trash1IMG = loadImage("assets/bottle.png"); 
    trash2IMG = loadImage("assets/can.png");
    trash3IMG = loadImage("assets/apple.png");

    potatosign1 = loadImage("assets/potatosign1.png")
    
    potatosign2 = loadImage("assets/potatosign2.png")

    peel1 = loadImage("assets/peel1.png")
    peel2 = loadImage("assets/peel2.png")
    peel3 = loadImage("assets/peel3.png")
    peel4 = loadImage("assets/peel4.png")
    peel5 = loadImage("assets/peel5.png")

    katanaimg = loadImage("assets/katana.png")
    
    rawfriesIMG = loadImage("assets/rawfries.png")

    cauldron1 = loadImage("assets/cauldron1.png")
    
    cauldron2 = loadImage("assets/cauldron2.png")

    oil1 = loadImage("assets/oil1.png");
    oil2 = loadImage("assets/oil2.png");
    oil3 = loadImage("assets/oil3.png");
    cookedfries = loadImage("assets/cookedfries.png");

    venisonrawIMG = loadImage("assets/venisonraw.png");

    shovel1 = loadImage("assets/shovel1.png");
    
    shovel2 = loadImage("assets/shovel2.png");

    venisoncooked = loadImage("assets/venisoncooked.png")

    dish = loadImage("assets/dish.png");

    backgroundmusic = loadSound("assets/backgroundmusic.mp3");
  
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
    animalbutton.scale = .5;
    animalbutton.img = nextbutton;
    animalbutton.width = 100;
    animalbutton.height = 100;
    animalbutton.collider = 'static';
    animalbutton.visible = false;
    animalbutton.position = createVector(150, 800);

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
    animalgutsbottom.position = createVector(100, 800);

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
    potato1.scale = .4;
    potato1.width = 100;
    potato1.height = 100;   
    potato1.visible = false;
    potato1.collider = 'd';
    potato1.drag = 15;
    potato1.position = createVector(250, 700);
    potato1.placed = false;
    potato1.rotation = 0;

    potato2 = new Sprite();
    potato2.img = potato2IMG;
    potato2.scale =.4;
    potato2.width = 100;
    potato2.height = 100;
    potato2.visible = false;
    potato2.collider = 'd';
    potato2.drag = 15;
    potato2.position = createVector(500, 300);
    potato2.placed = false;
    potato2.rotation = 0;
    


    potato3 = new Sprite();
    potato3.scale = .4;
    potato3.width = 100;
    potato3.img = potato3IMG;
    potato3.height = 100;
    potato3.visible = false;
    potato3.collider = 'd';
    potato3.drag = 15;
    potato3.position = createVector(850, 740);
    potato3.placed = false;
    potato3.rotation = 0;

    potato4 = new Sprite();
    potato4.scale = .4;
    potato4.rotation = 0;
    potato4.img = potato4IMG;
    potato4.width = 100;
    potato4.height = 100;
    potato4.visible = false;
    potato4.collider = 'd';
    potato4.drag = 15;
    potato4.position = createVector(500, 800);
    potato4.placed = false;

    bigpotato = new Sprite();
    bigpotato.img = peel1;
   bigpotato.position = createVector(windowWidth/2, windowHeight/2);
   bigpotato.visible = false; // Initially hidden
   bigpotato.collider = 'k';
   bigpotato.scale = 1.5;

    // potatobutton = new Sprite();
    // potatobutton.width = 100;
    // potatobutton.height = 100;
    // potatobutton.collider = 'static';
    // potatobutton.visible = false;
    // potatobutton.position = createVector(100, 100);

   potatobutton = new Sprite();
   potatobutton.scale = .5;
   potatobutton.img = nextbutton;
   potatobutton.width = 100;
   potatobutton.height = 100;
   potatobutton.collider = 'static';
   potatobutton.visible = false;
   potatobutton.position = createVector(150, 800);

    peeler = new Sprite();
    peeler.width = 100;
    peeler.height = 100;
    peeler.visible = false;
    peeler.collider = 'd';
    peeler.drag = 15;
    peeler.position = createVector(500, 100);

   

    trash1 = new Sprite();
    trash1.scale = .4;
    trash1.rotation = 0;
    trash1.img = trash1IMG;
    trash1.width = 100;
    trash1.height = 100;
    trash1.visible = false;
    trash1.collider = 'd';
    trash1.drag = 15;
    trash1.position = createVector(400, 500);
    trash1.rotationSpeed = 0;

    trash2 = new Sprite();
    trash2.scale = .4;
    trash2.rotation = 0;
    trash2.img = trash2IMG;
    trash2.width = 100;
    trash2.height = 100;
    trash2.visible = false;
    trash2.collider = 'd';
    trash2.drag = 15;
    trash2.position = createVector(100, 500);

    trash3 = new Sprite();
    trash3.scale = .4;
    trash3.rotation = 0;
    trash3.img = trash3IMG;
    trash3.width = 100;
    trash3.height = 100;
    trash3.visible = false;
    trash3.collider = 'd';
    trash3.drag = 15;
    trash3.position = createVector(600, 600);

    katana = new Sprite();
    katana.scale = 1;
 
    katana.visible = false;
    katana.height = 100;
    katana.width = 100;
    katana.img = katanaimg;
    katana.position = createVector(100, 800);
    katana.drag = 100;

    peelbutton = new Sprite();
    peelbutton.scale = .5;
    peelbutton.img = nextbutton;
    peelbutton.width = 100;
    peelbutton.height = 100;
    peelbutton.collider = 'static';
    peelbutton.visible = false;
    peelbutton.position = createVector(150, 800);

    rawfries = new Sprite();
    rawfries.rotation = 0;
    rawfries.img = rawfriesIMG;
    rawfries.width = 100;
    rawfries.height = 100;
    rawfries.visible = false;
    rawfries.collider = 'k';
    rawfries.drag = 10;
    rawfries.position = createVector(200, 770);
    rawfries.rotationSpeed = 0;
    rawfries.scale = 2;

   friesbutton = new Sprite();
   friesbutton.scale = .5;
   friesbutton.img = nextbutton;
   friesbutton.width = 100;
   friesbutton.height = 100;
   friesbutton.collider = 'static';
   friesbutton.visible = false;
   friesbutton.position = createVector(150, 800);

   venisonraw = new Sprite();
   venisonraw.rotationSpeed = 0;
   venisonraw.img = venisonrawIMG;
   venisonraw.width = 100;
   venisonraw.height = 100;
   venisonraw.visible = false;
   venisonraw.collider = 'd';
   venisonraw.drag = 15;
   venisonraw.position = createVector(100, 100);

   venisonbutton = new Sprite();
   venisonbutton.scale = .5;
   venisonbutton.img = nextbutton;
   venisonbutton.width = 100;
   venisonbutton.height = 100;
   venisonbutton.collider = 'static';
   venisonbutton.visible = false;
   venisonbutton.position = createVector(150, 800);

//    venisoncooked = new Sprite();
//    venisoncooked.rotation = 0;
//    venisoncooked.img = venisoncookedIMG;
//    venisoncooked.width = 100;
//    venisoncooked.height = 100;
//    venisoncooked.visible = false;
//    venisoncooked.collider = 'd';
//    venisoncooked.drag = 15;
//    venisoncooked.position = createVector(500, 800);
//    venisoncooked.placed = false;

 

   




    // basket.position = createVector(500,500);
}

function draw() {
    switch (stage) {
        case 0:

        play(backgroundmusic);
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
            background(constpaper);
            image(trees, 0, 0, windowWidth, windowHeight);

            if (frameCount % 30 === 0) {
                togglefield = !togglefield;
            }
            image(togglefield ? field1 : field2 , 0, 0, windowWidth, windowHeight);

            if (frameCount % 30 === 0) {
                toggleprotein = !toggleprotein;
            }
            image(toggleprotein ? protein1 : protein2 , 0, 0, windowWidth, windowHeight);
            // image(field1, 0, 0, windowWidth, windowHeight) // Black background for stage 2
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

            push();
            imageMode(CENTER);
            image(crosshairs, mouseX, mouseY);
            pop();
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
            bigpotato.collider = 'none';
            rawfries.collider = 'none';

            katana.collider = 'none';
            trash1.visible = true;
            trash2.visible = true;
            trash3.visible = true;
            
            
         

         



            if (potatocounter === 4 && potatotime === null) {
                potatotime = millis();
            }


            if (potatocounter == 4 && potatotime !== null && millis() >= potatotime + 5000) {
                potatobutton.visible = true;

            }

            // Set stage background
            background(constpaper);

            if (frameCount % 50 === 0) {
                togglebird = !togglebird;
            }
            image(togglebird ? bird1 : bird2 , 1000, 100, 500, 500);

            if (frameCount % 50 === 0) {
                togglegarbage = !togglegarbage;
            }
            image(togglegarbage ? garbage1 : garbage2 , 0, 0, windowWidth, windowHeight);

            if (frameCount % 30 === 0) {
                togglepotatosign = !togglepotatosign;
            }
            image(togglepotatosign ? potatosign1 : potatosign2 , 0, 0, windowWidth, windowHeight);

            image(bucket0, 0,0, windowWidth, windowHeight);

            if (trash1.mouse.dragging()) {
                trash1.moveTowards(mouseX, mouseY, 1); // Smooth dragging
            }

            if (trash2.mouse.dragging()) {
                trash2.moveTowards(mouseX, mouseY, 1); // Smooth dragging
            }

            if (trash3.mouse.dragging()) {
                trash3.moveTowards(mouseX, mouseY, 1); // Smooth dragging
            }


            // Draw basket area (replace with basket sprite if needed)
          

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
                    if (potato.position.x >= 1200 && potato.position.x <= 1800 &&
                        potato.position.y >= 650 && potato.position.y <= 850) {
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
                image(bucket1, 0, 0, windowWidth, windowHeight);
            }
            if (potatocounter == 2) {
                //show an image
                image(bucket2, 0, 0, windowWidth, windowHeight);
            }
            if (potatocounter == 3) {
                image(bucket3, 0, 0, windowWidth, windowHeight);
            }
            if (potatocounter == 4) {
                //show an image
                image(bucket4, 0, 0, windowWidth, windowHeight);
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


    //     case 4:
    //         background(constpaper);
    //         potatobutton.visible = false;   
    //         trash1.visible = false;
    //         trash2.visible = false;
    //         trash3.visible = false;

    //         katana.collider = 'k';

    //         trash1.collider = 'none';
    //         trash2.collider = 'none';
    //         trash3.collider = 'none';



    //         bigpotato.visible = true;
    //         katana.visible = true;

    //         if (katana.mouse.dragging()) {
    //             katana.moveTowards(mouseX, 500, 1); // Smooth dragging
    //         }

    //         let cutdist = dist(katana.position.x, katana.position.y, bigpotato.position.x, bigpotato.position.y);

    //         let pastcut = false;

    //         if (katana.mouse.dragging() && cutdist < 200) {
    //             bigpotato.img = peel2;
           

    //         }

    //         if (katana.mouse.dragging() && cutdist < 50 )  {
    //             bigpotato.img = peel3;
    //             pastcut = true;
    //         }
    //         if (pastcut == true) {
    //             bigpotato.img = peel3;
    //         }
      

    //         // if (katana.mouse.dragging() && katana.position.x > 800) {
    //         //     bigpotato.img = peel4;

                
    //         // }

          
            
        

            
    //         break;

    // }

 // Define `pastcut` outside the case block so it persists across frames


// Define `pastcut` outside the case block so it persists across frames


// Define states outside the case block
 // 1: Normal, 2: Peel2, 3: Peel3, 4: Peel4

 case 4:
    background(constpaper);
    potatobutton.visible = false;   
    trash1.visible = false;
    trash2.visible = false;
    trash3.visible = false;

    katana.collider = 'k';

    trash1.collider = 'none';
    trash2.collider = 'none';
    trash3.collider = 'none';

    bigpotato.visible = true;
    katana.visible = true;

    if (katana.mouse.dragging()) {
        katana.moveTowards(mouseX, 500, 1); // Smooth dragging
    }

    let cutdist = dist(katana.position.x, katana.position.y, bigpotato.position.x, bigpotato.position.y);

    // Transition to Peel2 when katana is close enough
    if (katana.mouse.dragging() && cutdist < 200 && potatoState < 2) {
        bigpotato.img = peel2; // Change to Peel2
        potatoState = 2;
    }

    // Transition to Peel3 when even closer
    if (katana.mouse.dragging() && cutdist < 50 && potatoState < 3) {
        bigpotato.img = peel3; // Change to Peel3
        potatoState = 3;
    }

    // Transition to Peel4 when katana moves past a certain X position
    if (katana.position.x > 800 && potatoState < 4) {
        bigpotato.img = peel4; // Change to Peel4
        potatoState = 4;
    }
    if (katana.position.x > 900 && potatoState < 5) {
        bigpotato.img = peel5; // Change to Peel4
        potatoState = 5;
        revealTime = millis(); // Record the time when Peel4 is reached
    }

    // Show the button 3 seconds after reaching potatoState = 4
    if (potatoState === 5 && revealTime !== null && millis() >= revealTime + 3000) {
        peelbutton.visible = true; // Show the button
    }

  

    break;


    case 5:

background(constpaper);
peelbutton.visible = false;
katana.visible = false;
bigpotato.visible = false;
katana.collider = 'none';

// Display the raw fries and set the collider
rawfries.visible = true;
rawfries.collider = 'k';

// Toggle the cauldron every 50 frames
if (frameCount % 50 === 0) {
    togglecauldron = !togglecauldron;
}
image(togglecauldron ? cauldron1 : cauldron2, 0, 0, windowWidth, windowHeight);

// Toggle the oil image every 50 frames, regardless of fries placement
if (frameCount % 50 === 0) {
    toggleoil = !toggleoil;
}

// Make rawfries draggable
if (rawfries.mouse.dragging()) {
    rawfries.moveTowards(mouseX, mouseY, 1); // Smooth dragging
}

// Check if rawfries is placed in the correct position
if (rawfries.position.x >= 870 && rawfries.position.x <= 1800 &&
    rawfries.position.y >= 520 && rawfries.position.y <= 830) {
    
    // Hide rawfries after placement and disable its collider
    rawfries.visible = false;
    rawfries.collider = 'none';

    // Display the toggled oil image
    image(toggleoil ? oil1 : oil2, 1000, 100, 800, 800);

    // Record the time when rawfries were placed (visibility set to false)
    if (friesPlacedTime === null) {
        friesPlacedTime = millis();
    }
}

// Check if 7 seconds have passed since fries were placed
if (friesPlacedTime !== null && millis() - friesPlacedTime >= 7000) {
    // Show the cooked fries image after 7 seconds
    image(cookedfries, 50, 500, 600, 600);  // Adjust position and size as needed
}

if (friesPlacedTime !== null && millis() - friesPlacedTime >= 10000) {
    // Show the cooked fries image after 7 seconds
    friesbutton.visible = true;  // Adjust position and size as needed
}

    
    
    
    break;

case 6:
background(constpaper);
friesbutton.visible = false;
friesbutton.collider = 'none';
rawfries.visible = false;
rawfries.collider = 'none';
venisonraw.visible = true;

if (venisonraw.mouse.dragging()) {
    venisonraw.moveTowards(mouseX, mouseY, 1); // Smooth dragging
}

if (frameCount % 50 === 0) {
    toggleshovel = !toggleshovel;
}
image(toggleshovel ? shovel1 : shovel2, 0, 0, windowWidth, windowHeight);

if (venisonraw.position.x > 600 && venisonraw.position.x < 1200 && venisonraw.position.y > 400 && venisonraw.position.y < 800) {
    // If this is the first time entering the area, record the time
    if (enterTime === -1) {
        enterTime = millis(); // Store the current time in milliseconds
    }

    // Check if 10 seconds have passed
    if (millis() - enterTime >= cookingTime) {
        venisonraw.img = venisoncooked; // Change the image to cooked venison
    venisonbutton.visible = true;
    }
} else {
    // Reset the timer if venisonraw leaves the area
    enterTime = -1;
}

break;

case 7:
background(constpaper);
venisonbutton.visible = false;
venisonbutton.collider = 'none';
rawfries.visible = false;
rawfries.collider = 'none';
venisonraw.visible = false;
venisonraw.collider = 'none';

image(dish, 600, 200, 700, 700);




}
//     background(constpaper);
//     peelbutton.visible = false;
//     katana.visible = false;
//     bigpotato.visible = false;

//     rawfries.visible = true;
//     rawfries.collider = 'k';

//     if (frameCount % 50 === 0) {
//         togglecauldron = !togglecauldron;
//     }
//     image(togglecauldron ? cauldron1 : cauldron2 , 0, 0, windowWidth, windowHeight);


//     if (rawfries.mouse.dragging()) {
//         rawfries.moveTowards(mouseX, mouseY, 1); // Smooth dragging
//     }

//     if (rawfries.position.x >= 870 && rawfries.position.x <= 1800 &&
//        rawfries.position.y >= 520 && rawfries.position.y <= 830) {
//         rawfries.visible = false;     // Hide the rawfries after placement
//          rawfries.collider = 'none';

       

//          image(toggleoil? oil1 : oil2,  1000, 100, 800, 800);
//          if (friesPlacedTime === null) {
//             friesPlacedTime = millis();
//         }
//         } 
        
//         if (frameCount % 50 === 0) {
//             toggleoil = !toggleoil;
//          }

         
         
//          // Disable its collider
//     //     rawfries.placed = true;      // Mark it as placed
//     //     rawfriescounter++;           // Increment the counter once
//     //     console.log(`rawfries placed! Total rawfrieses: ${rawfriescounter}`);



    



   

    
// }
console.log(mouseX, mouseY);
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
        play(clicksound);
        stage = 1; // Transition to stage 1
    }
    // Check if mouse clicked within the rectangle area in stage 1
    else if (stage === 1 && mouseX >= 200 && mouseX <= 550 && mouseY >= 150 && mouseY <= 550) {
        play(clicksound);
        stage = 2; // Transition to stage 2
        animal.visible = true;
    }
    // If in stage 2, check for clicks on the animal or button
    else if (stage === 2) {
        let threshold1 = 200;
        let distToAnimal = dist(mouseX, mouseY, animal.position.x, animal.position.y);

        play(awp);

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
            play(clicksound);
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
            play(clicksound);
            stage = 4; // Transition to stage 3
        }
    }
    else if ( stage === 4) {
        let threshold4 = 50;
        let distToButton = dist(mouseX, mouseY, peelbutton.position.x, peelbutton.position.y);
        if (distToButton < threshold4) {
            play(clicksound);
            stage = 5; // Transition to stage 3
        }
       

    }

    else if ( stage === 5) {
        let threshold4 = 50;
        let distToButton = dist(mouseX, mouseY, friesbutton.position.x, friesbutton.position.y);
        if (distToButton < threshold4) {
            play(clicksound);
            stage = 6; // Transition to stage 3
        }
       

    }

    else if ( stage === 6) {
        let threshold4 = 50;
        let distToButton = dist(mouseX, mouseY, venisonbutton.position.x, venisonbutton.position.y);
        if (distToButton < threshold4) {
            play(clicksound);
            stage = 7; // Transition to stage 3
        }
       

    }


}