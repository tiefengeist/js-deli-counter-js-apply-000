var katzDeliLine = [];
var i = 0;
function takeANumber(katzDeliLine) {
  katzDeliLine.push(i+1);
  i++;
  return `Welcome. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
   return "There is nobody waiting to be served!"; 
  }
  else {
      return `Currently serving number ${katzDeliLine.length}.`;
  }
}

function currentLine(kdl) {
  var custr = "";
  if(!kdl.length) {
    return "The line is currently empty.";
  }
  else {
    for(var i = 0; i<kdl.length; i++) {
      var nom = kdl[i];
      var ord = i + 1;
      if (i === kdl.length - 1) {
        custr += (`${ord}. ${nom}`);
      }
      else {
        custr += (`${ord}. ${nom}, `);
      }
    }
  }
  return "The line is currently: " + custr;
}