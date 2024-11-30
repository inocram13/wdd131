document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector(".navigation");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        hamburger.textContent = navMenu.classList.contains("show") ? "X" : "☰";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".navigation a");
    const resGrid = document.querySelector(".res-grid");

    const temples = [
        {
            templeName: "Manila Philippines",
            location: "Manila, Philippines",
            dedicated: "1982, August, 25",
            area: 26683,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
        },
        {
            templeName: "Cebu City Philippines",
            location: "Cebu City, Philippines",
            dedicated: "2010, June, 13",
            area: 29556,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
        },
        {
            templeName: "Urdaneta Philippines",
            location: "Urdaneta, Philippines",
            dedicated: "2024, April, 28",
            area: 32604,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874-main.jpg"
        },
        {
            templeName: "St.George Utah",
            location: "St. George, Utah, United States",
            dedicated: "1877, April, 6-8",
            area: 143969,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-40435-main.jpg"
        },
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 27-29",
            area: 53997,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
        },
        {
            templeName: "Sapporo Japan",
            location: "Sapporo, Japan",
            dedicated: "2016, August, 21",
            area:  48480,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
        },
        {
            templeName: "Kyiv Ukraine",
            location: "Kyiv, Ukraine",
            dedicated: "2010, August, 29",
            area: 22184,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2010, June, 13",
            area:  41010,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
        },
        {
            templeName: "Paris France",
            location: "Paris , France",
            dedicated: "2017, May, 21",
            area: 29556,
            imageURL:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
        },
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageURL:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        }
    ];

    function createTempleCard(temple) {
        let card = document.createElement("section");
        card.classList.add("temple-card");

        let name = document.createElement("h3");
        name.textContent = temple.templeName;

        let location = document.createElement("p");
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

        let dedication = document.createElement("p");
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`;

        let area = document.createElement("p");
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq. ft.`;

        let img = document.createElement("img");
        img.setAttribute("src", temple.imageURL);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        resGrid.appendChild(card);
    }

    function filterAndDisplayTemples(filter) {
        resGrid.innerHTML = ""; // Clear previous content

        let filteredTemples;
        switch (filter) {
            case "Old":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
                break;
            case "New":
                filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
                break;
            case "Large":
                filteredTemples = temples.filter(t => t.area > 90000);
                break;
            case "Small":
                filteredTemples = temples.filter(t => t.area < 10000);
                break;
            default:
                filteredTemples = temples; // Home or default
        }

        filteredTemples.forEach(createTempleCard);
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.textContent.trim(); // Get the clicked filter name
            filterAndDisplayTemples(filter);
        });
    });

    // Initial load of all temples (Home view)
    filterAndDisplayTemples("Home");
});