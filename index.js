let symbol = "X";
let count = 0;

//Function to clear all boxes.
function clearBoxes() {
  for (let i = 1; i <= 9; i++) {
    $(`#td${i}`).text("");
  }
  symbol = "X";
  $("#player").text("Player 1");
}

//Winner Logic
function winner(symbol) {
  if (
    ($("#td1").text() == symbol &&
      $("#td2").text() == symbol &&
      $("#td3").text() == symbol) ||
    ($("#td4").text() == symbol &&
      $("#td5").text() == symbol &&
      $("#td6").text() == symbol) ||
    ($("#td7").text() == symbol &&
      $("#td8").text() == symbol &&
      $("#td9").text() == symbol) ||
    ($("#td1").text() == symbol &&
      $("#td4").text() == symbol &&
      $("#td7").text() == symbol) ||
    ($("#td2").text() == symbol &&
      $("#td5").text() == symbol &&
      $("#td8").text() == symbol) ||
    ($("#td3").text() == symbol &&
      $("#td6").text() == symbol &&
      $("#td9").text() == symbol) ||
    ($("#td1").text() == symbol &&
      $("#td5").text() == symbol &&
      $("#td9").text() == symbol) ||
    ($("#td3").text() == symbol &&
      $("#td5").text() == symbol &&
      $("#td7").text() == symbol)
  ) {
    alert($("#player").text() + " Wins!!");
    clearBoxes();
    return true;
  }
  if (count == 9) {
    alert("Game is tied!!");
    clearBoxes();
    count = 0;
    return true;
  }
}

//onclick event listener for each box
function boxClicked(id) {
  if ($(id).text() == "") {
    //checks if the box is empty or already having any value.
    $(id).text(symbol);
    count++;
    let status = winner(symbol); //assigning winner function's return value to status variable
    if (!status) {
      // if its not true, go inside and toggle.
      if (symbol == "O") {
        symbol = "X"; //Toggling the symbol
        $("#player").text("Player 1"); //Toggling between players
      } else {
        symbol = "O"; //Toggling the symbol
        $("#player").text("Player 2"); //Toggling between players
      }
    }
  }
}
