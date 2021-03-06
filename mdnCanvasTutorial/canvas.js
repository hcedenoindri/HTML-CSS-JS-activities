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

    function drawText(s, x, y) {
        context.font = "40px 'DotGothic16', sans-serif";
        context.fillStyle = "black";
        context.fillText(s, x, y);
    }

    drawRectangle(10, 10, 100, 100, 25, 30, "blue");
    drawCircle(250, 250, 100, "red");
    drawText("Hector Cedeno Indriago", 25, 400);

    let images = [];
    for (let i = 0; i < 3; i++) {
        let img = new Image();
        img.onload = function() {
            let x = (Math.random() * (canvas.width - 75));
            let y = (Math.random() * (canvas.height - 75));
            context.drawImage(img, x, y, 150, 150);
        };
        img.src="https://scontent-ort2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/129005510_967209693819461_7543564296688646827_n.jpg?tp=1&_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_cat=105&_nc_ohc=0TMK1EWVogwAX9DwPff&oh=ead0a55677acc7d375683d3050e30dcd&oe=606DD039"
    }



