function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("userDB", 1);

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
            if (!db.objectStoreNames.contains("users")) {
                const objectStore = db.createObjectStore("users", {
                    keyPath: "username",
                });
                objectStore.createIndex("username", "username", {unique: true});
                objectStore.createIndex("password", "password", {unique: false});
            }
        };
    });
}

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function signup() {
    const username = document.getElementById("signup-username").value;
    const password = await hashPassword(document.getElementById("signup-password").value);

    openDatabase()
        .then((db) => {
            const transaction = db.transaction(["users"], "readwrite");
            const objectStore = transaction.objectStore("users");
            const request = objectStore.add({username, password});

            request.onsuccess = () => {
                console.log("User signed up successfully");
                alert("User signed up successfully");
                window.location.href = "login.html";
            };

            request.onerror = (event) => {
                if (event.target.error.name === "ConstraintError") {
                    alert("Username already exists");
                    console.error("Username already exists");
                } else {
                    console.error("Error signing up user: ", event.target.error);
                }
            };
        })
        .catch((error) => {
            console.error("Error opening database: ", error);
        });
}

async function login() {
    const username = document.getElementById("login-username").value;
    const password = await hashPassword(document.getElementById("login-password").value);

    openDatabase()
        .then((db) => {
            const transaction = db.transaction(["users"], "readonly");
            const objectStore = transaction.objectStore("users");
            const request = objectStore.get(username);

            request.onsuccess = (event) => {
                const user = event.target.result;
                if (user && user.password === password) {
                    alert("Login successful");
                    console.log("Login successful");
                    window.location.href = "filter.html";
                    let date = new Date();
                    date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
                    document.cookie = "loginStatus=yes; expires=" + date.toUTCString();
                } else {
                    alert("Invalid username or password");
                    console.error("Invalid username or password");
                }
            };

            request.onerror = (event) => {
                console.error("Error fetching user: ", event.target.error);
            };
        })
        .catch((error) => {
            console.error("Error opening database: ", error);
        });
}
