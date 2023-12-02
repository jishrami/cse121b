/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples")

const templeList = []

/* async displayTemples Function */
const displayTemples = temples => {
    temples.forEach(temple => {
        let article = document.createElement("article");
        templesElement.appendChild(article);

        let h3 = document.createElement("h3");
        h3.innerHTML = temple.templeName;
        article.appendChild(h3);

        let img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(img);

        templesElement.appendChild(article);
    });
};


/* async getTemples Function using fetch()*/
const getTemples = async () => {

    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        displayTemples(data);
        templeList.push(...data);
    }

};


/* reset Function */

function reset() {
    templesElement.innerHTML = '';
}


/* sortBy Function */
function sortBy(temples){
    reset();
    const filter = document.getElementById("sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break; 
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList) });

getTemples();
console.log(templeList);