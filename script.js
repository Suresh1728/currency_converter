function currency() {
    // Get input values
    var inputAmount = document.getElementById("inputAmount").value;
    var fromCurrencySelect = document.getElementsByTagName("select")[0];
    var fromCurrencySelectedOption = fromCurrencySelect.options[fromCurrencySelect.selectedIndex];

    // Get the ID and value of the selected option for the "fromCurrency" select element
    var fromCurrencySelectedId = fromCurrencySelectedOption.id;
    var fromCurrencySelectedValue = fromCurrencySelectedOption.value;

    // Get the second select element and its selected option
    var toCurrencySelect = document.getElementsByTagName("select")[1];
    var toCurrencySelectedOption = toCurrencySelect.options[toCurrencySelect.selectedIndex];

    // Get the ID and value of the selected option for the "toCurrency" select element
    var toCurrencySelectedId = toCurrencySelectedOption.id;
    var toCurrencySelectedValue = toCurrencySelectedOption.value;

    if(fromCurrencySelectedValue=="rupee" && toCurrencySelectedValue=="dollar")
    {
        let outputAmount = (inputAmount)/(82.04); // Assuming 1 dollar = 82.04 rupees
        document.getElementById("outputAmount").value = outputAmount;
    }
    else if(fromCurrencySelectedValue=="dollar" && toCurrencySelectedValue=="rupee")
    {
        let outputAmount = (inputAmount*82.04); // Assuming 1 dollar = 82.04 rupees
        document.getElementById("outputAmount").value = outputAmount;

    }
    else {
    alert("invalid input")
    }
   
}

