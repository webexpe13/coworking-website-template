const addRemoveClass = (element, className) => {
  if(element.classList.contains(className)){
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
};

const menuBtn = document.querySelector(".menu_toggle");

menuBtn.addEventListener('click', () => {
    addRemoveClass(document.body, 'open-nav')
})