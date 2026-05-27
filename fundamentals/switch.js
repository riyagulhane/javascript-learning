function weekDays(daynumbers){
switch(daynumbers){
    case 1:
        return "monday";
    case 2:
        return "tuesday"
    case 3:
        return "wednesday"
    case 4:
        return "thursday"   
    case 5:
        return "friday"
    case 6:
        return "saturday"
    case 7:
        return "sunday"
    default:
        return "invalid number"


}
}
console.log(weekDays(2));