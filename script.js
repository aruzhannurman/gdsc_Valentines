const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);
const csText = qs('.csText');



const csTextOptions = [
  'Our love is like a loop - endless and always running 💖',
  'You are my favorite function in the program of life 🥰',
  'My heart overflows with love for you, no stack error 🐣 ',
  'You decrypt my heart every time you smile 🌝',
  'In my world, you are the constant, not a variable ❤️‍🔥',
];

const gifOptions = [
  'https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif',
  'https://media1.giphy.com/media/xWTNfEu9uAXBnFQIa5/giphy.gif',
  'https://media4.giphy.com/media/8mkrPlsvEUx6nBzCfA/giphy.gif',
  'https://media3.giphy.com/media/qlAPmI5m92Lo1cial8/giphy.gif',
  'https://media0.giphy.com/media/In5Ij0yP0uBEfwU3qF/giphy.gif',
  'https://media1.giphy.com/media/cB7j5PLO5ZTRCp1HHA/giphy.gif',
  'https://media2.giphy.com/media/VKUSdDIW7vXWwTFCtf/giphy.gif',
  'https://media2.giphy.com/media/nnUWekggiAlEtxxAze/giphy.gif',
  'https://media2.giphy.com/media/nnUWekggiAlEtxxAze/giphy.gif',
  'https://media2.giphy.com/media/nnUWekggiAlEtxxAze/giphy.gif',
  'https://media0.giphy.com/media/9pDxWePiOBexqOs72z/giphy.gif',
  'https://media0.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif',
  'https://media2.giphy.com/media/8MzUOyu70W38yvFbLQ/giphy.gif',
  'https://media4.giphy.com/media/Z9qYgEF78Z64qBoMQp/giphy.gif',
  'https://media4.giphy.com/media/yNvmkSbnamOXEfnYxY/giphy.gif',
  'https://media4.giphy.com/media/bxFtVkOWFzSD7RKon5/giphy.gif',
  'https://media0.giphy.com/media/vQ8ubcro4CJV6nhIwl/giphy.gif',
  'https://media0.giphy.com/media/0kDdAFAELmvvFNUKim/giphy.gif',
  'https://media4.giphy.com/media/lNLndq2s1Tx4W66fiR/giphy.gif',
  'https://media1.giphy.com/media/ouPBYxIbnLkc5yigZg/giphy.gif',
  'https://media0.giphy.com/media/cbOun7SXza6TpmyUTZ/giphy.gif',
  'https://media2.giphy.com/media/fHGl1MDMNkO6fOaFDF/giphy.gif'
];


function playAudio() {
  var audio = document.getElementById('myAudio');
  audio.play();
}

const setRandomCsText = () => {
  const randomIndex = Math.floor(Math.random() * csTextOptions.length);
  csText.textContent = csTextOptions[randomIndex];
};

const setRandomGif = () => {
  const randomIndex = Math.floor(Math.random() * gifOptions.length);
  gif.src = gifOptions[randomIndex];
};

setRandomCsText();
setRandomGif();






const handleYesClick = () => {
  question.innerHTML = "Yeahhhhhhhhhhh! See you tomorrow!!";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

  // Remove the 'mouseover' event listener from noBtn
  noBtn.removeEventListener("mouseover", handleNoMouseOver);

  // Remove the noBtn from the DOM
  noBtn.remove();




  // Function to set a random GIF to the gif element
 

//   // Define predefined romantic date ideas
  const dateIdeas = [
    "Cook a romantic dinner together",
    "Go for a moonlit walk on the beach",
    "Have a picnic in the park",
    "Take a dance class together",
    "Stargaze in the backyard",
    "Take a hot air balloon ride",
    "Explore a botanical garden",
    "Attend a live outdoor concert",
    "Visit an art gallery",
    "Go on a weekend getaway to a cozy cabin",
    "Attend a cooking class together",
    "Plan a movie marathon night at home",
    "Take a scenic train ride",
    "Go horseback riding",
    "Visit a local winery for a wine tasting",
    "Go kayaking or canoeing",
    "Attend a comedy show",
    "Take a scenic hike and have a picnic",
    "Go on a sunrise or sunset photo shoot",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Take a dance lesson together",
    "Have a DIY spa night at home",
    "Go on a bike ride together",
    "Plan a themed dinner night at home",
    "Attend a live theater performance",
    "Go on a scenic drive",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a local festival or fair",
    "Go on a scenic boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Have a picnic in a local park",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",
    "Take a day trip to a nearby national park",
    "Go on a bike ride along a scenic trail",
    "Visit a local museum",
    "Have a DIY spa day at home",
    "Attend a live theater performance",
    "Go on a scenic hike and have a picnic",
    "Take a painting class together",
    "Attend a local farmers' market",
    "Explore a historic neighborhood",
    "Go horseback riding",
    "Have a themed dinner night at home",
    "Attend a local sports game",
    "Plan a day trip to a nearby city",
    "Have a karaoke night at home or at a local venue",
    "Attend a wine and cheese tasting",
    "Visit a local chocolate or dessert shop",
    "Take a pottery or ceramics class",
    "Attend a live music performance",
    "Go on a boat tour",
    "Visit a local bookstore and pick out books for each other",
    "Take a photography workshop together",
    "Explore a new hiking trail",
    "Attend a wine and paint night",
    "Visit a nearby beach or lake",
    "Plan a game night with board games or card games",
    "Take a pottery or ceramics class",
    "Attend a trivia night at a local bar",
    "Go on a hot air balloon ride",
    "Take a scenic train ride",
    "Plan a movie night with your favorite films",
    "Go on a helicopter tour",
    "Attend a live outdoor concert",
    "Visit a local art gallery",
    "Go on a brewery tour",
    "Take a scenic drive through the countryside",
    "Attend a live comedy show",
    "Visit a local botanical garden",
    "Have a picnic in a vineyard",
    "Take a cooking class together",
    "Go on a river cruise",
    "Plan a weekend getaway to a cozy cabin",
    "Attend a dance class together",

    // Add more date ideas as needed
  ];

  // Create and style a new button for Let's Go!
  const letsGoBtn = document.createElement("button");
  letsGoBtn.textContent = "Let's Go!";
  letsGoBtn.classList.add("letsgo-btn"); // You can add a class for styling if needed
  letsGoBtn.style.position = "absolute";

  // Adjust the left position based on screen width
  if (window.innerWidth <= 800) {
    letsGoBtn.style.left = "95%";
  } else {
    letsGoBtn.style.left = "63%";
  }

  letsGoBtn.style.transform = "translate(-50%, -50%)";
  letsGoBtn.style.width = "200px"; // Adjust the width as needed

  // Add a click event listener to prompt the user with random romantic date ideas
  letsGoBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * dateIdeas.length);
    const selectedDateIdea = dateIdeas[randomIndex];

    alert(`How about this romantic date idea: ${selectedDateIdea}`);
  });

  // Replace yesBtn with the new letsGoBtn
  yesBtn.replaceWith(letsGoBtn);
};

const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);



