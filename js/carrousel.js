(function(){
    "use strict"

    let $ = (x) => document.querySelector(x);

    let $btnNext = $(".next");
    let $btnPrev = $(".prev");
    let $carrousel = $(".box-carrousel-images");
    let $dots = document.querySelectorAll(".dots");
    let $boxDots = $(".dots-carrousel");
    let x = 0


    function changeCarrousel() {
        if(x === 0) $dots[x].classList.add("putColor") 

        function putColor() {
            $boxDots.querySelector("li.putColor").classList.remove("putColor")
            $dots[x].classList.add("putColor") 
        }
        function goNext(){
            if (x === 3) {
                x = 0
                $carrousel.style.transform = `translateX(${-790 * x}px)`
                putColor()
                return
            }
            x++
            $carrousel.style.transform = `translateX(${-790 * x}px)`
            putColor()
        }
        function goBack() {
            if (x === 0) {
                x = 3
                $carrousel.style.transform = `translateX(${-790 * x}px)`
                putColor()
                return

            }
            x = x - 1   
            $carrousel.style.transform = `translateX(${-790 * x}px)`
            putColor()
        }
        for (let i = 0; i < $dots.length; i++) {
            $dots[i].addEventListener("click", () => {
                x = i
                $carrousel.style.transform = `translateX(${-790 * x}px)`
                putColor()
            });
            
        }

        $btnPrev.addEventListener("click", goBack)
        $btnNext.addEventListener("click", goNext);
        putColor()
    }


    function carrousel() {
        changeCarrousel()
        
    }

    carrousel()
    



})()