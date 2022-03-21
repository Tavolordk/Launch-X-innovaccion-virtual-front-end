let screenWhite = document.querySelector('.screen-white');
let screenSecondaryLeft = document.querySelector('.info-final .left');
let screenSecondaryRight = document.querySelector('.info-final .right');
let infoMain = document.querySelector('.info-main');
let id = Math.random()*898;
let idAleatorio = parseInt(id);
const url = `https://pokeapi.co/api/v2/pokemon/${idAleatorio}`;

window.addEventListener("load",mostrarPokemon);

function mostrarPokemon(){
    let hola ="fdsf";
    console.log(hola.toUpperCase());
    fetch(url).then(res=>res.json()).then(data=>{console.log(data);
        console.log(`imagen: ${data.sprites.front_default}`);
        const html=`<img src="${data.sprites.front_default}" alt="${data.name}"
        class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 w-100 h-75 p-0">
        <p class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center p-0"><b>#${data.id} ${data.name.toUpperCase()}</b></p>`;
        screenWhite.innerHTML=html;

        const htmlHeight=`<p class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center p-0 text-warning"><b>ALTURA ${data.height} M</b></p>`;
        screenSecondaryLeft.innerHTML = htmlHeight;

        const htmlWeight=`<p class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center p-0 text-warning"><b>PESO ${data.weight} KG</b></p>`;
        screenSecondaryRight.innerHTML = htmlWeight;
        
        let main =[];
        let mainUNO="";
        let mainDOS="";

        for(let i=0;i<data.types.length;i++){
            const htmlMain = `<small class="letra col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center text-warning"><b>${data.types[i].type.name.toUpperCase()}</b></small>`;
            mainUNO=htmlMain;
            main.push(mainUNO);
        }

        for(let i=0;i<data.stats.length;i++){
            const htmlMain = `<small class="letra col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center text-warning"><b>${data.stats[i].stat.name.toUpperCase()} ${data.stats[i].base_stat}</b></small>`;
            mainDOS=htmlMain;
            main.push(mainDOS);
        }
        console.log(main)
        infoMain.innerHTML =  main;

});
}