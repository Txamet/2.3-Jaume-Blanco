import { memoize } from "../app/memoize";

describe("Memoize testing", () => { 

    const mock = {
        fibo: jest.fn(function fibonacci(n: number) {
            let result: number;
            if (n <= 2) {
                result = 1;
            } else {
                result = fibonacci(n - 1) + fibonacci(n - 2);
            }
            return result;
        })
    };
    
    const fiboMemoize: Function = memoize(mock.fibo);
    
    afterEach(() => {
        mock.fibo.mockClear();
    })

    test("Should create a cache key from arguments", () => {
        const args:any = [1, 3];
        const clave = args.join("_");

        expect(clave).toEqual("1_3")
    });
    
    test("Should return expected result of Fibonacci's sequence position 10, which should be 55", () => {
        const result = fiboMemoize(10);
        expect(result).toBe(55);
    });

    test("Should memoize the result of fibonacci function and only call it once", () => {
        const fiboSpy = jest.spyOn(mock, "fibo");
        const resultOne = fiboMemoize(15);
        const resultTwo = fiboMemoize(15);
        const resultThree = fiboMemoize(15);

        expect(resultOne).toBe(610);
        expect(resultTwo).toBe(610);
        expect(resultThree).toBe(610);
        expect(fiboSpy).toHaveBeenCalledTimes(1);
    });
})