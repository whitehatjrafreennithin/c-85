canvas = document.getElementById("my_Canvas");
ctx =  canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
rover_image = "rover.png";


var mars_images = ["mars image 1.jpg","mars image 2.jpg","mars image 3.jpg","mars image 4.jpg"];
random_number = Math.floor(Math.random()*4);
console.log(random_number);
background_image = mars_images[random_number]
function add(){
    background_ImageTag = new Image();
    background_ImageTag.src = background_image;
    background_ImageTag.onload =  upload_background;
    rover_ImageTag = new Image();
    rover_ImageTag.src = rover_image;
    rover_ImageTag.onload =  upload_rover;
}

function upload_background(){
ctx.drawImage(background_ImageTag,0,0,canvas.width,canvas.height);
}

function upload_rover(){
    ctx.drawImage(rover_ImageTag,rover_x,rover_y,rover_width,rover_height);
    }

    window.addEventListener("keydown",keyDown);

    function keyDown(e){
        keyPressed = e.keyCode;
        console.log(keyPressed);
        if(keyPressed =="38"){
            up();
            console.log(up);

        }
        if(keyPressed =="40"){
            down();
            console.log(down);

        }
        if(keyPressed =="37"){
            left();
            console.log(left);

        }
        if(keyPressed =="39"){
            right();
            console.log(right);

        }
}

function up(){
    if(rover_y>=0){
    rover_y=rover_y - 10;
    console.log("When up arrow is clicked x = "+ rover_x + "y = " + rover_y);
    upload_background();
    upload_rover();

    }
}


function down(){
    if(rover_y<=500){
    rover_y=rover_y + 10;
    console.log("When down arrow is clicked x = "+ rover_x + "y = " + rover_y);
    upload_background();
    upload_rover();

    }
}

function left(){
    if(rover_x>=0){
    rover_x=rover_x - 10;
    console.log("When left arrow is clicked x = "+ rover_x + "y = " + rover_y);
    upload_background();
    upload_rover();

    }
}

function right(){
    if(rover_x<=700){
    rover_x=rover_x + 10;
    console.log("When right arrow is clicked x = "+ rover_x + "y = " + rover_y);
    upload_background();
    upload_rover();

    }
}
