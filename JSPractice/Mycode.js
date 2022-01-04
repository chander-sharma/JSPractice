

let key = 42;

function showMessage(message)
{
    document.getElementById("message").value = message;
}

function myfunction1(value) {

    let keyGenerator = function abc() {
        let key = 12;
        console.log("the in generator value is" + " " + key);
        return key;
    }

    let code = value * keyGenerator();
    console.log("out value" + " " + key);
    return code;
}

let secretcode = myfunction1(2);
showMessage(secretcode);

