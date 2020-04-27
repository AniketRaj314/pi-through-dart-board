let width, height, size, points, dotSize;
function setup() {
    width = innerWidth;
    height = innerHeight - 4;
    size = 500;
    dotSize = 1;
    points = [];
    totalDots = 0;
    dotsInCirle = 0;
    createCanvas(width, height);
}

function draw() {
    for (let i = 0; i < 10; i++) {
        background(0);
        drawBoard();
        drawDots();
        showStats();
    }
}

function showStats() {
    //noLoop();
    fill(255);
    stroke(0);
    textSize(32);
    text(`Inside Circle: ${dotsInCirle}`, width / 2 - 100, height - 100);
    text(`Total: ${totalDots}`, width / 2 - 50, height - 50);

    let approxPI = dotsInCirle / totalDots * 4;
    approxPI = approxPI.toFixed(7);
    text(`Value of PI: ${approxPI}`, width / 2 - 150, 80);
}

function drawBoard() {
    fill(150);
    rectMode(CENTER);
    rect(width / 2, height / 2, size, size);

    fill(0, 255, 0);
    ellipseMode(CENTER);
    ellipse(width / 2, height / 2, size, size);
}

function drawDots() {
    let x = random(width / 2 - size / 2 + dotSize / 2, width / 2 + size / 2 - dotSize / 2);
    let y = random(height / 2 - size / 2 + dotSize / 2, height / 2 + size / 2 - dotSize / 2);
    points.push(createVector(x, y));
    totalDots++;
    stroke(255, 0, 0)
    fill(255, 0, 0);
    for (let i = 0; i < points.length; i++) {
        ellipse(points[i].x, points[i].y, dotSize, dotSize);
    }
    checkDotPosition(x, y);
}

function checkDotPosition(x, y) {
    centerX = width / 2;
    centerY = height / 2;
    distance = dist(x, y, centerX, centerY);
    if (distance <= size / 2) {
        dotsInCirle++;
    }
}