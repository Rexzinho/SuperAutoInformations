var teste = 0;

document.addEventListener("DOMContentLoaded", function () {
     
var url = "https://saptest.fly.dev/db/pets?pack=Turtle&lvl=1&effect_trigger=Faint";
const petContainer = document.querySelector("#pet-container");
const loadingElement = document.querySelector("#loading");

async function  trocarPets(){

    if (window.location.href.includes('weekly.html')) 
    {
        url = "https://saptest.fly.dev/db/pets?pack=Weekly&lvl=1";
        teste +=1;
        console.log(teste);
    }
    else if (window.location.href.includes('puppy.html')) 
    {
        url = "https://saptest.fly.dev/db/pets?pack=Puppy&lvl=1";
        console.log(url);
    } 
    else if (window.location.href.includes('star.html')) 
    {
        url = "https://saptest.fly.dev/db/pets?pack=Star&lvl=1";
        console.log(url);
    } 
    else  if (window.location.href.includes('turtle.html')) 
    {
        url = "https://saptest.fly.dev/db/pets?pack=Turtle&lvl=1";
        console.log(url);
    }
}


async function getAllPets() {
    trocarPets();
    const response = await fetch(url);
    
    console.log(response);

    const data = await response.json();

    console.log(data);

    loadingElement.classList.add("hide");

    data.map((pets) => {

        const div = document.createElement("div")
        const div2 = document.createElement("div")
        const div3 = document.createElement("div")
        const div4 = document.createElement("div")
        const div5 = document.createElement("div")
        const div6 = document.createElement("div")
        div.classList.add("petlegal");
        div2.classList.add("petlegal2");
        div3.classList.add("petlegal3");
        div4.classList.add("petlegal4");
        div5.classList.add("petlegal5");
        div6.classList.add("petlegal6");
        const tier = document.createElement("h3");
        const trigger = document.createElement("h3");
        const name = document.createElement("h2");
        const health = document.createElement("h3");
        const attack = document.createElement("h3");
        const imagem = document.createElement("img");
        const description = document.createElement("h3");
        imagem.classList.add("PetImagem");
        name.innerText = (`${pets.name}`);
        // health.innerText = (`${pets.health == "1" ? "❤️" : pets.health == "2" ? "❤️❤️" : "❤️❤️❤️"}`);
        health.innerText = (`Health: ${pets.health}`);
        // health.style.backgroundImage ='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/768px-Heart_coraz%C3%B3n.svg.png';
        attack.innerText = (`Attack: ${pets.attack}`);
        imagem.src = pets.img_url;
        description.classList.add("description");
        description.innerText = (`Effect: ${pets.effect}`);
        tier.innerText = (`Tier: ${pets.tier}`)
        trigger.innerText = (`Trigger: ${pets.effect_trigger}`)

        if (name.innerText === '[object Object]') 
        {
            name.innerText = (`Pet`);
        }
        else{}
        if (pets.img_url == "")
        {
            imagem.src = 'photos/OldTurtleGray.png'
        }
        else{}

        div6.appendChild(tier)
        div6.appendChild(trigger)
        div4.appendChild(div6)
        div3.appendChild(name)
        div3.appendChild(health)
        div3.appendChild(attack)
        div.appendChild(div3)
        div2.appendChild(imagem)
        div.appendChild(div2)
        div5.appendChild(description)
        div4.appendChild(div)
        div4.appendChild(div5)
        petContainer.appendChild(div4);
    });
}

getAllPets();

});
