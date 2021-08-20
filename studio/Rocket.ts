import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import {Payload} from './Payload';


export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number,){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    };


    sumMass(items: Payload[]):number{
        let sum:number = 0;
        for (let i = 0; i < items.length; i++){
            sum += items[i].massKg;
        };
        
        return sum;
    };

    currentMassKg(): number{
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
    };

    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        } else {
            return false;
        };
    };

    addCargo(cargo: Cargo){
        if (this.canAdd(cargo) === true){
          return this.cargoItems.push(cargo);
        } else {
            return false;
        };
    };

    addAstronaut(astronaut: Astronaut){
        if(this.canAdd(astronaut) === true){
           return this.astronauts.push(astronaut);
        }else{
            return false;
        };
    };


};