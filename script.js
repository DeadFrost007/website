var cursor = {
    delay: 8,
    _x: 0,
    _y: 0,
    endX: (window.innerWidth / 2),
    endY: (window.innerHeight / 2),
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: document.querySelector('.cursor-dot'),
    $outline: document.querySelector('.cursor-dot-outline'),
    
    init: function() {
        // Set up element sizes
        this.dotSize = this.$dot.offsetWidth;
        this.outlineSize = this.$outline.offsetWidth;
        
        this.setupEventListeners();
        this.animateDotOutline();
    },
    
//     updateCursor: function(e) {
//         var self = this;
        
//         console.log(e)
        
//         // Show the cursor
//         self.cursorVisible = true;
//         self.toggleCursorVisibility();

//         // Position the dot
//         self.endX = e.pageX;
//         self.endY = e.pageY;
//         self.$dot.style.top = self.endY + 'px';
//         self.$dot.style.left = self.endX + 'px';
//     },
    
    setupEventListeners: function() {
        var self = this;
        
        // Anchor hovering
        document.querySelectorAll('a').forEach(function(el) {
            el.addEventListener('mouseover', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            el.addEventListener('mouseout', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });
        });
        
        // Click events
        document.addEventListener('mousedown', function() {
            self.cursorEnlarged = true;
            self.toggleCursorSize();
        });
        document.addEventListener('mouseup', function() {
            self.cursorEnlarged = false;
            self.toggleCursorSize();
        });
  
  
        document.addEventListener('mousemove', function(e) {
            // Show the cursor
            self.cursorVisible = true;
            self.toggleCursorVisibility();

            // Position the dot
            self.endX = e.pageX;
            self.endY = e.pageY;
            self.$dot.style.top = self.endY + 'px';
            self.$dot.style.left = self.endX + 'px';
        });
        
        // Hide/show cursor
        document.addEventListener('mouseenter', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        });
        
        document.addEventListener('mouseleave', function(e) {
            self.cursorVisible = true;
            self.toggleCursorVisibility();
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        });
    },
    
    animateDotOutline: function() {
        var self = this;
        
        self._x += (self.endX - self._x) / self.delay;
        self._y += (self.endY - self._y) / self.delay;
        self.$outline.style.top = self._y + 'px';
        self.$outline.style.left = self._x + 'px';
        
        requestAnimationFrame(this.animateDotOutline.bind(self));
    },
    
    toggleCursorSize: function() {
        var self = this;
        
        if (self.cursorEnlarged) {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        } else {
            self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
            self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    },
    
    toggleCursorVisibility: function() {
        var self = this;
        
        if (self.cursorVisible) {
            self.$dot.style.opacity = 1;
            self.$outline.style.opacity = 1;
        } else {
            self.$dot.style.opacity = 0;
            self.$outline.style.opacity = 0;
        }
    }
}

cursor.init();

const checkbox = document.querySelector(".checkbox");

    checkbox.addEventListener('change', (e) => {
      const github =  document.querySelector(".github")
      const twitter = document.querySelector(".twitter")
      const steam = document.querySelector(".steam")
      const instagram = document.querySelector(".instagram")

      // CIRCLES
      const circle1 = document.querySelector('.circle1')
      const circle2 = document.querySelector('.circle2')
      const circle3 = document.querySelector('.circle3')
      const circle4 = document.querySelector('.circle4')
      const circle5 = document.querySelector('.circle5')
      const circle6 = document.querySelector('.circle6')
      const circle7 = document.querySelector('.circle7')
      const circle8 = document.querySelector('.circle8')
      const circle9 = document.querySelector('.circle9')
      const circle10 = document.querySelector('.circle10')

      const title = document.querySelector('.title');
      const body = document.body;

      // THEME SLIDER
      const ball = document.querySelector('.ball')
      const checkboxLabel = document.querySelector('.checkbox-label');
      const sun = document.querySelector('.sun');
      const moon = document.querySelector('.moon');

      const cursorDot = document.querySelector('.cursor-dot')
      const cursorDotOutline = document.querySelector('.cursor-dot-outline')

      if(e.target.checked) {
        body.classList.add("white");
        body.classList.remove("black")

        title.style.color = "black";

        // SET STYLES FOR CIRCLES
        circle1.style.backgroundColor = "black"
        circle2.style.backgroundColor = "black"
        circle3.style.backgroundColor = "black"
        circle4.style.backgroundColor = "black"
        circle5.style.backgroundColor = "black"
        circle6.style.backgroundColor = "black"
        circle7.style.backgroundColor = "black"
        circle8.style.backgroundColor = "black"
        circle9.style.backgroundColor = "black"
        circle10.style.backgroundColor = "black"

        cursorDot.classList.add('cursor-dot-black')
        cursorDotOutline.classList.add('cursor-dot-outline-black')
        
        // instagram.classList.add("reverse")
        // instagram.classList.add("hover-reverse");

        // github.classList.add("reverse")
        // github.classList.add("hover-reverse")

        // twitter.classList.add("reverse")
        // twitter.classList.add("hover-reverse")

        // steam.classList.add("reverse")
        // steam.classList.add("hover-reverse")

        instagram.classList.add("instagram-reverse")

        github.classList.add("github-reverse")
        
        twitter.classList.add("twitter-reverse")

        steam.classList.add("steam-reverse")

        // SLIDER 
        ball.style.backgroundColor = "black"
        sun.style.color = "black"
        moon.style.color = "black"
        checkboxLabel.style.border = "2px solid black"

      } else {
        body.classList.remove("white");
        body.classList.add("black")

        title.style.color = "white"

        // SET WHITE STYLES FOR CIRCLES
        circle1.style.backgroundColor = "white"
        circle2.style.backgroundColor = "white"
        circle3.style.backgroundColor = "white"
        circle4.style.backgroundColor = "white"
        circle5.style.backgroundColor = "white"
        circle6.style.backgroundColor = "white"
        circle7.style.backgroundColor = "white"
        circle8.style.backgroundColor = "white"
        circle9.style.backgroundColor = "white"
        circle10.style.backgroundColor = "white"

        cursorDot.classList.remove('cursor-dot-black')
        cursorDotOutline.classList.remove('cursor-dot-outline-black')

        cursorDot.classList.add('cursor-dot')
        cursorDotOutline.classList.add('cursor-dot-outline')
                
        // instagram.classList.remove("reverse")
        // instagram.classList.remove("hover-reverse")

        // github.classList.remove("reverse")
        // github.classList.remove("hover-reverse")

        // twitter.classList.remove("reverse")
        // twitter.classList.remove("hover-reverse")

        // steam.classList.remove("reverse")
        // steam.classList.remove("hover-reverse")

        instagram.classList.remove("instagram-reverse")

        github.classList.remove("github-reverse")
        
        twitter.classList.remove("twitter-reverse")

        steam.classList.remove("steam-reverse")

        // SLIDER
        ball.style.backgroundColor = "white"
        sun.style.color = "white" 
        moon.style.color = "white"
        checkboxLabel.style.border = "2px solid white"
      }
    })