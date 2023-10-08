//Speed Detectoor

//This program take the speed of a car and prints "Ok" if the speed is less than 70.
//Otherwise, for every 5km/s above speed limits, it give one demerit, also printing it.
//But if a driver gets more than 12 demerits, he or she recieves a "Licence suspended" notice. 

const merit = function(speed){ //here the speed parameter expects speed to be inputed as an argument.
    if(speed <= 70){   // and if the speed equals to, or is below 70, "Ok" is printed.
        return "Ok"
    }else if(speed>70){  //but if the speed is above 70, the following takes place:
        let demerit = (speed-70)/5 // the extra speed is subtracted, and divide by 5 to know number of demerit to be issued.
        if(demerit<12){ // if the demerits issued are below 12, the number of demerits are printed.
            return demerit
        }else if(demerit>=12){// but if the number of demerits are 12 or more, license is suspended.
            return "Lincence suspendend"
        }
    } 
}
console.log(merit(140))  // here the speed is inserted are an argument for the speed limit to be tested.