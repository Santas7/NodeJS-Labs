// interface способ определения формата структуры TS
interface Entity {
    id: number; // свойство интерфейса
}

// extends расширение интерфейса ToJsonStringify
interface ToJsonStringify extends Entity {
    e1?: number;
    e2?: string;
}
  
const data: Readonly<ToJsonStringify> = {
    id: 4,
    e1: 55,
    e2: "test string",
};
  
  
// Реализация стрелочной функции
const multiplyNumbers = (a: number, b: number): number => a * b;

//function multiplyNumbers(a, b) { 
//    return a * b; 
//};


// Создание объектов-констант и переменных
const constantObject: Entity = { id: 1 };
let variableObject: ToJsonStringify = { id: 2, e1: 3, e2: "test" };
console.log(variableObject)

// Вывод произведения чисел
let num1: number = 5, num2: number = 6;
console.log(`произведение чисел ${num1} и ${num2}: ${multiplyNumbers(num1, num2)}`);

// Преобразование объекта data в формат JSON
const jsonData: string = JSON.stringify(data);
console.log(jsonData);
