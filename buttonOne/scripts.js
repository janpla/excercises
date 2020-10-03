$("#bt1").click(() => {
    console.log("Yeah, you clicked me")
})

$("#bt2").click(() => {
    $("#bt1").text("Yeah, you clicked him")
})

$("#bt3").click(() => {
    $("button").css("background-color", "pink")
})