function findGrade(marks){
    switch(true){
        case marks>=90:
            return "A";
        case marks>=60:
            return "B";
        default:
            return "C";
    }
}
console.log(findGrade(70));


function findGrades(marks){
    if(marks>=90){
        return "A";
    }
    else if(marks>=60){
        return "B";
    }
    else{
        return "C";
    }
}