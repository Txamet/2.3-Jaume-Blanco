import { createInterface } from "readline";
import chalk from "chalk";
import { memoize } from "./memoize";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const fib: Function = memoize(function fibonacci(n: number) {
    let result: number;
    if (n <= 2) {
        result = 1;
    } else {
        result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return result;
});

function displayFibo() {
    console.log("Escribe a continuación la posición en la secuencia de Fibonacci para saber su valor o pulsa q para volver al menú.");
    rl.question(chalk.cyan("Introduce la posición: "), (position) => {
        let number: number = parseInt(position)
        if (position === "q") {
            displayMenu();
            chooseOption(); 

        } else if (isNaN(number)){
            console.log(chalk.redBright("Error: valor incorrecto, por favor escribe un número entero superior a 0.\n"));
            displayFibo();

        } else {
            let result:number = fib(number);
            console.log(`En la posición ${number} está el valor ${result}\n`);
            displayFibo();
        };
   
    });
};

function displayMenu() {
    console.log(chalk.yellow("\n-----DEMOSTRACIÓN FUNCIÓN MEMOIZE-----"));
    console.log("1. Ejecutar demostración");
    console.log("2. Salir");
};

function chooseOption() {
    rl.question(chalk.magenta("\nElige una opción: "), (choice) => {
        switch (choice) {
            case "1":
                displayFibo();
            break;

            case "2":
                rl.close();
            break;

            default:
                console.log(chalk.redBright("Error: opción introducida no válida. Por favor elija la opción 1 o 2"));
                displayMenu();
                chooseOption();
            break;
        };    
    });
};

displayMenu();
chooseOption();