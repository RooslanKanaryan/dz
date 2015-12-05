/**
 * Created by Rooslan on 05.12.2015.
 */

function Calculate() {

    var Val1 = parseInt(document.getElementById("Val1").value);
    var Val2 = parseInt(document.getElementById("Val2").value);
    var Val3 = (document.getElementById("Val3").value);
    var summa = 0;

    if (document.getElementById("Val1").value == "" ) {
        Val1 = 0;
    }
    if (document.getElementById("Val2").value == "" ) {
        Val2 = 0;
    }

    switch (Val3) {
        case "+":
            summa = Val1 + Val2;
            break;
        case "-":
            summa = Val1 - Val2;
            break;
        case "*":
            summa = Val1 * Val2;
            break;
        case "/":
            if (Val2 == 0) {
                summa = "division by zero!";
            } else {
                summa = Val1 / Val2;
            }
            break;
        default :
            summa = "unknown operator!";
    }


    var elementUL = document.getElementById("RezultUL");

    var Dataquantity = parseInt(elementUL.getAttribute("data-quantity"));


    if (parseInt(Dataquantity) > 10) {
        var eleIDOl = Dataquantity-10;
        var elementULDel = document.getElementById("ol"+eleIDOl);
        elementULDel.remove();
    }
    Dataquantity = Dataquantity + 1;

    elementUL.setAttribute("data-quantity",Dataquantity);

    var newElement1 = document.createElement("ol");

    newElement1.setAttribute("id","ol"+Dataquantity);

    newElement1.innerHTML = " rez = " + Dataquantity + ": " + Val1 + Val3 + Val2 + " = " + summa;

    elementUL.appendChild(newElement1);

}