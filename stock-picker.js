function stockPicker(arr) {
  var profit = 0;
  var buy = 0;
  var sell = 0;
  var min = 0;

  for(var i = 0; i < arr.length; i++) {
    if(arr[i] < arr[min]) {
      min = i;
    } else if(arr[i] - arr[min] > profit) {
      buy = min;
      sell = i;
      profit = arr[i] - arr[min];
    }
  }

  if(profit === 0)
    return -1;

  return  "Buy at: $" + arr[buy] + "\n" +
          "Sell at: $" + arr[sell] + "\n" +
          "For a profit of $" + profit;
}

console.log(stockPicker([45, 24, 35, 31, 40, 38, 11]));
//console.log(stockPicker([10, 9, 8, 7, 6, 5, 4]));