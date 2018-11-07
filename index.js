function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
   return "There is nobody waiting to be served!"; 
  }
  else {
    var nextup = katzDeliLine[0];
        katzDeliLine.shift();
      return `Currently serving ${katzDeliLine.shift()}.`;
  }
}

function currentLine(kdl) {
  var customerstr = "";
  if(!kdl.length) {
    return "The line is currently empty.";
  }
  else {
    for(var i = 0; i<kdl.length; i++) {
      var nom = kdl[i];
      var ord = i + 1;
      if (i === kdl.length - 1) {
        customerstr += (`${ord}. ${nom}`);
      }
      else {
        customerstr += (`${ord}. ${nom}, `);
      }
    }
  }
  return "The line is currently: " + customerstr;
}