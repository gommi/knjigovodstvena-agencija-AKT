$(window).scroll(function () {
  var top_of_element = $("#sijalica").offset().top;
  var bottom_of_element =
    $("#sijalica").offset().top + $("#sijalica").outerHeight();
  var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  var top_of_screen = $(window).scrollTop();

  if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
    console.log("Vidljiv je");

    const counters = document.querySelectorAll(".counterProc");
    const speed = 100;

    counters.forEach((counter) => {
      const updateCount = () => {
        $("#sijalica").attr("data-target");
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
          counter.innerText = count + inc;
          setTimeout(updateCount, 25);
        } else {
          count.innerText = target;
        }
      };
      console.log(counters);
      updateCount();
    });
    //sec
    const countersOne = document.querySelectorAll(".counterYears");
    const speedOne = 10;

    countersOne.forEach((counterOne) => {
      const updateCountOne = () => {
        const targetOne = +counterOne.getAttribute("data-target");
        const countOne = +counterOne.innerText;

        const incOne = targetOne / speedOne;

        if (countOne < targetOne) {
          counterOne.innerText = countOne + incOne;
          setTimeout(updateCountOne, 180);
        } else {
          countOne.innerText = targetOne;
        }
      };

      updateCountOne();
    });
    //three
    const countersTwo = document.querySelectorAll(".counterBuss");
    const speedTwo = 30;

    countersTwo.forEach((counterTwo) => {
      const updateCountTwo = () => {
        const targetTwo = +counterTwo.getAttribute("data-target");
        const countTwo = +counterTwo.innerText;

        const incTwo = targetTwo / speedTwo;

        if (countTwo < targetTwo) {
          counterTwo.innerText = countTwo + incTwo;
          setTimeout(updateCountTwo, 80);
        } else {
          countTwo.innerText = targetTwo;
        }
      };

      updateCountTwo();
    });
  } else {
    console.log("Nije vidljiv");
  }
});
/*
const counters = document.querySelectorAll(".counterProc");
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 25);
    } else {
      count.innerText = target;
    }
  };

  updateCount();
});

const countersOne = document.querySelectorAll(".counterYears");
const speedOne = 10;

countersOne.forEach((counterOne) => {
  const updateCountOne = () => {
    const targetOne = +counterOne.getAttribute("data-target");
    const countOne = +counterOne.innerText;

    const incOne = targetOne / speedOne;

    if (countOne < targetOne) {
      counterOne.innerText = countOne + incOne;
      setTimeout(updateCountOne, 180);
    } else {
      countOne.innerText = targetOne;
    }
  };

  updateCountOne();
});

const countersTwo = document.querySelectorAll(".counterBuss");
const speedTwo = 30;

countersTwo.forEach((counterTwo) => {
  const updateCountTwo = () => {
    const targetTwo = +counterTwo.getAttribute("data-target");
    const countTwo = +counterTwo.innerText;

    const incTwo = targetTwo / speedTwo;

    if (countTwo < targetTwo) {
      counterTwo.innerText = countTwo + incTwo;
      setTimeout(updateCountTwo, 80);
    } else {
      countTwo.innerText = targetTwo;
    }
  };

  updateCountTwo();
});*/
