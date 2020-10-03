let list1 = ["Xavier", "Mango", "JBL", "Dublin", "Janči"];
let text;

list1.forEach((name) => {
    if (name === "Janči") {
        text = "<li><strong>" + name + "</strong></li>";
    } else {
        text = "<li>" + name + "</li>";
    }
    $("ul").append(text);
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$("body").append("<h2>" + additionalBlock.title + "</h2><p>" + additionalBlock.text + "</p>")