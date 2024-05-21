const slides=document.querySelectorAll(".slide")
let counter=0;
//console.log(slides)
slides.forEach((slide,index)=>{
    slide.style.top=`${index * 100}%`
})
const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateY(-${counter * 100}%)`
    })
}
const goNext=()=>{
    counter++
    slideImage()
}
const goPrev=()=>{
    counter--
    slideImage()
}