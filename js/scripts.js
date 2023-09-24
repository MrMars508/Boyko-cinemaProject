const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
let cost  = 400;
let totalPrice = 0;
schemeSvg.addEventListener('click',(event) =>{
    if (!event.target.classList.contains("booked")){
        console.log("Это место не занято");
        event.target.classList.toggle("active");
        let totalSeats = schemeSvg.querySelectorAll(".active").length
        totalPrice = cost * totalSeats;
        totalPriceTag.textContent = totalPrice;
    }
})