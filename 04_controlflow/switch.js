// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } // switch case syntax

const month = 4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;    
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break; // if there was no break it would have executed all code after the match all other cases after the match except default
    default:
        console.log("Defualt")
        break;
}