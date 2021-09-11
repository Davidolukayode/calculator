// Business Logic Starts:
function add(num1, num2) {
  let result = num1 + num2;
  return result;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

// User Interface Logic starts:
$(document).ready(function () {
  $("#firstForm").submit(function (event) {
    event.preventDefault();
    let final = "";
    let number1 = $("#number1").val();
    let number2 = $("#number2").val();

    let no1 = Number(number1);
    let no2 = Number(number2);
    let finish = final += add(no1, no2);

    $("#answer").html(finish);
  });

  $("#secondForm").submit(function (event) {
    event.preventDefault();
    let final = "";
    let number1 = $("#numbr1").val();
    let number2 = $("#numbr2").val();

    let no1 = Number(number1);
    let no2 = Number(number2);
    let finish = final += subtract(no1, no2);

    $("#answer").html(finish);
  });
  $("#thirdForm").submit(function (event) {
    event.preventDefault();
    let final = "";
    let number1 = $("#numb1").val();
    let number2 = $("#numb2").val();

    let no1 = Number(number1);
    let no2 = Number(number2);
    let finish = final += multiply(no1, no2);

    $("#answer").html(finish);
  });

  $("#firthForm").submit(function (event) {
    event.preventDefault();
    let final = "";
    let number1 = $("#num1").val();
    let number2 = $("#num2").val();

    let no1 = Number(number1);
    let no2 = Number(number2);
    let finish = final += divide(no1, no2);

    $("#answer").html(finish);
  });

});
