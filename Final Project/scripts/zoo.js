
url = "https://zoo-animal-api.herokuapp.com/"

animalList = []

async function getAnimal(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        animalList.push(data);
    }
};

const content = document.getElementsByClassName("content");

const displayAnimals = animals => {
    animals.forEach(animal => {
        let article = document.createElement("article");
        // templesElement.appendChild(article);

        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        article.appendChild(h3);

        // let img = document.createElement("img");
        // img.src = temple.imageUrl;
        // img.alt = temple.location;
        // article.appendChild(img);

        // templesElement.appendChild(article);
    });
};