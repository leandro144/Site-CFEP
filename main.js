window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 70)
})

// nav //

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})



// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
    navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
    navLinks.style.left = "-100%";
}

// ****** MODAL ****** //

let ethics = document.getElementById("btnethics")
let btncode = document.getElementById("btncode")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let backgroundModal = document.querySelector(".backgroundModal")
let close = document.getElementById("close")

ethics.addEventListener('click', () => {
  if(1 > 0) {
    backgroundModal.style.display = "block"
    img1.style.display = "block"
    img2.style.display = "none"
    close.style.display = "block"
    close.addEventListener('click', () => {
      backgroundModal.style.display = "none"
    })
  }
})

btncode.addEventListener('click', () => {
  if(1 > 0) {
    backgroundModal.style.display = "block"
    img2.style.display = "block"
    img1.style.display = "none"
    close.style.display = "block"
    close.addEventListener('click', () => {
      backgroundModal.style.display = "none"
    })
  }
})






let musicas = [
    {titulo:'Guitar solo', artista:'João Tinti', source:'musicas/We Ride! - Reed Mathis.mp3', img:'imagens/rock.jpg'},
    {titulo:'Samba raiz', artista:'Bossa Nova Brasil', source:'musicas/Ella Vater - The Mini Vandals.mp3', img:'imagens/samba.jpg'},
    {titulo:'Música piano', artista:'John Green', source:'musicas/A Brand New Start - TrackTribe (1).mp3', img:'imagens/piano.jpg'}
];

// INICIO
const chatLog = document.getElementById('chat-log');
const userInput = document.getElementById('user-input');

// Chatbot responses
const botResponses = [
  'Hello, how can I assist you?',
  'What can I help you with today?',
  'Feel free to ask me anything.'
];

// Function to add a message to the chat log
function addMessageToLog(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.classList.add(sender);
  messageElement.textContent = message;
  chatLog.appendChild(messageElement);
}

// Function to handle user input
function handleUserInput() {
  const userMessage = userInput.value;
  addMessageToLog(userMessage, 'user');
  userInput.value = '';

  // Get a random bot response
  const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
  addMessageToLog(randomResponse, 'bot');
}

// Event listener for user input
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});