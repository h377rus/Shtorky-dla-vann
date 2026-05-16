const header = document.getElementById("mainHeader");

const colors = [
  "color1","color2","color3","color4",
  "color5","color6","color7","color8",
  "color9","color10","color11","color12"
];

let current = 0; /* пффффф ;| */

header.addEventListener("click", function () {
  header.classList.remove(colors[current]);
  current = (current + 1) % colors.length;
  header.classList.add(colors[current]);

  header.classList.remove("animate-click");
  void header.offsetWidth;
  header.classList.add("animate-click");
});





get_all_buttons = document.querySelectorAll('.button_redirection')
const track = document.getElementById('sound-blast');


get_all_buttons.forEach(el => {
    el.addEventListener('click', function(){

      a =  new Promise (() => {
        track.play()
        setTimeout(() => {
          window.location.href = el.id+'.html';
        }, 500);})
      
      
      


    })
});