// Accessing an element by ID and modifying its content
const heading = document.getElementById('myHeading');
heading.textContent = 'Hello, DOM!';

// Creating and appending a new paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'This is a dynamically created paragraph.';
document.body.appendChild(paragraph);

// Modifying element attributes
const image = document.querySelector('img');
image.setAttribute('src', 'new-image.jpg');
image.setAttribute('alt', 'New Image');

// Adding event listeners
const button = document.querySelector('button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});