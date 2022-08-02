import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


var operacion = prompt("Digite el simbolo de la operación a realizar * + - /");

if (operacion == "*" || operacion == "-" || operacion == "+" || operacion == "/") {
  var num1 = Number(prompt("Ingresis el primer número "));
  var num2 = Number(prompt("Ingresis el segundo  número "));
  var res = 0;

  switch (operacion) {
    case "*":
      res = num1 * num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "+":
      res = num1 + num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      console.info("Operacion Invalida");
      break;
  }
  console.info("La operación " + num1, " " + operacion + " " + num2, "es : " + res);
  document.write("La operación " + num1, " " + operacion + " " + num2, "es : " + res);

} else {
  console.info("Operación Invalida")
  alert("Operacion Invalida");
}