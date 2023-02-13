
/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');
tabs.forEach(tab => tab.addEventListener('click', () => {
  const target = document.querySelector(tab.dataset.target);
  tabContents.forEach(tc => {
    tc.classList.remove('filters__active');
  });
  target.classList.add('filters__active');
  tabs.forEach(t => {
    t.classList.remove('filter-tab-active');
  });
  tab.classList.add('filter-tab-active');
}));

/*=============== DARK LIGHT THEME ===============*/


/*=============== scroll ===================*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } 
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

/*================== toTop ==============*/

//reaches end

window.onscroll = () => {
  if((window.innerHeight + window.pageYOffset) >=document.body.offsetHeight){
    console.log("end of page");
  }
}

//user to top
const toTop = () => window.scrollTo({top: 0, behavior:'smooth'})
