const acctData = [
        {
            acctNum: "AAA - 1234",
            user: "Alice"
        },
        {
            acctNum: "AAA - 5231",
            user: "Bob"
        },
        {
            acctNum: "AAA - 9921",
            user: "Alice"
        },
        {
           acctNum: "AAA - 8191",
            user: "Alice"
        }
];

const balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
};

function AccNum(user = null, sortBy = null, sortDt = null) {
    
    let rs = acctData.map(obj => ({
        ...obj,
        balance: balance[obj['acctNum']]
    }));

    if (user) {
        rs = rs.filter((obj) => {
            return obj.user == user
        });
        if (!rs.length) {
            let msg = "There is no such user -" + " " + user;
            return msg;
        }
    }

    if (sortBy) {
        function compare(a, b) {
            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
            return 0;
        }
        rs = rs.sort(compare);
    }

    if (sortDt && sortDt == 'asc') {
        rs = rs.sort((a, b) => a - b);
    }

    if (sortDt && sortDt == 'desc') {
        numArray.sort((a, b) => b - a);
    }

    return rs.map(obj => obj.acctNum);
}

let getdata1 = AccNum('Bob');
let getdata2 = AccNum('charlie');
let getdata3 = AccNum(null, 'acctNum');
let getdata4 = AccNum('Alice', 'balance', 'asc');

document.getElementById("show").innerHTML = "filter by Bob" + ":- " + getdata1;
document.getElementById("show1").innerHTML = "filter by Charlie" + ":- " + getdata2;
document.getElementById("show2").innerHTML = "sort by acc" + ":- " + getdata3;
document.getElementById("show3").innerHTML = "filter by Alice && Sort by Balance && sort Direction Asc" + ":- " + getdata4;

/*console.log('filter by charlie', filterByCharlie);
console.log('sort by acc', sortByAcc)
console.log('filter by Alice && Sort by Balance && sort Direction Asc', filterAliceSortBalDirectAsc);*/



