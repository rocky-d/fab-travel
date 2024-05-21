function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("excursionsDB", 1);

        request.onerror = (event) => {
            console.error("Database error: ", event.target.error);
            reject(event.target.error);
        };

        request.onsuccess = (event) => {
            console.log("Database opened successfully");
            resolve(event.target.result);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("excursions")) {
                const objectStore = db.createObjectStore("excursions", {
                    keyPath: "code",
                });
            }
        };
    });
}

openDatabase()
    .then((db) => {
        var code = location.search.substring(location.search.lastIndexOf("=") + 1, location.search.length);
        const transaction = db.transaction(["excursions"], "readonly");
        const objectStore = transaction.objectStore("excursions");
        const request = objectStore.get(code);

        request.onsuccess = (event) => {
            const data = event.target.result;
            console.log(data);
            var arr = [];
            arr.push(data);
            console.log(arr);
            outputExcursions(arr);
        };

        request.onerror = (event) => {
            console.error("Error fetching user: ", event.target.error);
        };
    })
    .catch((error) => {
        console.error("Error opening database: ", error);
    });

function outputExcursions(excursions) {
    document.getElementById("excursions__container").innerHTML = excursions
        .map((n) => {
            if (n.Image) {
                return `
<div class="excursion__item">
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
    </div>
</div>
`;
            }
        })
        .join("");
}
