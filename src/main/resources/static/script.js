const themeButton =
    document.getElementById("themeButton");

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains("light")
        ) {

            themeButton.textContent = "☾";

        } else {

            themeButton.textContent = "☀";

        }

    }
);


async function connectJava() {

    const status =
        document.getElementById("status");

    status.textContent =
        "● Connecting to Java...";

    try {

        const response =
            await fetch("/api/status");

        const result =
            await response.text();

        status.textContent =
            "● " + result;

    } catch (error) {

        status.textContent =
            "● Java server is offline";

    }
}


function explore() {

    document
        .getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });
}


function testWebsite() {

    const message =
        document.getElementById("message");

    message.textContent =
        "✓ JavaScript is working correctly!";

}


console.log(
    "JavaHub loaded successfully."
);
