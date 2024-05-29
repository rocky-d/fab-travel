let excursionsData = [{
    name: "Walking in Montmartre",
    code: "montmartre",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "55",
    pricechild: "30",
    duration: "3",
    description: "The Montmartre district, located on the hill of the same name, significantly differs from other neighborhoods of Paris in its history and atmosphere. In the distant past, there was a small village and a women's monastery here. When Montmartre became part of Paris, its residents remained true to themselves and preserved the rural way of life. Then this picturesque corner of the French capital was embraced by artists.",
    capacity: "10",
    destination: ["montmartre", "paris"],
    image: "assets/img/montmartre",
    visits: 0,
    longitude: 2.3,
    latitude: 48.9,
}, {
    name: "Lyon at First Glance",
    code: "lyon",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "50",
    pricechild: "25",
    duration: "4",
    description: 'Lyon will captivate you with its ancient basilicas and squares, views from Fourvière Hill and the banks of the Saône River, the art of living beautifully, and turning gastronomy into a religion. You will see the main and secret corners of the city and understand its motto — "Only Lyon".',
    capacity: "15",
    destination: "lyon",
    image: "assets/img/lyon",
    visits: 0,
    longitude: 4.8,
    latitude: 45.8,
}, {
    name: "Strasbourg: France with a German Accent",
    code: "strasbourg",
    category: "bus",
    categoryname: "bussing tour",
    priceadult: "30",
    pricechild: "10",
    duration: "2",
    description: "In 2 hours, you will be repeatedly amazed by the beauty of Strasbourg's architecture. You will see the lavish palaces built by the descendants of famous families. And how simple, yet practical, the homes of craftsmen were. I will take you on my favorite route, which covers the most beautiful sights, and share stories and secrets of staying here.",
    capacity: "15",
    destination: "strasbourg",
    image: "assets/img/strasbourg",
    visits: 0,
    longitude: 7.7,
    latitude: 48.5,
}, {
    name: "Through the Fairytale Streets of Colmar",
    code: "colmar",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "35",
    pricechild: "15",
    duration: "2",
    description: "In Colmar, it seems like you've stepped into a magical fairy tale or onto the perfect postcard. It's an alluring undiscovered Europe! During the walk, you will see the main attractions, learn about the intertwining of the past and present, the real and the imagined. And not only that, I will help you feel the uniqueness of the city and tell you about its life from the inside.",
    capacity: "10",
    destination: "colmar",
    image: "assets/img/colmar",
    visits: 0,
    longitude: 7.4,
    latitude: 48.1,
}, {
    name: "Truths and Fables about Marseille",
    code: "marseille",
    category: "bus",
    categoryname: "bussing tour",
    priceadult: "50",
    pricechild: "25",
    duration: "3",
    description: "Marseille is so diverse and unfathomable that the city's residents and guests create their own images of this place. On the tour, you will understand what is true, what is prejudice, and what is local legend. Feel the mystery of the city, which combines French, Italian, and Eastern traditions. And as a result, you will see Marseille in your own way through the stories of local residents.",
    capacity: "30",
    destination: "marseille",
    image: "assets/img/marseilles",
    visits: 0,
    longitude: 5.4,
    latitude: 43.3,
}, {
    name: "Montpellier — Discovering the Real South of France",
    code: "montpellier",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "40",
    pricechild: "20",
    duration: "2",
    description: "Walking through the lesser-known Montpellier, you will learn about its rich commercial, spiritual, and intellectual past. You will see the oldest Jewish baths, the country's first botanical garden, and the faculty where Nostradamus studied. You'll taste local delicacies and enhance your understanding of the charming South of France.",
    capacity: "5",
    destination: "montpellier",
    image: "assets/img/montpellier",
    visits: 0,
    longitude: 3.9,
    latitude: 43.6,
}, {
    name: "Versatile Versailles",
    code: "versailles",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "60",
    pricechild: "30",
    duration: "4",
    description: 'Versailles is not only the famous royal palace and picturesque gardens, but also streets of antique dealers, well-kept houses, elegant boutiques, cozy pastry shops, and bustling markets. I will help you uncover all facets of this amazing city and understand what it means to "breathe the air of Versailles".',
    capacity: "10",
    destination: ["versailles", "paris"],
    image: "assets/img/versailles",
    visits: 0,
    longitude: 2.1,
    latitude: 48.8,
}, {
    name: "Rouen — Medieval Gateway to Normandy",
    code: "rouen",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "70",
    pricechild: "40",
    duration: "2",
    description: 'In the multifaceted Rouen, everyone finds something of their own, "for the soul". And I will help you with that. You will not only hear many curious facts about fearless Vikings, brave Joan of Arc, and the secret symbolism of Gothic cathedrals, but also see the places loved by Claude Monet and Gustave Flaubert. And I will also recommend cozy establishments where you can try traditional Norman apple pie tarts and the freshest Normandy oysters.',
    capacity: "15",
    destination: "rouen",
    image: "assets/img/rouen",
    visits: 0,
    longitude: 1.1,
    latitude: 49.4,
}, {
    name: "Daily Stroll through Paris",
    code: "paris",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "30",
    pricechild: "15",
    duration: "2",
    description: "On our friendly walk, you will get acquainted with the unconventional history of Paris, immerse yourself in the romantic atmosphere of the city, and see it through the eyes of the locals. We will not only stroll through the landmarks that define Paris but also talk about life in the capital, the French mentality, and the most delicious spots in the city!",
    capacity: "15",
    destination: "paris",
    image: "assets/img/paris",
    visits: 0,
    longitude: 2.3,
    latitude: 48.9,
}, {
    name: "Nice: Love at First Sight",
    code: "nice",
    category: "foot",
    categoryname: "walking tour",
    priceadult: "40",
    pricechild: "20",
    duration: "3",
    description: 'Love for a city, like love in general, is a complex, multifaceted feeling. I will show you Nice as it is loved by locals and adored by visitors. You will see that prosperity reigns here, not just for the public, who have long chosen the French Riviera, but the richness of history and culture. I will share with you knowledge about the fate of Nice and the best urban "sketches" on the theme of love.',
    capacity: "5",
    destination: "nice",
    image: "assets/img/nice",
    visits: 0,
    longitude: 7.3,
    latitude: 43.7,
},];

