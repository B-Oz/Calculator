const buttons = document.querySelector(".calc-body");
const ekran = document.querySelector(".calc-screen");
const operator = document.querySelector("#operator");
flag = false;
let sayı1 = 0;
let sayı2 = 0;
let islem = "";

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnNo")) {
    if (ekran.innerText == "0" || flag == true) {
      ekran.innerText = e.target.innerText;
    } else {
      ekran.innerText += e.target.innerText;
    }
    flag = false;
  } else if (e.target.classList.contains("btnIslem")) {
    operator.innerText = e.target.innerText;
    console.log(sayı1, sayı2, islem);

    if (flag == false) {
      sayı1 ? (sayı2 = ekran.innertext) : (sayı1 = ekran.innerText);
    }

    if (sayı1 && sayı2) {
      console.log(sayı1, sayı2, islem);
      ekran.innerText = hesapla(sayı1, sayı2, islem);

      sayı1 = "";
      sayı2 = "";
      islem = "";
    }
    islem = e.target.İnnerText;
    flag = true;
  } else if (e.target.classList.contains("opposite")) {
    operator.innerText = e.target.innerText;
    if (flag == false) {
      sayı1 ? (sayı2 = ekran.innertext) : (sayı1 = ekran.innerText);
    }
    if (sayı1 && sayı2) {
      ekran.innerText = hesapla(sayı1, sayı2, islem);

      sayı1 = "";
      sayı2 = "";
      islem = "";
    }
  }
});

const hesapla = (sayı1, sayı2, islem) => {
  switch (islem) {
    case "+":
      return Number(sayı1) + Number(sayı2);
    case "-":
      return sayı1 - sayı2;
    case "x":
      return sayı1 * sayı2;
    case "+":
      return sayı1 / sayı2;
    case "%":
      return (sayı1 * sayı2) / 100;
  }
};
