class Blob {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        let angle = random(0, 2 * PI);
        this.xspeed = random(2, 5) * Math.cos(angle);
        this.yspeed = random(2, 5) * Math.sin(angle);
        this.r = random(120, 300);
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        if (this.x > width) this.x = this.x - width;
        if ( this.x < 0) this.x = this.x + width;
        if (this.y > height) this.y = this.y - height;
        if (this.y < 0) this.y = this.y + height
    }

    show() {
        noFill();
        stroke(0);
        strokeWeight(4);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}