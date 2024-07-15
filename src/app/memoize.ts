export function memoize(fn: any) {
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