function remove(n) {
    const code = n.getAttribute("data-code");
    initializeDB()
        .then((db) => {
            console.log(code);
            const transaction = db.transaction(["excursions"], "readwrite");
            const objectStore = transaction.objectStore("excursions");
            const request = objectStore.delete(code);

            request.onsuccess = (event) => {
                alert("remove successful");
                window.location.href = "filter.html";
            };

            request.onerror = (event) => {
                console.error("Error fetching user: ", event.target.error);
            };
        })
        .catch((error) => {
            console.error("Error opening database: ", error);
        });

    initializeDB();
}

async function initializeDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("excursionsDB", 1);

        request.onerror = function (event) {
            console.error("Database error: " + event.target.errorCode);
            reject(event.target.errorCode);
        };

        request.onsuccess = function (event) {
            console.log("Database opened successfully");
            const db = event.target.result;
            resolve(db);
        };

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            const objectStore = db.createObjectStore("excursions", {
                keyPath: "code",
            });

            objectStore.transaction.oncomplete = function (event) {
                const excursionObjectStore = db
                    .transaction("excursions", "readwrite")
                    .objectStore("excursions");
                excursionsData.forEach(function (excursion) {
                    excursionObjectStore.add(excursion);
                });
                console.log("Excursions added to database");
                resolve(db);
            };
        };
    });
}

