const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(reserved)");
container.addEventListener("click", function(e) {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")){
        e.target.classList.toggle("selected");
        calculateTotal()
    }

});

select.addEventListener("change", function(e){
calculateTotal()
})
function calculateTotal() {
   const selectedSeats = container.querySelectorAll(".seat.selected");
   const selectedSeatsArr = [];
   const seatsArr = [];
   selectedSeats.forEach(function(seat){
    selectedSeatsArr.push(seat);
   });
   seats.forEach(function(seat){
    seatsArr.push(seat);
   });
  
   
   let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
    return seatsArr.indexOf(seat);
   })
   
   console.log(selectedSeatIndexs);
    let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
        let price = select.value;
        count.innerHTML = selectedSeatCount.toString();
         amount.innerText = selectedSeatCount * select.value;
         saveToLocalStorage(selectedSeatIndexs);
    }
    function saveToLocalStorage(indexs){
        localStorage.setItem("selectedSeats",JSON.stringify(indexs));
        localStorage.setItem("selectedMovieIndex", select.selectedIndex);
    }
