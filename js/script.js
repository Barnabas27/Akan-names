// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
// var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//initiating process from click of the button

function myButton() {
    var year = document.getElementById("exampleInputYearOfBirth").value;
    var month = document.getElementById("exampleInputMonth").value;
    var day = document.getElementById("exampleInputDate").value;
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//getting user's input
    var sth = new Date();
    sth.setDate(parseInt(day));
    sth.setMonth(parseInt(month)-1);
    sth.setFullYear(parseInt(year));

    var babs = sth.getDay();
    if (babs == 0){
        alert("Sunday");
    }else if(babs == 1){
        alert(" You were born on a Monday");
    }
    else if(babs == 2){
        alert("You were born on a Tuesday");
    }
    else if(babs == 3){
        alert("You were born on a Wednesday");
    }
    else if(babs == 4){
        alert("You were born on a Thursday");
    }
    else if(babs == 5){
        alert("You were born on a Friday");
    }else if(babs == 6){
        alert("You were born on a Saturday");
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
