let plus = document.querySelector("#p");
let minus = document.querySelector("#m");
let random = document.querySelector("#r");
let c_e = document.querySelector(".counter");

let counter = 0;
c_e.textContent = counter;


plus.onclick = function() {
  counter++;
  c_e.textContent = counter;
};

minus.onclick = function() {
  counter--;
  c_e.textContent = counter;
};

random.onclick = function() {
    const randem = Math.floor(Math.random() * 10) + 1; 
    counter += randem;
    c_e.textContent = counter;
};
