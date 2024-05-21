var btn = document.getElementById("add-btn");
btn.onclick = function () {
    var obj = {};
    obj.name = document.getElementById("Name").value;
    obj.code = document.getElementById("Code").value;
    obj.category = document.getElementById("Category").value;
    obj.priceadult = document.getElementById("Priceadult").value;
    obj.pricechild = document.getElementById("Pricechild").value;
    obj.duration = document.getElementById("Duration").value;
    obj.description = document.getElementById("Description").value;
    obj.longitude = document.getElementById("Longitude").value;
    obj.latitude = document.getElementById("Latitude").value;
    obj.capacity = document.getElementById("Capacity").value;
    obj.Image = document.getElementById("Image").files[0];

    obj.visits = 0;
    obj.destination = obj.code;

    if (obj.category == "bus") {
        obj.categoryname = "bussing tour";
    } else {
        obj.categoryname = "walking tour";
    }
    //   addPlaceToIndexedDB(obj);
    addExcursion(obj);
};

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
                console.log(1);
                const objectStore = db.createObjectStore("excursions", {
                    keyPath: "id", autoIncrement: true,
                });
            } else {
                console.log(2);
            }
        };
    });
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

async function addExcursion(obj) {
    console.log(obj.Image);
    if (obj.Image) {
        try {
            obj.Image = await getBase64(obj.Image);
            openDatabase()
                .then((db) => {
                    const transaction = db.transaction(["excursions"], "readwrite");
                    const objectStore = transaction.objectStore("excursions");
                    const request = objectStore.add(obj);

                    request.onsuccess = () => {
                        console.log("Excursion added successfully");
                        window.location.href = "filter.html";
                    };

                    request.onerror = (event) => {
                        console.error("Error adding excursion: ", event.target.error);
                    };
                })
                .catch((error) => {
                    console.error("Error opening database: ", error);
                });
        } catch (error) {
            console.error("Error converting image to Base64: ", error);
        }
    } else {
        console.error("No image file selected");
    }
}
