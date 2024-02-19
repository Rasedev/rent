

let elmntToView = document.getElementById("banner-btn");


elmntToView.addEventListener("click", function () {
    let scrol = document.getElementById("Feature");
    scrol.scrollIntoView({
        behavior: "smooth"
    });
});



const places = document.querySelectorAll("#place");


function increment(id) {
    var seatCount = document.getElementById(id);
    var counterSeat = parseInt(seatCount.innerText);
    var counterSeat = counterSeat + 1;
    var totalSet = seatCount.innerText = counterSeat;
    
}

function decrement(id) {
    var totalSeat = document.getElementById(id);
    var counterSeat = parseInt(totalSeat.innerText);
    var counterSeat = counterSeat - 1;
    var totalSet = totalSeat.innerText = counterSeat;
   
}




for (let seat of places) {
    var clickValue = [];
    seat.addEventListener("click", function (e) {
        var btnValue = e.target.innerText;

        if (clickValue.includes(btnValue)) {
            alert(`THE ${btnValue} CHAIR IS ALREADY YOU BOOKING`);
        } else if (clickValue.length < 4) {
            clickValue.push(btnValue);
            e.target.classList.add("bg-[#1DD100FF]");
            increment("seatCount");
            decrement("totalSeat");
            seatList(btnValue);
           
            price();
            if (clickValue.length === 4) {
                let couponInput = document.getElementById("couponInput");
                let couponBtn = document.getElementById("couponBtn");

                couponInput.removeAttribute("disabled");
                couponBtn.removeAttribute("disabled");
            };
        }


        function seatList() {
            let ticketList = document.getElementById("ticketList");
            ticketList.innerHTML += `
            <ul class="flex justify-between items-center mb-1">
                <li class="text-[16px] font-inter text-[#03071299]">
                    ${btnValue}
                </li>
                <li class=" text-[16px] font-inter text-[#03071299]">
                    Economy
                </li>
                <li id="ticketPrice" text-[16px] font-inter text-[#03071299]">
                    550
                </li>
            </ul>
            `;
        }

        function price() {
            let ticketPrice = document.querySelectorAll("#ticketPrice");
            var total_price = 0;
            for (let tPrice of ticketPrice) {
                var price = parseInt(tPrice.innerText);
                var total_price = total_price + price;
                var totalPrice = document.getElementById("totalPrice");
                totalPrice.innerText = total_price;
            }
        };


    });


}

