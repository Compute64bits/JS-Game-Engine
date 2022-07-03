# ge2d [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

*Simple 2D game engine for js canvas*
(The project is not finished! Updates will be coming soon 👍)

## Example of code

```html
<body>
  
    <noscript>
      The browser doesn't support js code.
    </noscript>
  
    <canvas id="canvas" height="400px" width="600px">
      The browser doesn't support the canvas element.
    </canvas>

    <script src="ge2d.js"></script>

    <script>
        var myGame = new Game("canvas");

        myGame.background_color("darkgray");

        var size = 25;
        (function gameLoop(){

            myGame.clear();

            myGame.rect(15, 15, 200, 100, "cyan");

            if(myGame.pointer()["click"]){
                size += 3;
                myGame.pointer(true); // pointer(reset = true); (for reset click variable)
            }

            myGame.circle(
                myGame.pointer()["x"], 
                myGame.pointer()["y"], 
                size, "blue");

            setTimeout(gameLoop, 5);
        }());
        
    </script>
  
</body>
```
