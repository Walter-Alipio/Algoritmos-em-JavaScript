// 73;
// 67;
// 38;
// 33;

const grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  const roundGrade = grades.map((grade) => {
    if (grade < 38) {
      return grade;
    }

    let count = 0;
    let gradeValor = grade;

    while (gradeValor % 5 !== 0) {
      count++;
      gradeValor++;
    }

    if (count >= 3) {
      return grade;
    }
    return gradeValor;
  });

  return console.log(roundGrade);
}

gradingStudents(grades);

// 75;
// 67;
// 40;
// 33;
