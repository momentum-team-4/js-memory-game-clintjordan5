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

//   for loop


  const array = [
    { name: 'panthers', image: 'panthers.jpg' , id:"card-1"},
    { name: 'panthers', image: 'panthers.jpg' , id:"card-2"},
    { name: 'saints', image: 'saints.jpg' , id:"card-3"},
    { name: 'saints', image: 'saints.jpg' , id:"card-4" },
    { name: 'bucs', image: 'bucs.jpg' , id:"card-5"},
    { name: 'bucs', image: 'bucs.jpg' , id:"card-6"},
    { name: 'falcons', image: 'falcons.jpg' , id:"card-7"},
    { name: 'falcons', image: 'falcons.jpg' , id:"card-8"},
    { name: 'packers', image: 'packers.jpg' , id:"card-9" },
    { name: 'packers', image: 'packers.jpg' , id:"card-10"},
    { name: 'vikings', image: 'vikings.jpg' , id:"card-11"},
    { name: 'vikings', image: 'vikings.jpg' , id:"card-12"},
]

// want to make this array correspond to the cards, 6 matching pairs and 12 total