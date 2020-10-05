counter = 0;

$("#bt1").click(() => {
    counter += 1;
    $("#counter").text(counter)
})

$("#bt2").click(() => {
    counter -= 1;
    $("#counter").text(counter)
})