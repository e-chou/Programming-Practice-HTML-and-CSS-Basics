const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  // picks random items
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // subs random items into the story
  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  // if a name had been entered to the custom name field, replace bob with the custom name
  if(customName.value !== '') {
    newStory = newStory.replaceAll('Bob', customName.value);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  // if uk mode was toggled, convert units and change labels
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stone`;
    newStory = newStory.replaceAll('300 pounds', weight);

    const temp =  `${Math.round((94-32) * 5/9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temp);
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
