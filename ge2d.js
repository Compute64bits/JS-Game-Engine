class Game{
    constructor(id){
        self.canvas = document.getElementById(id);
        self.ctx = canvas.getContext("2d");
        self.height = self.canvas.height;
        self.width = self.canvas.width;
        self.click = false;

        self.canvas.addEventListener("mousemove", function(e){
            self.pointer_x = e.clientX;
            self.pointer_y = e.clientY;
        });

        self.canvas.onclick = function(){
            self.click = true;
        };
    }

    background_color(color) {
        self.bg_color = color;
        self.ctx.fillStyle = self.bg_color;
        self.ctx.fillRect(0, 0, self.width, self.height);
    }

    clear(){
        self.ctx.beginPath();
        self.ctx.fillStyle = self.bg_color;
        self.ctx.fillRect(0, 0, self.width, self.height);
        self.ctx.arc(self.width/2, self.height/2, self.width*2, 0, 2*Math.PI, false);
        self.ctx.fillStyle = self.bg_color;
        self.ctx.fill();
    }

    circle(x, y, radius, color){
        self.ctx.beginPath();
        self.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        self.ctx.fillStyle = color;
        self.ctx.fill();
    }

    pointer(reset=false){
        var d = {x: self.pointer_x, 
                 y: self.pointer_y,
                 click: self.click}

        if(reset){self.click=false;};
        
        return d
    }

    rect(x1, y1, x2, y2, color){
        self.ctx.fillStyle = color;
        self.ctx.fillRect(x1, y1, x2, y2);
    }
}
