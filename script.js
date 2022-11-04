let car = {
    Brand: "Lamborghini",
    Variant: "Aventador LP 780-4 Ultimae",
    Transmission: "Haldex gen. IV",
    Lights: {
        Front: "LED",
        Rear: "LED/Bulb",
        Signal: "Bulb"
    },

    runCar(){
        alert("Broom! Broom!");
    },

    displayBrand(){
        alert(this.Brand);
    }
}

class Car{
    constructor(brand, variant, transmission){
        this.brand = brand;
        this.variant = variant;
        this.transmission = transmission;
    }
}

function vehicle(){
    this.vehicleType="vehicleType";
}

vehicle.prototype.display=function(){
    return "The brand is: " + this.vehicleType;
}

function MyCar(vehicleType){
    this.vehicleType = vehicleType;
}

MyCar.prototype=Object.create(vehicle.prototype);
var myCar = new MyCar("Toyota");