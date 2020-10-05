control = 1;

$("#bt1").click(() => {
    console.log("Yeah, you clicked me");
})

$("#bt2").click(() => {
    $("#bt1").text("Yeah, you clicked him");
})

$("#bt3").click(() => {
    /*console.log($("#input1").val());*/
    if(control === 1) {
    $("button").css("background-color", $("#input1").val());
    control = 0;
    }
})