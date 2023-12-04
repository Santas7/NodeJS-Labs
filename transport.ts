export namespace Transport {
    export enum IDocumentType {
      Passport = 'Паспорт',
      DriverLicense = 'Водительское удостоверение',
      Other = 'Другой',
    }
  
    export interface Owner {
      surname: string;
      name: string;
      patronymic: string;
      birthDate: Date;
      documentType: IDocumentType;
      documentSeries: string;
      documentNumber: string;
      displayOwnerInfo(): void;
    }
  
    export interface Vehicle {
      brand: string;
      model: string;
      year: number;
      vin: string;
      registrationNumber: string;
      ownerInfo: Owner;
      displayVehicleInfoWithoutOwner(): void;
    }
  
    export enum BodyType {
      Sedan = 'Седан',
      Coupe = 'Купе',
      Hatchback = 'Хэтчбек',
      SUV = 'Внедорожник',
    }
  
    export enum CarClass {
      Economy = 'Эконом',
      Standard = 'Стандарт',
      Luxury = 'Люкс',
    }
  
    export interface Car extends Vehicle {
      bodyType: BodyType;
      carClass: CarClass;
    }
  
    export interface Motorbike extends Vehicle {
      frameType: string;
      forSport: boolean;
    }
  
    export interface VehicleStorage<T extends Vehicle> {
      creationDate: Date;
      vehicles: T[];
      getAllVehicles(): T[];
    }
  
    export class OwnerImpl implements Owner {
      constructor(public surname: string,public name: string,public patronymic: string,public birthDate: Date,public documentType: IDocumentType,public documentSeries: string,public documentNumber: string) {}
      displayOwnerInfo(): void {
        console.log(`
          Фамилия: ${this.surname}
          Имя: ${this.name}
          Отчество: ${this.patronymic}
          Дата рождения: ${this.birthDate.toISOString().slice(0, 10)}
          Тип документа: ${this.documentType}
          Серия документа: ${this.documentSeries}
          Номер документа: ${this.documentNumber}
        `);
      }
    }
  
    export class VehicleImpl implements Vehicle {
      constructor(public brand: string,public model: string,public year: number,public vin: string,public registrationNumber: string,public ownerInfo: Owner) {}
      displayVehicleInfoWithoutOwner(): void {
        console.log(`
          Марка: ${this.brand}
          Модель: ${this.model}
          Год выпуска: ${this.year}
          VIN-номер: ${this.vin}
          Регистрационный номер: ${this.registrationNumber}
        `);
      }
    }
  
    export class CarImpl extends VehicleImpl implements Car {
      constructor(brand: string,model: string,year: number,vin: string,registrationNumber: string,ownerInfo: Owner,public bodyType: BodyType,public carClass: CarClass) {
        super(brand, model, year, vin, registrationNumber, ownerInfo);
      }
      displayVehicleInfoWithoutOwner(): void {
        super.displayVehicleInfoWithoutOwner();
        console.log(`
          Тип кузова: ${this.bodyType}
          Класс автомобиля: ${this.carClass}
        `);
      }
    }
  
    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
      constructor(brand: string,model: string,year: number,vin: string,registrationNumber: string,ownerInfo: Owner,public frameType: string,public forSport: boolean) {
        super(brand, model, year, vin, registrationNumber, ownerInfo);
      }
      displayVehicleInfoWithoutOwner(): void {
        super.displayVehicleInfoWithoutOwner();
        console.log(`
          Тип рамы: ${this.frameType}
          Для спорта: ${this.forSport ? 'Да' : 'Нет'}
        `);
      }
    }
  
    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
      constructor(public creationDate: Date, public vehicles: T[]) {}
      getAllVehicles(): T[] {
        return this.vehicles;
      }
    }
}
  
