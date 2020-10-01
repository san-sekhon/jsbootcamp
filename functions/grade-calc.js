let gradeCalc = function(studentScore, total) {
  let gradePercent = studentScore / total * 100;
  if (gradePercent >= 90 && gradePercent <= 100) {
    return `You got a A (${gradePercent})`;
  } else if (gradePercent >= 80 && gradePercent <= 89) {
    return `You got a B (${gradePercent})`;
  } else if (gradePercent >= 70 && gradePercent <= 79) {
    return `You got a C (${gradePercent})`;
  } else if (gradePercent >= 60 && gradePercent <= 69) {
    return `You got a D (${gradePercent})`;
  } else {
    return `You failed the test!`;
  }
}

console.log(gradeCalc(19,20));
