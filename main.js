let hellow = "!"
console.log("Hello World " + hellow);

function math() {
    let input = parseInt(document.getElementById("number").value );
    
    // let a = 10; Nereikalinga
    let res = "";
    
    for (let i = 1; i <= 10; i++) {
        let b = i * input;

        document.write( input + "*" + i + "=" + b + "<br>");
    }

    document.getElementById("result").innerHTML = res;
}
