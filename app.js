const user_seclaction_button = document.querySelectorAll(
    ".user_seclaction button"
  ),
  user_sertion_img = document.querySelector(".user_sertion img"),
  computer_img = document.querySelector(".computer img"),
  start_btn = document.querySelector("#start_btn"),
  user_name_id_create = document.querySelector(".user_name_id_create"),
  form_input = document.querySelector(".user_name_id_create input"),
  user_name_desplay = document.querySelector("#user_name_desplay"),
  computer_score = document.querySelectorAll("#computer_score span"),
  user_score = document.querySelectorAll("#user_score span"),
  result_anausman = document.querySelector(".result_anausman"),
  game_over_btn = document.querySelector(".game_over button");

let user_seclect = 0,
  rendom_number,
  user_score_store = 0,
  bot_score_stor = 0,
  game_over_score = 10;

// game result
const game_result = (text) => {
  result_anausman.classList.add("active");
  result_anausman.innerHTML = text;
  setTimeout(() => {
    result_anausman.classList.remove("active");
  }, 1000);
};

// ganaret rendom number
const rendom_number_genaret = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

// click start button
start_btn.addEventListener("click", () => {
  // if user_id emty
  if (form_input.value !== "") user_name_id_create.style.display = "none";

  user_name_desplay.innerHTML = form_input.value;
  user_score[0].innerText = form_input.value;
});

// game over function
const game_over_function = (event) => {
  if (event === "win") {
    const game_over = document.querySelector(".game_over");
    game_over.style.display = "flex";
    game_over.querySelector("h4").innerHTML = "you win";
    game_over.querySelector("img").src = `./img_png/13555529_sport10.svg`;
  } else {
    const game_over = document.querySelector(".game_over");
    game_over.style.display = "flex";
    game_over.querySelector("h4").innerHTML = "loss";
    game_over.querySelector("img").src = `./img_png/7533489_3688248.svg`;
  }
};

// user secletion image
user_seclaction_button.forEach((button) => {
  button.addEventListener("click", () => {
    // store user number and store rendom number
    rendom_number = rendom_number_genaret(1, 4);
    user_seclect = Number(button.id);

    // image change
    user_sertion_img.src = `./img_png/${user_seclect}.png`;
    computer_img.src = `./img_png/${rendom_number}.png`;

    // game result condetion
    if (
      (user_seclect === 1 && rendom_number === 3) ||
      (user_seclect === 2 && rendom_number === 1) ||
      (user_seclect === 3 && rendom_number === 2)
    ) {
      user_score_store++;
      user_score[1].innerText = user_score_store;
      game_result("win");
    } else if (user_seclect === rendom_number) {
      game_result("drow");
    } else {
      bot_score_stor++;
      computer_score[1].innerText = bot_score_stor;
      game_result("loss");
    }

    // game over win condetion
    if (
      user_score_store === game_over_score ||
      bot_score_stor === game_over_score
    ) {
      if (user_score_store > bot_score_stor) {
        game_over_function("win");
      } else {
        game_over_function("loss");
      }
    }
  });
});

// game reset button
game_over_btn.addEventListener("click",()=>{
  location.reload();
})