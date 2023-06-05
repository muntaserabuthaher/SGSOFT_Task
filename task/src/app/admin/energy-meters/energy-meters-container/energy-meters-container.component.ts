import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EM_DATA, EnergyMeters, EnergyTypes, SrcType } from 'src/app/data';

@Component({
  selector: 'app-energy-meters-container',
  templateUrl: './energy-meters-container.component.html',
  styleUrls: ['./energy-meters-container.component.css'],
})
export class EnergyMetersContainerComponent implements OnChanges {
  @Output() selectedColumn = new EventEmitter<EnergyMeters>();
  @Input() newData!: EnergyMeters;
  @ViewChild(MatTable) table!: MatTable<EnergyMeters>;
  SrcType = Object.keys(SrcType);
  EnergyTypes = Object.keys(EnergyTypes);

  displayedColumns: string[] = [
    'nom',
    'energyType',
    'consumptionPeriod',
    'srcType',
  ];
  dataSource = EM_DATA;

  ngOnChanges(changes: SimpleChanges): void {
    const id = changes?.['newData']?.currentValue?.id;
    const elementIndex = this.dataSource.findIndex((ele) => ele.id == id);
    this.dataSource[elementIndex] = changes?.['newData']?.currentValue;
    this.table.renderRows();
  }

  selectColumn(data: EnergyMeters) {
    this.selectedColumn.emit(data);
  }
}

