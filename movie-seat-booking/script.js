const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Select seats
function selectSeats(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
}

// Select movie
function selectMovie(e) {
    ticketPrice = +e.target.value;
    updateSelectedCount();
}

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    count.innerText = selectedSeats.length;
    total.innerText = selectedSeats.length * ticketPrice;
}

// Event listeners
container.addEventListener('click', selectSeats);
movieSelect.addEventListener('change', selectMovie);