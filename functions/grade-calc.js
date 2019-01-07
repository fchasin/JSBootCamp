// student score, total possible score

const gradeCalc = (student, possible) => {
    const percent = student/possible *100;
    let grade;
    if (percent >= 90) {
        grade = "A"
    } else if (percent >= 80) {
        grade = "B"
    } else if (perecent >= 70) {
        grade = "C"
    } else if (perecent >= 70) {
        grade = "D"
    } else {
        grade = "F"
    }

    return `Your score was ${percent}% and your grade was ${grade}!`;
}

const result = gradeCalc(0, 25);