var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + (katzDeliLine.indexOf(name)+1) + " in line."
}
function nowServing(line){
  if (line.length === 0) {
return "There is nobody waiting to be served!"
  } else {
    var serving = line.shift()
    return `Currently serving ` + serving + `.`
  }
}
function currentLine(line){
  var customers = [];
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < line.length; i++) {
      customers.push += (i + 1) + ". " + line[i];
    }
    return "The line is currently: " + customers
  }
}
/*function currentLine(x) {
  var line = []
    if (x.length === 0) {
      return "The line is currently empty."
    } else {
      for(var i = 0; i < x.length; i++) {
        var line += (i + 1) + ". " + x[i] + ", "
      }
      return "The line is currently: " + line
    }
}*/
function currentLine(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}
