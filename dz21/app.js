const nextEl = document.querySelector(".next-btn")
const prevEl = document.querySelector(".prev-btn")
const imgBox = document.querySelector(".image-box")
const imgsEL = document.querySelectorAll("img")
console.log(imgsEL)

let currentImg = 1;



nextEl.addEventListener("click", () => 
{
     currentImg++
     updateImg()
     console.log(currentImg)
     prevEl.removeAttribute("disabled")
})

prevEl.addEventListener("click", () => 
{
     currentImg--
     updateImg()
     console.log(currentImg)
})



function updateImg() {
    
    if(currentImg >= imgsEL.length) {
        nextEl.style.visibility = 'hidden';
        prevEl.style.visibility = 'visible';
    } else if(currentImg <= 1) {
        nextEl.style.visibility = 'visible';
        prevEl.style.visibility = 'hidden';
    } else {
        nextEl.style.visibility = 'visible';
        prevEl.style.visibility = 'visible';
    }
    
    imgBox.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    
}

