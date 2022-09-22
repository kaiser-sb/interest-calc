var checkBool = true;
//Print slider value
function interestVal()
{
  var val = document.getElementById("rate");
  var output = document.getElementById("output");
  output.innerHTML = val.value + "%";
}
//Refresh output paragraph on new input
function refresh()
{
  var result = document.getElementById("result");
  result.innerHTML = "";
}
//Check and validate input
function validate()
{
  var amt = document.getElementById("principal");
  var year = document.getElementById("year");
  
  if (amt.value <= 0)
    {
      alert("Enter a positive number!");
      amt.focus();
      checkBool = false;
    }
  if (year.value == "")
    {
      alert("Please enter a valid year!");
      year.focus();
      checkBool = false;
    }
  if (amt.value > 0 && year.value != "")
    {
      checkBool = true;
    }
}

//Calculate the interest value after validation and print
function computeInt()
{
  var amt = document.getElementById("principal").value;
  var year = document.getElementById("year").value;
  var rate = document.getElementById("rate").value;
  var result = document.getElementById("result");
  
  validate();
  
  if(checkBool == true)
    {    
      var interest = (amt * rate * year)/100;
      var x = parseInt(year) + 2022;
      result.innerHTML = "If you deposit <mark>" + amt + "</mark><br>at an interest rate of <mark>" + rate + "%,</mark>" + "<br>You'll receive an amount of <mark>" + interest + ",</mark><br>in the year <mark>" + x + "</mark>";
    }
}
