const $accordion = document.querySelectorAll(".accordion_collapse");
const $btn = document.querySelectorAll(".accordion_question")

for(var i = 0; i < $btn.length; i++){ 
    $btn[i].addEventListener("click", function(e){ //adiciona o click em todos botões

       for(var x = 0; x < $btn.length; x++){ 

            if(e.target === $btn[x]){ //if sempre vai retornar true
                $btn[x].classList.toggle('open'); //adiciona a classe que deixa a question em negrito quando clicada
                $accordion[x].classList.toggle("active"); //vai dar o toggle no mesmo indice do button
            }

       }
    
        
    });
       
} 

    


