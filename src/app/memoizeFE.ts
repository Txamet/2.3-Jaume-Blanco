function fibonacci(n: number) {
    let result: number;
    if (n <= 2) {
        result = 1;
    } else {
        result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return result;
}

function memoize(fn: Function) {
    let diccionario: any = {};
  
    return function (...args: []) {
      const clave = args.join("_");
  
      if (diccionario.hasOwnProperty(clave)) {
        return diccionario[clave];
      };
  
      const result = fn(...args);

      diccionario[clave] = result;
      return result;
    };
};

const fib: Function = memoize(fibonacci)

function withoutMemoize() {
    let number: number = (document.getElementById("position") as HTMLFormElement).value;
    let fibo: number = fibonacci(number);
    
    document.getElementById("result")!.innerHTML = `En la posición ${number} está el número ${fibo}.`
};

function withMemoize() {
    let number: number = (document.getElementById("position_memoize") as HTMLFormElement).value;
    let fibonacciNumber: number = fib(number);

    document.getElementById("result_memoize")!.innerHTML = `En la posición ${number} está el número ${fibonacciNumber}.`
}