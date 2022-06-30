const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const closedEar = document.querySelector('.ear');
const closedMouth = document.querySelector('.mouth');

// Add event listener
closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openFace.addEventListener('click' , () => {
    if(closedEar.classList.contains ('ear')) {
        closedEar.classList.add('active');
        openFace.classList.remove('active');
    }
})

closedEar.addEventListener('click' , () => {
    if(closedMouth.classList.contains('mouth')){
        closedMouth.classList.add('active');
        closedEar.classList.remove('active');
    }
})

 closedMouth.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    closedMouth.classList.remove('active');
  }
});
