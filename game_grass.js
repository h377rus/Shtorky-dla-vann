const get_clicked_territory = document.getElementById('game_object')
const counter = document.getElementById('counter')
const trasher  = document.getElementById('trash')
const bought_button = document.getElementById('bought_button')

const object = document.getElementById('game_object')
const urls_grass = ['C:/Users/Astrokadet63/Documents/project2/Shtorky-dla-vann/imgs/good2.png',
    'C:/Users/Astrokadet66/Documents/project2/Shtorky-dla-vann/imgs/bad.png', 'C:/Users/Astrokadet66/Documents/project2/Shtorky-dla-vann/imgs/good.png'
]
var count_trava = 0
get_clicked_territory.addEventListener('click', function(){
    if (count_trava == 1){
        counter.innerHTML = String((parseFloat(counter.innerHTML)-0.001).toFixed(3))
        counter.style.color ='red'
        alert("Упс, ты тронул ужасную траву! Твоя скидка снизилась")
        
    }
    else{
        counter.innerHTML = String((parseFloat(counter.innerHTML)+0.001).toFixed(3))
        counter.style.color ='green'
    }


    if (count_trava ==2){count_trava = 0}
    else{count_trava+=1}
    
    object.src = urls_grass[count_trava]
})


trasher.addEventListener('click', function(){



    if (count_trava == 1){
        count_trava +=1
        counter.style.color ='green'
        

    }
    else{
        counter.innerHTML = String((parseFloat(counter.innerHTML)-0.001).toFixed(3))
        counter.style.color ='red'
        alert("Упс, ты выкинул хорошую траву! Твоя скидка снизилась")
        if (count_trava ==2){count_trava = 0}
        else{count_trava+=1}

    }
    
    object.src = urls_grass[count_trava]
})

bought_button.addEventListener('click', function(){

    if (parseFloat(counter.innerHTML) >= 100.000){
        alert('ЕЕЕ, ВЫ МОЖЕТЕ КУПИТЬ ШТОРУ, ВЫ НАКОПИЛИ 100% скидки и вы получаете шторину для ванны за троганье травы шторы!💨')
    }

    else{alert('У вас нет деняк :(')}
    
})