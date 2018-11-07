var katzDeliLine = [];
var i = 0;

function tellMeWhere(katzDeliLine, name) {
  for(var i = 0; i<kdl.length; i++) {
    kdl = kdl.toUpperCase
name = name.toUpperCase
return `You are number ${i+1} in line.`
}
if(!kdl.includes(name)) {
  return `You aren't in line`
}
  }
  
function takeANumber(katzDeliLine) {
  katzDeliLine.push(i+1);
  i++;
  return `Welcome. You are number ${i} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
   return "There is nobody waiting to be served!"; 
  }
  else {
      return `Currently serving number ${katzDeliLine.shift()}.`;
  }
}

function currentLine(kdl) {
  var custr = [];
  if(!kdl.length) {
    return "The line is currently empty.";
  }
  else {
    for(var i = 0; i<kdl.length; i++) {
     custr.push(`${i+1}. ${kdl[i]}`)
    }
  }
  return "The line is currently: " + custr.join(', ');
}