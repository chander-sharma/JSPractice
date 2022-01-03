function myfunction() {

    var a = document.getElementById('d1').value;

    if (a=="")
    {
        alert("Please enter a date");
    }
    else
    {
        var today = Date.now();

        var date1 = new Date(a);
        var date2 = new Date(today);

        var yearsDiff = Math.floor((date2.getTime() - date1.getTime()) / 31556926000);

        var date3 = date2.getTime() - date1.getTime();
        var date4 = yearsDiff * 31556926000;

        var Difference_In_Time = date3 - date4;
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        //var Difference_In_Time = date2.getTime() - date1.getTime();
        //var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

        var days = Math.floor(Difference_In_Days);

        var weeksDiff = Math.round(days / 7);

        if (date1.getTime() > date2.getTime()) {

            alert("Please enter a valid date");
        }
        else {
            document.getElementById("years").value = yearsDiff;
            document.getElementById("weeks").value = weeksDiff;
            document.getElementById("days").value = days;
            // transform each object with balance in array
            // if user exists filter by user
            // inner function to compare
        }
    }
}