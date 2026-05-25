// if 
let age=18;
if(age>=18){
    console.log("eligible");
}
else{
    console.log("not eligible");
}

let score=90;

// else if
if(score>90){
    console.log("grade a");
}
else if(score>80){
    console.log("grade b");
}
else{
    console.log("grade c");
}


// switch case

let month="june";

switch(month){
    case "jan":
        console.log("Learn HTML,CSS and Scss");
        break;
    case "feb":
        console.log("learn JavaScript");
        break;
    case "March":
        console.log("learn Angular ");
        break;
    case "june":
        console.log("learn React ");
        break
    default:
    console.log("Roadmap for Frontend development");
}