async function getAllExcursions() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("excursionsDB", 1);

        request.onerror = function (event) {
            console.error("Database error: " + event.target.errorCode);
            reject(event.target.errorCode);
        };

        request.onsuccess = function (event) {
            const db = event.target.result;
            const transaction = db.transaction("excursions", "readonly");
            const objectStore = transaction.objectStore("excursions");
            const excursions = [];

            objectStore.openCursor().onsuccess = function (event) {
                const cursor = event.target.result;
                if (cursor) {
                    excursions.push(cursor.value);
                    cursor.continue();
                } else {
                    resolve(excursions.sort((a, b) => {
                        return b.visits - a.visits;
                    }));
                }
            };
        };
    });
}

// RENDER EXCURSIONS
function outputExcursions(excursions) {
    document.getElementById("excursions__container").innerHTML = excursions
        .map((n) => {
            if (n.Image) {
                return `
<div class="excursion__item">
    <div data-code="${n.code}" class="remove" onclick="remove(this)">remove</div>
    <div class="excursion__img">
        <picture>
            <source srcset="${n.Image}" type="image/webp"/>
            <img alt="${n.code}" class="excursion__thumb" src="${n.image}.png" srcset="${n.image}.png"/>
        </picture>
    </div>
    <div class="excursion__card">
        <div class="excursion__category">${n.categoryname.toUpperCase()}</div>
        <h3 class="excursion__title" id="${n.code}">${n.name}</h3>
        <h4 style="margin-bottom:20px;">longitude: ${n.longitude ? n.longitude + "°" : "none"}&nbsp;&nbsp;&nbsp;&nbsp;latitude: ${n.latitude ? n.latitude + "°" : "none"}</h4>
        <div class="excursion__info">
            <div class="excursion__info_price">
                <div>
                    <img alt="coins" src="assets/img/coins.svg"/>${n.priceadult}
                </div>
                <span>ADULT TICKET (EUR)</span>
            </div>
            <div class="excursion__info_price">
                <div>
                    <img alt="coins" src="assets/img/coins.svg"/>${n.pricechild}
                </div>
                <span>CHILD TICKET (EUR)</span>
            </div>
            <div class="excursion__info_price">
                <div>
                    <img alt="clock" src="assets/img/clock.svg"/>${n.duration}
                </div>
                <span>DURATION (HOUR)</span>
            </div>
            <div>
                <div>
                    ${n.visits} visit(s)
                </div>
                <span></span>
            </div>
        </div>
        <div class="excursion__description">
            ${n.description}
        </div>
       <div class="excursion__buttons">
            <a class="button" data-code="${n.code}" id="${n.code}_button" onClick="takeALook(this)">take a look</a>
        </div>
    </div>
</div>
`;
            } else {
                return `
<div class="excursion__item">
    <div class="excursion__img">
        <picture>
            <source srcset="${n.image}.webp" type="image/webp"/>
            <img alt="${n.code}" class="excursion__thumb" src="${n.image}.png" srcset="${n.image}.png"/>
        </picture>
    </div>
    <div class="excursion__card">
        <div class="excursion__category">${n.categoryname.toUpperCase()}</div>
        <h3 class="excursion__title" id="${n.code}">${n.name}</h3>
        <h4 style="margin-bottom:20px;">longitude: ${n.longitude ? n.longitude + "°" : "none"}&nbsp;&nbsp;&nbsp;&nbsp;latitude: ${n.latitude ? n.latitude + "°" : "none"}</h4>
        <div class="excursion__info">
            <div class="excursion__info_price">
                <div>
                    <img alt="coins" src="assets/img/coins.svg"/>${n.priceadult}
                </div>
                <span>ADULT TICKET (EUR)</span>
            </div>
            <div class="excursion__info_price">
                <div>
                    <img alt="coins" src="assets/img/coins.svg"/>${n.pricechild}
                </div>
                <span>CHILD TICKET (EUR)</span>
            </div>
            <div class="excursion__info_price">
                <div>
                    <img alt="clock" src="assets/img/clock.svg"/>${n.duration}
                </div>
                <span>DURATION (HOUR)</span>
            </div>
            <div>
                <div>
                    ${n.visits} visit(s)
                </div>
                <span></span>
            </div>
        </div>
        <div class="excursion__description">
            ${n.description}
        </div>
        <div class="excursion__buttons">
            <a class="button" data-code="${n.code}" id="${n.code}_button" onClick="takeALook(this)">take a look</a>
        </div>
    </div>
</div>
`;
            }
        })
        .join("");
}

