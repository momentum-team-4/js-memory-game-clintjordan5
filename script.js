$(document).ready(function () {
    $('#cards')
      .append("<div id='card-1' class='card'></div>")
      .append("<div id='card-2' class='card'></div>")
      .append("<div id='card-3' class='card'></div>")
      .append("<div id='card-4' class='card'></div>")
      .append("<div id='card-5' class='card'></div>")
      .append("<div id='card-6' class='card'></div>")
      .append("<div id='card-7' class='card'></div>")
      .append("<div id='card-8' class='card'></div>")
      .append("<div id='card-9' class='card'></div>")
      .append("<div id='card-10' class='card'></div>")
      .append("<div id='card-11' class='card'></div>")
      .append("<div id='card-12' class='card'></div>")
  
    $('.card').on('click', function (event) {
      $(event.target).toggleClass('clicked')
  
      if ($('.clicked').length === 2) {
        console.log("both clicked")
      }
    })
  })

//   the above code adds 12 cards with an ID and changes them when clicked

  const array = [
    { name: 'panthers', image: 'panthers.jpg' },
    { name: 'panthers', image: 'panthers.jpg' },
    { name: 'saints', image: 'saints.jpg' },
    { name: 'saints', image: 'saints.jpg' },
    { name: 'bucs', image: 'bucs.jpg' },
    { name: 'bucs', image: 'bucs.jpg' },
    { name: 'falcons', image: 'falcons.jpg' },
    { name: 'falcons', image: 'falcons.jpg' },
    { name: 'packers', image: 'packers.jpg' },
    { name: 'packers', image: 'packers.jpg' },
    { name: 'vikings', image: 'vikings.jpg' },
    { name: 'vikings', image: 'vikings.jpg' },
]

// want to make this array correspond to the cards, 6 matching pairs and 12 total