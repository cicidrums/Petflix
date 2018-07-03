//Business Logic





//User Interface Logic
$(document).ready(function() {
  $("form#info").submit(function(event) {
    event.preventDefault();

    var nemo = parseInt($("#nemo option:selected").val());
    var benji = parseInt($("#benji option:selected").val());
    var cats = parseInt($("#cats option:selected").val());

    var movieCost = nemo + benji + cats;
    var ageCost = parseInt($("input[name=age]:checked").val());
    var ticketQty = parseInt($("#qty").val());

    var totalCost = (movieCost + ageCost)*ticketQty;

    console.log(movieCost);
    console.log(ageCost);
    console.log(ticketQty);
    console.log(totalCost);

    $("h2#total").text("$"+totalCost+".00");

  });
});
