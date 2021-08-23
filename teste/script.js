const pokemons = ["Bulbasaur", "Ivysaur","Venusaur","Charmander","Charmeleon","Charizad","Squirtle","Wartortle","Blastoise","Carterpie","Metapod","Butterfree"];
let nome = document.querySelector(".pesquisa");
let nomecampo = document.querySelector(".nomepokemom");
let img = document.querySelector(".pokemom");
let numeroPok = document.querySelector(".nomeum");
let numImg = 001;
let n = 0;
alert(pokemons.indexOf(nome))

function pesquisar(){
    nome.value = nome.value[0].toUpperCase() + nome.value.substr(1)
    if(pokemons.indexOf(nome.value) < 0){
        alert("não tem")
    } else {
        nomecampo.innerHTML = nome.value;
        numeroPok.innerHTML = ((pokemons.indexOf(nome.value))+1);
        img.style.backgroundImage = `url("${pokemons.indexOf(nome.value)+1}.png")`;
        n = pokemons.indexOf(nome.value)
        numImg = pokemons.indexOf(nome.value)+1;
    }
}
function left(){
    if(n > 0){
        n-=1;
        numImg--;
        nomecampo.innerHTML = pokemons[n];
        numeroPok.innerHTML = ((pokemons.indexOf(pokemons[n]))+1);
        img.style.backgroundImage = `url("${numImg}.png")`;
        
    }    
}    

function right(){
    if(n <= 10){
        numImg++;
        n++; 
        nomecampo.innerHTML = pokemons[n];
        numeroPok.innerHTML = ((pokemons.indexOf(pokemons[n]))+1); 
        img.style.backgroundImage = `url("${numImg}.png")`;

    }   
}    