//Business Logic
function Ticket(movie, time, quantity) {
  this.movieName = movie;
  this.timeSlot = time;
  this.quantityNum = quantity;
}

Ticket.prototype.info = function() {
  return this.quantityNum + " tickets for " + this.movieName + " at " + this.timeSlot;
}


//User Interface Logic
$(document).ready(function() {
  $("form#step2").submit(function(event) {
    event.preventDefault();

    var movieName = $("#movie option:selected").text();
    var timeSlot = $("#time option:selected").text();

    //console.log("movie name: " + movieName);
    //console.log("time slot: " + timeSlot);

    var movieCost = parseInt($("#movie option:selected").val());
    var timeCost = parseInt($("#time option:selected").val());
    var ageCost = parseInt($("input[name=age]:checked").val());
    var ticketQty = parseInt($("#qty").val());

    var totalCost = (movieCost + timeCost + ageCost)*ticketQty;

    var newTicket = new Ticket(movieName, timeSlot, ticketQty);

    console.log(newTicket.info());

    //console.log("movie " + movieCost);
    //console.log("time " + timeCost);
    //console.log("age " + ageCost);
    //console.log("qty " + ticketQty);
    //console.log("total " + totalCost);

    $("h2#total").text(newTicket.info() + " for " + "$" + totalCost + ".00");

  });
});
