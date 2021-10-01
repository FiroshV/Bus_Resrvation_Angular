export class Bus_Detail{
    busId:number=0;
    noOfSeats:number=0;
    source:string="";
    destination:string="";
    day:string="";
    time:string="";
    ticketPrice:number=0;
    driverId:number=0

    constructor(busId:number,noOfSeats:number,source:string,destination:string,day:string,time:string,ticketPrice:number,driverId:number){
        this.busId=busId;
        this.noOfSeats=noOfSeats;
        this.source=source;
        this.destination=destination;
        this.day=day;
        this.time=time;
        this.ticketPrice=ticketPrice;
        this.driverId=driverId;
    }
}