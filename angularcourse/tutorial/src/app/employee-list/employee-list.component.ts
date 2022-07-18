import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any;
  errorMsg;

  constructor(private _serviceService: ServiceService){

  }

  ngOnInit(){
    this._serviceService.getEmployees()
      .subscribe(
        data => this.employees = data,
        error => this.errorMsg = error
        );
  }

}
