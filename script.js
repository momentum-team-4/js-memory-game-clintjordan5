$(document).ready(function () {
    $('#cards')
        .append("<div id='card-1' class='card backimage'></div>")
        .append("<div id='card-2' class='card backimage'></div>")
        .append("<div id='card-3' class='card backimage'></div>")
        .append("<div id='card-4' class='card backimage'></div>")
        .append("<div id='card-5' class='card backimage'></div>")
        .append("<div id='card-6' class='card backimage'></div>")
        .append("<div id='card-7' class='card backimage'></div>")
        .append("<div id='card-8' class='card backimage'></div>")
        .append("<div id='card-9' class='card backimage'></div>")
        .append("<div id='card-10' class='card backimage'></div>")
        .append("<div id='card-11' class='card backimage'></div>")
        .append("<div id='card-12' class='card backimage'></div>")

    $('.card').on('click', function (event) {
        $(event.target).toggleClass('clicked')

        if ($('.clicked').length === 2) {
            console.log("both clicked")
        }
    })
})

// considered using a for loop, but currently writing out each card to append to the card id
// thinking a for loop would be useful once able to add difficulty level with more cards


const array = [
    { name: 'panthers', image: 'panthers.jpg', id: "card-1" },
    { name: 'panthers', image: 'panthers.jpg', id: "card-2" },
    { name: 'saints', image: 'saints.jpg', id: "card-3" },
    { name: 'saints', image: 'saints.jpg', id: "card-4" },
    { name: 'bucs', image: 'bucs.jpg', id: "card-5" },
    { name: 'bucs', image: 'bucs.jpg', id: "card-6" },
    { name: 'falcons', image: 'falcons.jpg', id: "card-7" },
    { name: 'falcons', image: 'falcons.jpg', id: "card-8" },
    { name: 'packers', image: 'packers.jpg', id: "card-9" },
    { name: 'packers', image: 'packers.jpg', id: "card-10" },
    { name: 'vikings', image: 'vikings.jpg', id: "card-11" },
    { name: 'vikings', image: 'vikings.jpg', id: "card-12" },
    console.log("array loaded")
]
// can see that the array loaded from console log
// want to make this array correspond to the cards, 6 matching pairs and 12 total

function shuffleArray(array) {
    array = array.slice()
    for (let a = array.length - 1; a > 0; a--) {
        const b = Math.floor(Math.random() * a)
        const temp = array[a]
        array[a] = array[b]
        array[b] = temp
        console.log("shuffle")
        //   not seeing the shuffle in console
    }
    return array

}

//   this will shuffle the array, however I need to link the array to the actual cards to see it in the browser

const timer = document.querySelector("timer")
console.log("timer loaded")
// working on a timer function. made empty div in html, can see timer loaded in console