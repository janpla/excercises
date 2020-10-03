let color = "purple";
let number = 101;
let word = "cool";

if (color === "purple") {
    $(".red").css("background-color", "purple");
}

if (number > 100) {
    $(".yel").text("whoah, that's a big number.")
} else {
    $(".yel").text("just a regular number, please.")
}

if (word === "cool") {
    $(".gre").text("Power of DOM")
}
