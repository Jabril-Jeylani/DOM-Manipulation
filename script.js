let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitleId = document.querySelector('#main-title')
  mainTitleId.innerText = 'DOM Toretto'

  // Part 2
  const body = document.querySelector('body')
  this.body.style.backgroundColor = 'pink'

  // Part 3
  const favoriteThings = document.querySelector('#favorite-things')
  let lastChild = favoriteThings.lastElementChild 
  favoriteThings.removeChild(lastChild)

  // Part 4
  const specialTitle = document.querySelectorAll('.special-title')
  for(i of specialTitle){
    i.style.fontSize = '2rem';
  }

  // Part 5
  const pastRaces = document.querySelectorAll('.pastRaces')
  pastRaces[3].innerHTML = ''
  

  // Part 6
  const liElement = document.createElement('li')
  liElement.innerHTML = 'Riyadh'
  document.getElementById('past-races').appendChild(liElement)

  // Part 7
  const blogPost = document.createElement('div')
  blogPost.className = 'blog-post'
  const h2Element = document.createElement('h2')
  h2Element.textContent = 'Riyadh'
  const pElement = document.createElement('p')
  pElement.textContent = 'I loved the Riyadh Highways'

  const main = document.querySelector('.main')
  main.appendChild(blogPost)
  blogPost.appendChild(h2Element)
  h2Element.appendChild(pElement)

  blogPost.style.backgroundColor = 'rebeccaPurple'
  
  // Part 8
  const quote = document.querySelector('#quote-title')
  quote.addEventListener('click', randomQuote)

  // Part 9
  const blogEl = document.getElementsByClassName('blog-post')
  console.log(blogEl)
  for (let i = 0; i < blogEl.length; i++){
    blogEl[i].addEventListener('mouseenter', function(){
      blogEl[i].classList.toggle('red')
    })
    blogEl[i].addEventListener('mouseout', function(){
      blogEl[i].classList.toggle('purple')
    })
    
  }



});
