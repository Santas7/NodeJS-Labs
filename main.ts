import { Transport } from "./transport";

const owner = new Transport.OwnerImpl('Иванов','Иван','Иванович', new Date('1990-01-01'), Transport.IDocumentType.Passport, '1234', '567890');
const car = new Transport.CarImpl('Toyota','Camry', 2022, 'ABC123', 'A123BC', owner, Transport.BodyType.Sedan, Transport.CarClass.Standard);
owner.displayOwnerInfo();
car.displayVehicleInfoWithoutOwner();
