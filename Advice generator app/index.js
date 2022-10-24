const adviceBtn = document.getElementById("advice-button");
const adviceNr = document.getElementById("advice-number");
const adviceQuote = document.getElementById("advice-quote");

async function getAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  console.log(await data);
  adviceNr.innerText = `ADVICE #${data.slip.id}`;
  adviceQuote.innerText = `"${data.slip.advice}"`;
}

adviceBtn.addEventListener("click", getAdvice);
