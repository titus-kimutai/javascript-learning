function checkGrade() {
    // Prompt user to enter total marks
    let totalMarks = parseFloat(prompt("Enter total marks:"));

    // Prompt user to enter exam type
    let examType = prompt("Enter exam type ('Final' or 'Midterm'):");

    let message = "";

    switch (examType) {
        case "Final":
            switch (true) {
                case totalMarks >= 90:
                    message = "Excellent job, you got an A+.";
                    break;
                default:
                    message = "You need to improve.";
            }
            break;
        default:
            switch (true) {
                case totalMarks >= 89 && totalMarks <= 100:
                    message = "Excellent job, you got an A+.";
                    break;
                case totalMarks >= 80 && totalMarks <= 88:
                    message = "Good job, you got an A.";
                    break;
                case totalMarks >= 75 && totalMarks <= 79:
                    message = "Well done, you got a B+.";
                    break;
                case totalMarks >= 70 && totalMarks <= 74:
                    message = "Nice work, you got a B.";
                    break;
                case totalMarks >= 60 && totalMarks <= 69:
                    message = "You got a C.";
                    break;
                default:
                    message = "You need to improve.";
            }
    }

    return message;
}

console.log(checkGrade());
