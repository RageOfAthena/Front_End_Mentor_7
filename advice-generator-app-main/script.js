const advice = document.querySelector(".advice_box");
const advice_num = document.querySelector(".advice_box_title_number");
const advice_quote = document.querySelector(".advice_box_advice");
const dice = document.querySelector(".advice_box_dice");
const spinner = document.querySelector(".spinner");
let fetcfun = async function () {
  try {
    spinner.classList.remove("hidden");
    advice.classList.add("hidden");
    let data = await fetch("https://api.adviceslip.com/advice");
    let data1 = await data.json();
    advice.classList.remove("hidden");
    spinner.classList.add("hidden");
    let { slip } = data1;
    let Obj = {
      id: slip.id,
      advice: slip.advice,
    };
    console.log(Obj, advice_quote);
    advice_num.textContent = `${Obj.id}`;
    advice_quote.textContent = `${Obj.advice}`;
    // throw new Error("Error");
  } catch (e) {
    document.body.innerHTML = `
    <div class="error">
    <img src="error404.png" alt="404error" class="error_img" />
    <h1 class="error_head">You've a network issue....</h1>
    <p class="error_para1">
      Breathe in and on the out breathe go back and try again.
    </p>
  </div>`;
  }
};
fetcfun();
dice.addEventListener("click", function (e) {
  fetcfun();
});
