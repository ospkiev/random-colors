"use strict"

// Task 3!!

$(document).ready(function () {

  let randColor = '';
  const randomColor = () => {
    randColor = `${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)},
      ${Math.round(Math.random() * 255)}`
  }
  // Creating a tag 'DIV'
  let Div = $('<div></div>');

  // Adding Div to body
  $('body').prepend(Div);

  // Adding css style to Div
  Div.css({
    position: 'absolute',
    top: '1vw',
    left: '1vw',
    width: '70px',
    height: '70px',
    border: `4px solid black`,
    borderRadius: '50%'
  })

  // Crazy ball
  function crazyBall() {
    randomColor()
    var currentDate = new Date();
    console.log(currentDate)
    Div.animate({
      top: Math.round(Math.random() * (innerHeight - 200)),
      left: Math.round(Math.random() * (innerWidth - 200)),
      backgroundColor: `rgb(${randColor})`,
      borderColor: `rgb(${randColor})`
    }, {
      // duration: 1000,
      easing: 'easeOutElastic',
      // complete: crazyBall,
    });
    Div.css({
      boxShadow: `0 0 25px 25px rgb(${randColor}, 0.6)`,
    });
  }
  setInterval(crazyBall, 2000);
});
