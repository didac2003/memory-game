document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
      }
    }

    //Exercici2
    let tabler = document.querySelector(".grid")
    let punts = document.getElementById("result")
    tabler.addEventListener('mouseover', () => {
      punts.style.fontSize = 30 + "px"
    })

    tabler.addEventListener('mouseout', () => {
      punts.style.fontSize = 20 + "px"
    })
    
    let cont = 4
  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    let vides = document.getElementById("vides")

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
      cont--
      vides.innerHTML = cont
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
      cont--
      vides.innerHTML = cont
    }
    if (cont == 0){
      alert("Has perdut Dídac Gros!")
      alert("Reinicia el joc!")
      cont = 4
      vides.innerHTML = cont
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  let accions = document.getElementById("accions")
  let botoHistorial = document.getElementById("botoHistorial") 

  botoHistorial.addEventListener('click', () => {
    if (accions.style.display == "block") accions.style.display = "none"
    if (accions.style.display == "none") accions.style.display = "block"
  })
  
  let contadorAccions = 0
  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }

    contadorAccions++
    
    let imatge = document.getElementById("imatge")
    let imatge1 = document.getElementById("imatge1")

    if(contadorAccions % 2 != 0){
      imatge.style.display = "block"
      imatge.src = cardArray[cardId].img
    }

    if(contadorAccions % 2 == 0){
      imatge1.style.display = "block"
      imatge1.src = cardArray[cardId].img
      setTimeout(borrarImatges, 1000)
    }

    function borrarImatges(){
      imatge.style.display = "none"
      imatge1.style.display = "none"
    }
    
    const taula = document.createElement('div')
    const taulacontent = `<p>Acció ${contadorAccions}: ${cardArray[cardId].name}</p>`
    taula.innerHTML = taulacontent
    accions.append(taula)
  }
  createBoard()
})
