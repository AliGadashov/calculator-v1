
      function hesablama(a) {
        if (a == "C") {
          document.getElementById("calculatorBlock").innerHTML = "";
        } else {
          document.getElementById("calculatorBlock").innerHTML =
            document.getElementById("calculatorBlock").innerHTML + a;
        }
      }

      let input1;
      let input2;
      let operator;
      function operation(a) {
        if (a == "+") {
          operator = "+";
        } else if (a == "-") {
          operator = "-";
        } else if (a == "/") {
          operator = "/";
        } else if (a == "*") {
          operator = "*";
        }

        input1 = document.getElementById("calculatorBlock").innerHTML;
        document.getElementById("calculatorBlock").innerHTML = "";
      }
      function equal() {
        let cem = 0;
        input2 = document.getElementById("calculatorBlock").innerHTML;
        if (operator == "+") {
          cem = parseInt(input1) + parseInt(input2);
        } else if (operator == "-") {
          cem = parseInt(input1) - parseInt(input2);
        } else if (operator == "/") {
          cem = parseInt(input1) / parseInt(input2);
        } else if (operator == "*") {
          cem = parseInt(input1) * parseInt(input2);
        }
        document.getElementById("calculatorBlock").innerHTML = cem;
        //document.getElementById("calculatorBlock").innerHTML = Math.abs(cem);//musbet reqem verir. menfi yox
        //document.getElementById("calculatorBlock").innerHTML = Math.ceil(3.9);//yuxari yuvarlaqlasdirir
        //document.getElementById("calculatorBlock").innerHTML = parseInt( Math.random() * 100  );//0-100 ARASI TESADUFI REQEM
      }