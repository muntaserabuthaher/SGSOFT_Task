import { Component, OnInit } from '@angular/core';
import { EnergyMeters } from 'src/app/data';

@Component({
  selector: 'app-energy-meters',
  templateUrl: './energy-meters.component.html',
  styleUrls: ['./energy-meters.component.css'],
})
export class EnergyMetersComponent implements OnInit {
  isHidden = true;
  data!: EnergyMeters;
  updatedData!: EnergyMeters;
  elementDeletedId!: number;
  constructor() {}

  ngOnInit(): void {}

  toggleSidePanel(event: any) {
    this.data = event;
    this.isHidden = !this.isHidden;
  }

  closeSidePannel(event: boolean) {
    this.isHidden = event;
  }

  updateData(event: EnergyMeters) {
    this.updatedData = event;
  }

  deleteData(event: number){
    this.elementDeletedId = event;
  }
}
