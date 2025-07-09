// look on web for revision

//1...... first the dom selectors
const paragraph = document.getElementById('paragraph');
paragraph.style.backgroundColor = 'green';
paragraph.style.padding = '10px ';
paragraph.style.color = 'white';
//
const h1 = document.querySelector('h1'); // this gives the first h1 tag
const h2 = document.querySelector('.heading2');
h2.style.color = 'red';

const list = document.querySelectorAll('li'); // selected all the list tags
list[0].style.color = 'blue';
list.forEach((l)=>{
l.style.margin = '20px';
})



