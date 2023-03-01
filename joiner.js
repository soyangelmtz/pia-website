const subtitles = document.querySelectorAll(".card-subtitle");

const createWord = (text, index) => {
  const word = document.createElement("span");
  
  word.innerHTML = `${text} `;
  
  word.classList.add("card-subtitle-word");
  
  word.style.transitionDelay = `${index * 40}ms`;
  
  return word;
}

const addWord = (text, index, subtitle) => subtitle.appendChild(createWord(text, index));

const createSubtitle = texts => {
  texts.forEach((text, i) => {
    const subtitle = subtitles[i];
    text.split(" ").map((word, j) => addWord(word, j, subtitle));
  });
};

createSubtitle(["This is the subtitle for the Hardware Projects card.", "This is the subtitle for the Software Projects card."]);

 ////////////////////////////////////////////////////////////////////


 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}