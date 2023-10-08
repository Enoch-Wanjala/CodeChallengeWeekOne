//Student Grade Generator

// the following program allows you to insert your marks in the "marks" parameter and grades it accordingly.
const grade = function (marks){  // the marks parameter allows you to enter you marks
    if(marks<40){       //here the program checks if your mark is below 40 and grades you an "E" if true. 
        return "E"
    }else if(marks>=40 && marks<49){//if your marks equals 40, and more, or is less than 49, you are graded a "D".
        return "D"
    }else if(marks>=49 && marks<=59){//if you marks equals 49, and more, or is less than 59, you are graded a "C". 
        return "C"
    }else if(marks>=60 && marks<=79){// if you marks is less than 79 0r equal to and more than 60, you get a "B".
        return "B"
    }else if(marks>79){// if you get marks above 79 you are graded an "A".
        return "A"
    }
}
console.log(grade(50))  //You insert your marks as an argument and the program grades you accoring to the graded system.