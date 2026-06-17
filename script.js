/* SEARCH FUNCTION */

const searchInput = document.querySelector(".search-box input");

const jobCards = document.querySelectorAll(".job-card");

searchInput.addEventListener("keyup", function(){

  const searchValue = searchInput.value.toLowerCase();

  jobCards.forEach(function(card){

    const jobTitle =
    card.querySelector("h3").textContent.toLowerCase();

    if(jobTitle.includes(searchValue)){

      card.style.display = "block";

    }

    else{

      card.style.display = "none";

    }

  });

});