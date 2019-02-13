function drawTheDestroyerOfWorlds()
{
    a = requestAnimationFrame(drawTheDestroyerOfWorlds);
    background();
    head();
    body();
    thighGap();
    arm();
    arm2();
    eye();
    eye2();
    mouth();
    ground();
    moveHead();
    checkHead();
    moveArm();
    moveArm2();
}


    var  a;
    var hY = 0;
function head()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(250,hY,75,0,2*Math.PI);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.stroke();
}

function moveHead()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    hY = hY + 1;
    ctx.fillStyle = "#000000";
    ctx.arc(250,hY,75,0,2*Math.PI);

}

function checkHead()
{
    if (hY > 150)
    {
        cancelAnimationFrame(a);
        sayHello();
        changeColor();

    }

}

function changeColor()
{

    a = requestAnimationFrame(drawTheDestroyerOfWorlds);
    background();
    head3();
    body3();
    thighGap3();
    arm3();
    arm23();
    eye3();
    eye23();
    mouth3();
    ground3();
    moveHead3();
    checkHead3();
    moveArm3();
    moveArm23();


}

function sayHello()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#ff000e";
    ctx.font = "25px Arial";
    ctx.fillText("Nobody expects the Spanish Inquisition", 10, 35 );

}

function background()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle="#ffffff";
    ctx.fillRect(0,0, window.innerWidth, window.innerHeight);

}

function body()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.arc(250,300,125,0,2*Math.PI);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.stroke();
}

function thighGap()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(250,350,100,0,2*Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();

}

var aX = -78;
var aY = 225;
var aW = 125;
var aH = 35;
function arm()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#000000";
    ctx.fillRect(aX,aY,aW,aH);

}

function moveArm()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    aX = aX + 1;
    ctx.fillStyle = "#000000";
    ctx.fillRect(aX, 225, 125, 35);
}





var a2X = 453;
var a2Y = 225;
function arm2()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#000000";
    ctx.fillRect(a2X,225,125,35);

}

function moveArm2()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    a2X = a2X - 1;
    ctx.fillStyle = "#000000";
    ctx.fillRect(a2X,a2Y,125,35);
}


function eye()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(200,125,10,0,2*Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();

}

function eye2()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(300,125,10,0,2*Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();

}

function mouth()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(250,75,100,1,2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();


}

function ground()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0,380,500,200)

}

//00000000000000000000000000000000000000000000000000









function body3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(250,300,125,0,2*Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
}

function thighGap3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(250,350,100,0,2*Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();

}

var aX = -75;
var aY = 225;
var aW = 125;
var aH = 35;
function arm3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(aX,aY,aW,aH);

}

function moveArm3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    aX = aX + 1;
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(aX, 225, 125, 35);
}





var a2X = 450;
var a2Y = 225;
function arm23()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#ff0000";
    ctx.fillRect(a2X,225,125,35);

}

function moveArm23()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    a2X = a2X - 1;
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(a2X,a2Y,125,35);
}


function eye3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(200,125,10,0,2*Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();

}

function eye23()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(300,125,10,0,2*Math.PI);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();

}

function mouth3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(250,75,100,1,2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.stroke();


}

function head3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.lineWidth = 2;
    ctx.strokeStyle = "#ff0000";
    ctx.beginPath();
    ctx.arc(250,hY,75,0,2*Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
}

function ground3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#00FF00";
    ctx.fillRect(0,380,500,200)

}

function moveHead3()
{
    var ctx = document.getElementById("myCanvas").getContext("2d");
    hY = hY + 1;
    ctx.fillStyle = "#ff0000";
    ctx.arc(250,hY,75,0,2*Math.PI);

}

function checkHead3()
{
    if (hY > 150)
    {
        cancelAnimationFrame(a);
        sayHello();
        arm3();
        arm23();
        // why are black arms overlap red arms?????
    }

}

