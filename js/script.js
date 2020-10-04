// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
function myButton() {
    var year = document.getElementById("exampleInputYearOfBirth").value;
    var month = document.getElementById("exampleInputMonth").value;
    var day = document.getElementById("exampleInputDate").value;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var sth = new Date();
    sth.setDate(parseInt(day));
    sth.setMonth(parseInt(month)-1);
    sth.setFullYear(parseInt(year));

    var babs = sth.getDay();
    if (babs == 0){
        alert("Sunday");
    }else if(babs == 1){
        alert("Monday");
    }
    else if(babs == 2){
        alert("Tuesday");
    }
    else if(babs == 3){
        alert("Wednesday");
    }
    else if(babs == 4){
        alert("Thursday");
    }
    else if(babs == 5){
        alert("Friday");
    }else if(babs == 6){
        alert("Saturday");
    }
    if(year =="" ||year < 1 || year > 2050){
        alert("Enter a valid year");
    }else if (month == "" || month <1 || month > 12){
        alert("Enter a valid month");
    }else if (day =="" || day < 1 || day > 31){
        alert("Enter a valid date");
    }else if (document.getElementById("male").checked==true && document.getElementById("female").checked==false){
        alert("Your Akan name is " + maleNames[babs]);
    }else if (document.getElementById("female").checked==true && document.getElementById("male").checked==false){
        alert("Your Akan name is " + femaleNames[babs]);
    }



    
}
