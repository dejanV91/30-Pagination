import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'
const title = document.querySelector('.section-title h1')
const btnContainer = document.querySelector('.btn-container')

let index = 0;
let pages = [];

const setUi = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
}

const init = async () => {
  const followers = await fetchFollowers();
  paginate(followers);
  title.textContent = "pagination";
  pages = paginate(followers);
  setUi(followers);
}

btnContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-btn")){
    index = e.target.dataset.index;
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setUi();
})

window.addEventListener("load", init);


