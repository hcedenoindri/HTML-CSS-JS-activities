    
    let canvas = document.querySelector("#html-canvas");
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    let context = canvas.getContext("2d");

    function drawRectangle(x, y, width, height, shadow_width, shadow_height, fill_colour) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = fill_colour;
        context.shadowColor = "black";
        context.shadowBlur = 6;
        context.shadowOffsetX = shadow_width;
        context.shadowOffsetY = shadow_height;
        context.fillRect(x, y, width, height);
    }

    function drawCircle(x, y, radius, fill_colour) {
        context.shadowColor = "transparent";
        context.beginPath();
        context.arc(x,y,radius,0,2*Math.PI);
        context.fillStyle = fill_colour;
        context.closePath();
        context.fill();
        context.stroke();
    }

    drawRectangle(10, 10, 100, 100, 25, 30, "blue");
    drawCircle(250, 250, 100, "red");

    let img = new Image();
    img.onload = () => {
        for (let i = 0; i < 3; i++) {
            let x = (Math.random() * (canvas.width - 225));
            let y = (Math.random() * (canvas.height - 225));
            context.drawImage(img, x, y, 150, 150);
        }
    };
    img.src="https://static.boredpanda.com/blog/wp-content/uploads/2015/02/cute-cats-sleeping-on-dogs-7__605.jpg";
    context.font = "30px DotGothic16, sans-serif";
    context.fillStyle = "black";
    context.fillText("Hector Cedeno Indriago", 25, 400);
