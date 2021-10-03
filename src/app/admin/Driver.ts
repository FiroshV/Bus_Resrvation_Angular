export class Driver{
    driverId:number=0;
    firstName:string="";
    lastName:string="";
    mobile:string="";

    constructor(driverId:number=0,firstName:string="",lastName:string="",mobile:string="")
    {
        this.driverId=driverId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.mobile=mobile;
    }
}