function getCookieValue(name) {
    let result = document.cookie.match("(^|[^;]+)\\s*" + name + "\\s*=\\s*([^;]+)");
    return result ? result.pop() : "";
}

function takeALook(n) {
    const login = getCookieValue("loginStatus");
    if (login === "yes") {
        window.location.href = "excursion.html?code=" + n.getAttribute("data-code");
    } else {
        window.location.href = "login.html";
    }
}

initializeDB()
    .then((db) => {
        getAllExcursions()
            .then((excursions) => {
                outputExcursions(excursions);
            })
            .catch((error) => {
                console.error("Error while getting excursions: " + error);
            });
    })
    .catch((error) => {
        console.error("Error while initializing database: " + error);
    });

const filters = document.querySelector("#filters");
filters.addEventListener("change", filterExcursions);

// EXCURSIONS' FILTER CORE FUNCTION
function filterExcursions() {
    //* 1- Collecting input values and assigning them to the variables
    const type = [...filters.querySelectorAll("#type input:checked")].map((n) => n.value);
    let nbpers = Number(filters.querySelector("#nbpers").value);
    let longitude = Number(filters.querySelector("#longitude").value);
    let longitude1 = Number(filters.querySelector("#longitude1").value);
    let latitude = Number(filters.querySelector("#latitude").value);
    let latitude1 = Number(filters.querySelector("#latitude1").value);
    let costMin = Number(document.querySelector("#pricemin").value);
    let costMax = Number(document.querySelector("#pricemax").value);
    const dest = filters.querySelector("#dest").value;
    const duration = [...filters.querySelectorAll("#duration input:checked")].map((n) => n.value);

    console.log(longitude, longitude1, latitude, latitude1);

    initializeDB()
        .then((db) => {
            getAllExcursions()
                .then((excursions) => {
                    console.log(excursions);
                    //* 2- Excursions filtering
                    const filteredExcursions = excursions.filter((n) => (!type.length || type.includes(n.category)) && (!dest || n.destination.includes(dest)) && n.capacity >= nbpers && (!longitude || n.longitude >= longitude) && (!longitude1 || n.longitude <= longitude1) && (!latitude || n.latitude >= latitude) && (!latitude1 || n.latitude <= latitude1) && (!duration.length || duration.includes(n.duration)) && (!costMin || costMin <= n.priceadult) && (!costMax || costMax >= n.priceadult));

                    //* 3- Displaying the number of excursions found
                    document.getElementById("result").textContent = declOfNum(filteredExcursions.length, [`${filteredExcursions.length} excursion found`, `${filteredExcursions.length} excursions found`,]);

                    outputExcursions(filteredExcursions);
                })
                .catch((error) => {
                    console.error("Error while getting excursions: " + error);
                });
        })
        .catch((error) => {
            console.error("Error while initializing database: " + error);
        });
}

// changeLongitude
let latitude = document.querySelector("#latitude");

function changeLatitude(type) {
    if (type === "minus") {
        latitude.value == 0 ? (latitude.value = 0) : latitude.value--;
    }
    if (type === "plus") {
        latitude.value == 180 ? (latitude.value = 180) : latitude.value++;
    }
    filterExcursions();
}

// changeLongitude
let longitude = document.querySelector("#longitude");

