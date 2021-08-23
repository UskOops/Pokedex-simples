const pokemons = ["Bulbasaur", "Ivysaur","Venusaur","Charmander","Charmeleon","Charizad","Squirtle","Wartortle","Blastoise","Carterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate"];
let nome = document.querySelector(".pesquisa");
let nomecampo = document.querySelector(".quad");
let img = document.querySelector(".tela3");
let numeroPok = document.querySelector(".pt1-display");
let numImg = 001;
let n = 0;

function pesquisar(){
    nome.value = nome.value[0].toUpperCase() + nome.value.substr(1)
    if(pokemons.indexOf(nome.value) < 0){
        alert("não tem")
    } else {
        nomecampo.innerHTML = nome.value;
        numeroPok.innerHTML = "Nº "+((pokemons.indexOf(nome.value))+1);
        img.style.backgroundImage = `url("images/${pokemons.indexOf(nome.value)+1}.png")`;
        n = pokemons.indexOf(nome.value)
        numImg = pokemons.indexOf(nome.value)+1;
    }
}

function left(){
    if(n > 0){
        n-=1;
        numImg--;
        nomecampo.innerHTML = pokemons[n];
        numeroPok.innerHTML = "Nº "+((pokemons.indexOf(pokemons[n]))+1);
        img.style.backgroundImage = `url("images/${numImg}.png")`;
        
    }    
}    

function right(){
    if(n <= 18){
        numImg++;
        n++; 
        nomecampo.innerHTML = pokemons[n];
        numeroPok.innerHTML = "Nº "+((pokemons.indexOf(pokemons[n]))+1); 
        img.style.backgroundImage = `url("images/${numImg}.png")`;

    }   
} 