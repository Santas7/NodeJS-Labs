// 1. Реализация класса, реализация интерфейса
// перечисления для типа документа
enum IDocumentType {
    Passport = 'Паспорт',
    DriverLicense = 'Водительское удостоверение',
    Other = 'Другой',
}
// интерфейс Владелец (Owner)
interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    birthDate: Date;
    documentType: IDocumentType;
    documentSeries: string;
    documentNumber: string;
    displayOwnerInfo(): void;
}
// транспортное средство (Vehicle)
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    ownerInfo: Owner;
    displayVehicleInfoWithoutOwner(): void;
}
// классы, реализующие эти интерфейсы 
class OwnerImpl implements Owner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: IDocumentType;
    private _documentSeries: string;
    private _documentNumber: string;
    constructor(surname: string, name: string, patronymic: string, birthDate: Date, documentType: IDocumentType, documentSeries: string, documentNumber: string) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    get surname(): string { return this._surname; }
    get name(): string { return this._name; }
    get patronymic(): string { return this._patronymic; }
    get birthDate(): Date { return this._birthDate; }
    get documentType(): IDocumentType { return this._documentType; }
    get documentSeries(): string { return this._documentSeries; }
    get documentNumber(): string { return this._documentNumber; }
    displayOwnerInfo(): void {
        console.log(`Фамилия: ${this._surname}
          Имя: ${this._name}
          Отчество: ${this._patronymic}
          Дата рождения: ${this._birthDate.toISOString().slice(0, 10)}
          Тип документа: ${this._documentType}
          Серия документа: ${this._documentSeries}
          Номер документа: ${this._documentNumber} `);
    }
}

class VehicleImpl implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _ownerInfo: Owner;
    constructor(brand: string,model: string,year: number,vin: string,registrationNumber: string,ownerInfo: Owner) {
      this._brand = brand;
      this._model = model;
      this._year = year;
      this._vin = vin;
      this._registrationNumber = registrationNumber;
      this._ownerInfo = ownerInfo;
    }
    get brand(): string {return this._brand;}
    get model(): string {return this._model;}
    get year(): number {return this._year;}
    get vin(): string {return this._vin;}
    get registrationNumber(): string {return this._registrationNumber;}
    get ownerInfo(): Owner {return this._ownerInfo;}
    displayVehicleInfoWithoutOwner(): void {
      console.log(`Марка: ${this._brand}
        Модель: ${this._model}
        Год выпуска: ${this._year}
        VIN-номер: ${this._vin}
        Регистрационный номер: ${this._registrationNumber}`);
    }
}
// использование классов
const owner = new OwnerImpl('Иванов','Иван','Иванович',new Date('1990-01-01'), IDocumentType.Passport,'1234','567890');
const vehicle = new VehicleImpl('Toyota', 'Camry', 2022, 'ABC123', 'A123BC', owner);
owner.displayOwnerInfo();
vehicle.displayVehicleInfoWithoutOwner();

// 2. Работа с наследованием в классах и интерфейсах
// перечисления BodyType и CarClass
enum BodyType {
    Sedan = 'Седан',
    Coupe = 'Купе',
    Hatchback = 'Хэтчбек',
    SUV = 'Внедорожник',
}
enum CarClass {
    Economy = 'Эконом',
    Standard = 'Стандарт',
    Luxury = 'Люкс',
}
// интерфейс Car, который будет расширять интерфейс Vehicle
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

class CarImpl extends VehicleImpl implements Car {
    private _bodyType: BodyType;
    private _carClass: CarClass;
    constructor(brand: string,model: string,year: number,vin: string,registrationNumber: string,ownerInfo: Owner,bodyType: BodyType,carClass: CarClass) {
      super(brand, model, year, vin, registrationNumber, ownerInfo); this._bodyType = bodyType; this._carClass = carClass;
    }
    get bodyType(): BodyType {return this._bodyType;}
    get carClass(): CarClass {return this._carClass;}
    displayVehicleInfoWithoutOwner(): void {super.displayVehicleInfoWithoutOwner(); console.log(`Тип кузова: ${this._bodyType}\nКласс автомобиля: ${this._carClass}`);}
}

// интерфейс Motorbike, который также будет расширять интерфейс Vehicle
// Тип рамы (строка) - frameType
// Для спорта (булево значение) - forSport
interface Motorbike extends Vehicle {
    frameType: string;
    forSport: boolean;
}

// модифицирование класса VehicleImpl по созданию класса MotorbikeImpl
class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private _frameType: string;
    private _forSport: boolean;
    constructor(brand: string,model: string,year: number,vin: string,registrationNumber: string,ownerInfo: Owner,frameType: string,forSport: boolean) {
      super(brand, model, year, vin, registrationNumber, ownerInfo); this._frameType = frameType;this._forSport = forSport;
    }
    get frameType(): string {return this._frameType;}
    get forSport(): boolean {return this._forSport;}
    displayVehicleInfoWithoutOwner(): void {super.displayVehicleInfoWithoutOwner();console.log(`Тип рамы: ${this._frameType}\nДля спорта: ${this._forSport ? 'Да' : 'Нет'}`);}
}
  
// использование классов
// Создаем экземпляр автомобиля
const car = new CarImpl('Toyota','Camry',2022,'ABC123','A123BC',owner,BodyType.Sedan,CarClass.Standard);
// Создаем экземпляр мотоцикла
const motorbike = new MotorbikeImpl('Harley-Davidson','Sportster',2021,'XYZ789','X789YZ',owner,'Cruiser',true);
console.log('\nИнформация об автомобиле:');
car.displayVehicleInfoWithoutOwner();
console.log('\nИнформация о мотоцикле:');
motorbike.displayVehicleInfoWithoutOwner();  

// 3. Работа с обобщениями классов и интерфейсов
// определение интерфейса VehicleStorage с обобщением
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}
// класс реализующий этот интерфейс
class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    creationDate: Date;
    vehicles: T[];
    constructor(creationDate: Date, vehicles: T[]) {
      this.creationDate = creationDate;
      this.vehicles = vehicles;
    }
    getAllVehicles(): T[] {return this.vehicles;}
}

// использование класса
// экземпляр хранилища для автомобилей
const carStorage = new VehicleStorageImpl<Car>(
    new Date(),
    [
      new CarImpl('Toyota', 'Camry', 2022, 'ABC123', 'A123BC', owner, BodyType.Sedan, CarClass.Standard),
      new CarImpl('Honda', 'Civic', 2021, 'XYZ789', 'X789YZ', owner, BodyType.Hatchback, CarClass.Economy),
    ]
);
  
// экземпляр хранилища для мотоциклов
const motorbikeStorage = new VehicleStorageImpl<Motorbike>(
    new Date(),
    [
        new MotorbikeImpl('Harley-Davidson', 'Sportster', 2021, 'DEF456', 'D456EF', owner, 'Cruiser', true),
        new MotorbikeImpl('Honda', 'CBR600RR', 2020, 'GHI789', 'G789HI', owner, 'Sport', true),
    ]
);
  
// все транспортные средства из хранилищ
console.log('Автомобили в хранилище:');
carStorage.getAllVehicles().forEach(car => car.displayVehicleInfoWithoutOwner());
console.log('\nМотоциклы в хранилище:');
motorbikeStorage.getAllVehicles().forEach(motorbike => motorbike.displayVehicleInfoWithoutOwner());