function changeLongitude(type) {
    if (type === "minus") {
        longitude.value == 0 ? (longitude.value = 0) : longitude.value--;
    }
    if (type === "plus") {
        longitude.value == 180 ? (longitude.value = 180) : longitude.value++;
    }
    filterExcursions();
}

//SINGLE FILTERS FUNCTIONS:
//* 1- Number of participants*
let personsInp = document.querySelector("#nbpers");
const maxCapacity = Math.max(...excursionsData.map((exc) => exc.capacity));

// eslint-disable-next-line no-unused-vars
function changeQuantity(type) {
    if (type === "minus") {
        personsInp.value == 1 ? (personsInp.value = 1) : personsInp.value--;
    }
    if (type === "plus") {
        personsInp.value == maxCapacity ? (personsInp.value = maxCapacity) : personsInp.value++;
    }

    document.querySelector("#persons").textContent = declOfNum(personsInp.value, ["person", "people",]);

    filterExcursions();
}

//** Prohibiting decimal, negative, and numbers exceeding the max capacity in the participants nb field.*/
personsInp.addEventListener("change", function checkQuantity() {
    personsInp.value = Math.trunc(personsInp.value);
    if (personsInp.value < 1) personsInp.value = 1;
    if (personsInp.value > maxCapacity) personsInp.value = maxCapacity;
});

//* 2- Price range slider *
const highestPrice = Math.max(...excursionsData.map((exc) => exc.priceadult));
const lowestPrice = Math.min(...excursionsData.map((exc) => exc.priceadult));

document.querySelector("#rangemin").value = lowestPrice;
document.querySelector("#rangemax").value = highestPrice;

const rangeInputMin = document.querySelector("#rangemin");
const rangeInputMax = document.querySelector("#rangemax");
const priceInputMin = document.querySelector("#pricemin");
const priceInputMax = document.querySelector("#pricemax");
const minGap = 0;
const range = document.querySelector(".filter-slider-track");

const sliderMinValue = parseInt(rangeInputMin.min);
const sliderMaxValue = parseInt(rangeInputMax.max);

rangeInputMin.addEventListener("input", slideMin);
rangeInputMax.addEventListener("input", slideMax);
priceInputMin.addEventListener("change", setMinPrice);
priceInputMax.addEventListener("change", setMaxPrice);

function slideMin() {
    let gap = parseInt(rangeInputMax.value) - parseInt(rangeInputMin.value);
    if (gap <= minGap) {
        rangeInputMin.value = parseInt(rangeInputMax.value) - minGap;
    }
    priceInputMin.value = rangeInputMin.value;
    setArea();
}

function slideMax() {
    let gap = parseInt(rangeInputMax.value) - parseInt(rangeInputMin.value);
    if (gap <= minGap) {
        rangeInputMax.value = parseInt(rangeInputMin.value) + minGap;
    }
    priceInputMax.value = rangeInputMax.value;
    setArea();
}

function setArea() {
    range.style.left = (rangeInputMin.value / sliderMaxValue) * 100 + "%";
    range.style.right = 100 - (rangeInputMax.value / sliderMaxValue) * 100 + "%";
}

function setMinPrice() {
    let minPrice = parseInt(priceInputMin.value);
    if (minPrice < sliderMinValue) {
        priceInputMin.value = sliderMinValue;
    }
    rangeInputMin.value = priceInputMin.value;
    slideMin();
}

function setMaxPrice() {
    let maxPrice = parseInt(priceInputMax.value);
    if (maxPrice > sliderMaxValue) {
        priceInputMax.value = sliderMaxValue;
    }
    rangeInputMax.value = priceInputMax.value;
    slideMax();
}

slideMin();
slideMax();

