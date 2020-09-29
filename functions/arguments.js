let getTip = function(total, tipPercent = 0.2) {
   return total * tipPercent;
}
 let tip = getTip(100, 0.1);
 console.log(tip);