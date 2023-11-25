// 1
// Одномерные массивы
function getMaxNegativeValue(arr: number[]): number | undefined {
    const negativeNumbers = arr.filter(num => num < 0);
    if (negativeNumbers.length === 0) {
        return undefined; // Если нет отрицательных чисел
    }
    return Math.max(...negativeNumbers);
}
// Двумерные массивы
function booleanMatrixToNumberMatrix(matrix: boolean[][]): number[][] {
    return matrix.map(row => row.map(value => value ? 1 : 0));
}
// Пример использования
const oneDimensionalArray = [1, -5, 3, -7, 8];
console.log(getMaxNegativeValue(oneDimensionalArray));
const twoDimensionalArray = [
    [true, false, true],
    [false, true, false],
    [true, true, false]
];
console.log(booleanMatrixToNumberMatrix(twoDimensionalArray));

// 2
// Кортеж
type MyTuple = [number, string, string];
function concatenateStrings(tuple: MyTuple): string {
  const [num, str0, str1] = tuple;
  return `${str1}: ${str0}`;
}
// Пример использования
const myTuple: MyTuple = [42, "Hello", "World"];
console.log(concatenateStrings(myTuple));

// 3
// Перечисление
enum AminoAcid {
    Glycine = 'Глицин',
    Glutamine = 'Глутамин'
}
// Пример использования
const amino: AminoAcid = AminoAcid.Glycine;
console.log(amino);

// 4
// данный класс
class Pet {
    name: string = 'Some pet';
    age: number = -1;
    label?: string; // необязательное свойство label
    speak() {
        return "No speak. I am fish!";
    }
}
  
class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}
  
class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}
  
// Обобщенный тип
function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Label: ${pet.label}`);
}
// Пример использования
const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);

// 5
// Перечисление с полями
enum CustomEnum {
    Type1 = 'Type One',
    Type2 = 'Type Two'
}
// Тип с применением перечисления
type MyType = {
    itemType: CustomEnum;
    description: string;
    value: number;
};
// Объект на основе типа
const myObject: MyType = {
    itemType: CustomEnum.Type1,
    description: 'This is type one',
    value: 42
};
// Вывод в консоль в формате JSON
console.log(JSON.stringify(myObject, null, 2));
