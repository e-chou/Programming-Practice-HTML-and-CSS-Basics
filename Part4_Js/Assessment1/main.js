const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgs = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'Person\'s eye',
    'pic2.jpg' : 'Smooth rock',
    'pic3.jpg' : 'Purple and white flowers',
    'pic4.jpg' : 'Egyptian painting',
    'pic5.jpg' : 'Butterfly on a leaf'
  }

/* Looping through images */

for (const image of imgs) {
    const newImg = document.createElement('img');

    newImg.setAttribute('src', `images/${image}`);
    newImg.setAttribute('alt', alts[image]);
    
    thumbBar.appendChild(newImg);
    
    newImg.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});