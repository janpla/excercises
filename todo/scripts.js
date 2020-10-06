$("#addBt").click(() => {
    $("#list").append("<li>" + $("#input").val() + "</li>");
    $("#input").val("");
})