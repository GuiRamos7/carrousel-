(function(){
    "use strict"

    let $ = (x) => document.querySelector(x);

    let $btnNext = $(".next");
    let $btnPrev = $(".prev");
    let $carrousel = $(".box-carrousel-images");
    let $dots = document.querySelectorAll(".dots");
    let $boxDots = $(".dots-carrousel")

    let x = 0





    for (let i = 0; i < $dots.length; i++) {
        $dots[i].addEventListener("click", () => {
            x = i
            $carrousel.style.transform = `translateX(${-790 * x}px)`
            putColor()
        });
        
    }

    function putColor() {

        $boxDots.querySelector("li.putColor").classList.remove("putColor");
        $dots[x].classList.add("putColor");

    }

    function changeCarrousel() {

        // NEXT 
        // NEXT
        // NEXT
        $btnNext.addEventListener("click", () => {

            if (x === 3) {
                x = 0
                $carrousel.style.transform = `translateX(${-790 * x}px)`
                return
            }
           x++
           $carrousel.style.transform = `translateX(${-790 * x}px)`
       });


        // BACK
        // BACK
        // BACK
        $btnPrev.addEventListener("click", () => {
            debugger
            if (x === 0) {
                x = 3
                $carrousel.style.transform = `translateX(${-790 * x}px)`
                return
    
            }
            x = x - 1   
            $carrousel.style.transform = `translateX(${-790 * x}px)`
        })
        
    }


    function carrousel() 



})()