// RESET FILTERS FUNCTION
document.querySelector(".sidebar__reset").addEventListener("click", () => {
    filters.querySelector("#nbpers").value = 1;
    filters.querySelector("#dest").value = "";
    filters.querySelector("#pricemin").value = "";
    filters.querySelector("#pricemax").value = "";
    filters.querySelector("#longitude").value = "";
    filters.querySelector("#longitude1").value = "";
    filters.querySelector("#latitude").value = "";
    filters.querySelector("#latitude1").value = "";

    let inputs = document.querySelectorAll("input");

    for (const input of inputs) {
        if (input.type == "checkbox" || input.type == "radio") input.checked = false;
    }

    filterExcursions();

    document.getElementById("result").textContent = "";
});

//SPOILER
const spoilers = document.querySelectorAll(".filter__item_subtitle");

spoilers.forEach((spoiler) => {
    spoiler.addEventListener("click", function addVisible() {
        spoiler.parentElement.classList.toggle("_visible");
        spoiler.lastElementChild.classList.toggle("_close");
    });
});

//PLURAL FORM OF NOUNS
function declOfNum(n, text_arr) {
    if (n == 1) {
        return text_arr[0];
    }
    return text_arr[1];
}

//BURGER-MENU
const burgerMenu = document.querySelector(".menu__burger");
const bodyMenu = document.querySelector(".menu__body");
const menuLinks = document.querySelectorAll(".menu__link");

if (burgerMenu) {
    burgerMenu.addEventListener("click", function () {
        document.body.classList.toggle("_lock");
        burgerMenu.classList.toggle("_active");
        bodyMenu.classList.toggle("_active");
    });
}

if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });
}

function onMenuLinkClick() {
    if (burgerMenu.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        burgerMenu.classList.remove("_active");
        bodyMenu.classList.remove("_active");
    }
}

// 监听所有excursion按钮的点击事件
document.addEventListener("click", function (event) {
    // 确保点击的是excursion按钮
    if (event.target && event.target.matches("a.button")) {
        // 获取excursion的code
        const excursionCode = event.target.id.replace("_button", "");
        // 更新visits值
        updateExcursionVisits(excursionCode)
            .then(() => {
                // 更新页面
                getAllExcursions()
                    .then((excursions) => {
                        outputExcursions(excursions);
                    })
                    .catch((error) => {
                        console.error("Error while getting excursions: " + error);
                    });
            })
            .catch((error) => {
                console.error("Error while updating excursion visits: " + error);
            });
    }
});

// 更新excursion的visits值
async function updateExcursionVisits(excursionCode) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("excursionsDB", 1);

        request.onerror = function (event) {
            console.error("Database error: " + event.target.errorCode);
            reject(event.target.errorCode);
        };

        request.onsuccess = function (event) {
            const db = event.target.result;
            const transaction = db.transaction("excursions", "readwrite");
            const objectStore = transaction.objectStore("excursions");

            // 获取对应的excursion
            const excursionRequest = objectStore.get(excursionCode);

            excursionRequest.onsuccess = function (event) {
                // 更新visits值
                const excursion = excursionRequest.result;
                excursion.visits++;
                const updateRequest = objectStore.put(excursion);

                updateRequest.onsuccess = function (event) {
                    console.log(`Visits for excursion ${excursionCode} updated successfully`);
                    resolve();
                };

                updateRequest.onerror = function (event) {
                    console.error("Error updating excursion visits: " + event.target.errorCode);
                    reject(event.target.errorCode);
                };
            };

            excursionRequest.onerror = function (event) {
                console.error("Error retrieving excursion: " + event.target.errorCode);
                reject(event.target.errorCode);
            };
        };
    });
}

document.getElementById("download").addEventListener("click", function () {
    const element = document.body;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1并补0
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const opt = {
        margin: 0,
        filename: `excursions_${year}-${month}-${day}-${hours}-${minutes}-${seconds}.pdf`,
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 2, logging: true, letterRendering: true, useCORS: true},
        jsPDF: {unit: 'in', format: [14, 50.45]}
    };
    html2pdf().from(element).set(opt).save();
});
