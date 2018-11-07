function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function tellWhere(katzDeliLine, name) {
  for(i = 0; i<katzDeliLine.length; i++) {
    if (katzDeliLine[i] === name) {
      return `You are number ${i+1} in line.`;
    }
    if (!katzDeliLine.includes(name)) {
      return 'You don\'t seem to have taken a number.';
    }
  }
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
   return "There is nobody waiting to be served!"; 
  }
  else {
      return `Currently serving ${katzDeliLine.shift()}.`;
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

takeANumber(katzDeliLine, Grace);