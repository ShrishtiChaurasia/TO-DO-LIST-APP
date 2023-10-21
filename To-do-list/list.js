let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let days = document.querySelector(".days");
let time = document.querySelector(".time");
let wishes = document.querySelector(".wishes");

let totalDays = new Date();


let day = totalDays.getDay();

if (day == 1) {
  days.innerText = "monday";
} else if (day == 6) {
  days.innerText = "saturday";
} else if (day == 2) {
  days.innerText = "tuesday";
} else if (day == 3) {
  days.innerText = "wednesday";
} else if (day == 4) {
  days.innerText = "thursday";
} else if (day == 5) {
  days.innerText = "friday";
} else if (day == 7) {
  days.innerText = "sunday";
}

setInterval(() => {
  let totalDays = new Date();
  let hr = totalDays.getHours();
  let min = totalDays.getMinutes();
  let sec = totalDays.getSeconds();

  if (hr < 10) {
    hr = "0" + hr;
  } else if (min < 10) {
    min = "0" + min;
  } else if (sec < 10) {
    sec = "0" + sec;
  }

  if(hr>=1 && hr<12){
    wishes.innerText = "Good Morning";
    wishes.style.color = "green";
  }else if(hr>=12 && hr<18){
    wishes.innerText = "Good Evening";
    wishes.style.color = "orange";
  }else{
    wishes.innerText = "Good Night";
    wishes.style.color = "grey";
  }
  time.innerText = `${hr} : ${min} : ${sec}`;
}, 1000);

let main = btn.addEventListener("click", () => {
  let li = document.createElement("li");
  let icon = document.createElement("img");
  li.classList.add("li");
  li.innerText = input.value; // Set the text content of the li
  input.value = " ";
  icon.src = "cross.jpg";
  icon.classList.add("img");
  console.log(input.value);
  let list = document.querySelector("ol");
  li.appendChild(icon); // Append the icon to the li
  list.appendChild(li); // Append the li to the ol

  icon.addEventListener("click", (e) => {
    let node = e.target.nodeName;
    if ((node = "IMG")) {
      let item = e.target.parentElement;
      item.remove();
    }
  });
});


