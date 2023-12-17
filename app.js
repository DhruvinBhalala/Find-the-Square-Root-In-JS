function Square(){
    let num = document.getElementById("number").value;

    let userSquareRoot = Math.sqrt(num);

    document.getElementById("root").innerHTML = "Square Root of " + num + " is = " + userSquareRoot;
}
