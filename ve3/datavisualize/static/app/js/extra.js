// Function to turncate news in home page.
function truncateText(selector, maxLength) {
  var element = document.querySelector(selector),
      truncated = element.innerText;

  if (truncated.length > maxLength) {
      truncated = truncated.substr(0, maxLength) + '...';
  }
  return truncated;
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.home-news').forEach(e => e.innerText = truncateText('p', 50));
});

// function for loading more selections in media page.

const loadMoreBtn = document.getElementById('load-more')
const imag = document.querySelectorAll('#imag')
const increase = 6
const limit = 100
let currentItem = 0;
let currentPage = 0;

const addCards = (pageIndex) => {
  currentPage = pageIndex;
  const startRange = (pageIndex - 1) * increase;
  const endRange =
    pageIndex * increase > limit ? limit : pageIndex * increase;
  
  for (let i = startRange; i <= endRange; i++) {
      imag[i].style.display = 'inline-block';;
};
}

loadMoreBtn.addEventListener('click',   () => {
  addCards(currentPage +1);
  })

