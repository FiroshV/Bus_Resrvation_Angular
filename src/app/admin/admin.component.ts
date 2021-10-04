import { Component, OnInit } from '@angular/core';
import { Bus_Detail } from '../Bus_Detail';
import { AdminService } from './admin.service';
import { Bus } from './Bus';
import { Driver } from './Driver';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  showAnalytics: boolean = true;
  showBusDetails: boolean = false;
  showDriverDetails: boolean = false;

  bus: Bus[] = [];
  bus1!: Bus;
  id = 150;
  driver: Driver[] = [];
  driver1!: Driver;
  Operations: string[] = ['Display all records', 'Edit Records', 'Add Records'];
  driverFirstname!: string;
  driverLastname!: string;
  driverMobile!: string;
  busnoOfSeats: number = 0;
  selectedOperation: string = '';
  bussource: string = '';
  busdestination: string = '';
  busday: string = '';
  bustime: string = '';
  busticketPrice: number = 0;
  busdriverId: number = 0;
  driver_Id: number = 0;
  constructor(private service: AdminService) {}

  ngOnInit(): void {}

  onChange() {
    if (
      this.showBusDetails &&
      this.selectedOperation == 'Display all records'
    ) {
      this.getAllBuses();
    } else if (
      this.showDriverDetails &&
      this.selectedOperation == 'Display all records'
    ) {
      this.getDriverList();
    } else if (this.showBusDetails && this.selectedOperation == 'Add Records') {
      let temp = new Bus(0, 0, '', '', '', '', 0, 0);
      this.bus = [temp];
    } else if (
      this.showDriverDetails &&
      this.selectedOperation == 'Add Records'
    ) {
      let temp = new Driver(0, '', '', '');
      this.driver = [temp];
    } else if (
      this.showBusDetails &&
      this.selectedOperation == 'Edit Records'
    ) {
      this.getAllBuses();
    } else if (
      this.showDriverDetails &&
      this.selectedOperation == 'Add Records'
    ) {
      this.getDriverList();
    }
  }

  setShowAnalytics() {
    this.showAnalytics = true;
    this.showBusDetails = false;
    this.showDriverDetails = false;
  }

  setShowBusDetails() {
    this.showAnalytics = false;
    this.showBusDetails = true;
    this.showDriverDetails = false;
  }

  setShowDriverDetails() {
    this.showAnalytics = false;
    this.showBusDetails = false;
    this.showDriverDetails = true;
    console.log('show driver', this.showDriverDetails);
  }

  public getBusDetail(id: number) {
    this.service.getBusDetail(this.id).subscribe(
      (response: Bus) => {
        this.bus1 = response;
        console.log('response is', response);
      },
      (error) => console.log(error)
    );
    console.log(this.bus);
  }

  public addBusDetail() {
    let f = new Bus();
    //f.busId=191;
    f.noOfSeats = this.busnoOfSeats;
    f.source = this.bussource;
    f.destination = this.busdestination;
    f.day = this.busday;
    f.time = this.bustime;
    f.ticketPrice = this.busticketPrice;
    f.driverId = this.busdriverId;
    this.service.addBusDetail(f).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
  }

  public deleteBusDetail(f1: number) {
    this.service
      .deleteBusDetail(f1)
      .subscribe((data: any) => console.log(data));

    this.getAllBuses();
  }

  public getAllBuses() {
    this.service.getAllBuses().subscribe((response: Bus[]) => {
      this.bus = response;
    });
    console.log(this.bus);
  }

  public updateBusDetail(busId: number) {
    this.driver_Id = Number(
      (<HTMLInputElement>document.getElementById('driverId')).value
    );

    this.service.updateBusDetail(busId, this.driver_Id).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
  }

  public getDriverInfo(id: number) {
    this.service.getDriverInfo(this.id).subscribe((response: Driver) => {
      this.driver1 = response;
      console.log('response driverid', response);
    });
    //  console.log(this.driver);
  }

  public addDriverDetail() {
    let f = new Driver();
    //f.driverId=101;
    f.firstName = this.driverFirstname;
    f.lastName = this.driverLastname;
    f.mobile = this.driverMobile;
    this.service.addDriverDetail(f).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
  }

  public deleteDriver(f1: number) {
    this.service.deleteDriver(f1).subscribe((data: any) => {
      console.log(data);
      this.getDriverList();
    });
  }

  public getDriverList() {
    this.service.getDriverList().subscribe((response: Driver[]) => {
      this.driver = response;
      console.log('response driverlist', response);
    });
  }
  public updateDriverInfo(driverId: number) {
    let bus_mobile = (<HTMLInputElement>document.getElementById('driverMobile'))
      .value;

    this.service.updateDriverInfo(driverId, bus_mobile).subscribe(
      (data: any) => console.log(data),
      (error: any) => console.log(error)
    );
  }
}
