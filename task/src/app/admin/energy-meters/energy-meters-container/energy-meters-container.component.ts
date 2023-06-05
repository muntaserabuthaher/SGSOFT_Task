import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { EM_DATA, EnergyMeters, EnergyTypes, SrcType } from 'src/app/data';

@Component({
  selector: 'app-energy-meters-container',
  templateUrl: './energy-meters-container.component.html',
  styleUrls: ['./energy-meters-container.component.css'],
})
export class EnergyMetersContainerComponent implements OnInit, OnChanges {
  @Output() selectedColumn = new EventEmitter<EnergyMeters>();
  @Input() newData!: EnergyMeters;
  @Input() elementDeletedId!: number;
  @ViewChild(MatTable) table!: MatTable<EnergyMeters>;
  SrcType = Object.keys(SrcType);
  EnergyTypes = Object.keys(EnergyTypes);
  sites!: string;
  srcType!: string;
  energyType!: string;
  searchName!: string;
  dataSource: EnergyMeters[] = EM_DATA;
  displayedColumns!: string[];

  ngOnInit(): void {
    this.displayedColumns = [
      'nom',
      'energyType',
      'consumptionPeriod',
      'srcType',
    ];
    this.sites ="";
    this.srcType = '';
    this.energyType = '';
    this.searchName = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes?.['elementDeletedId']) {
      const id = changes?.['newData']?.currentValue?.id;
      const elementIndex = this.dataSource?.findIndex((ele) => ele.id == id);
      this.dataSource[elementIndex] = changes?.['newData']?.currentValue;
    }
    if (!changes?.['newData']) {
      const id = changes?.['elementDeletedId']?.currentValue;
      const elementIndex = this.dataSource?.findIndex((ele) => ele.id == id);
      this.dataSource.splice(elementIndex, 1);
    }
    this.table?.renderRows();
  }

  selectColumn(data: EnergyMeters) {
    this.selectedColumn.emit(data);
  }

  search() {

    this.dataSource = EM_DATA.filter(
      (item) =>
        item.sites.includes(this.sites || '') &&
        item.srcType.includes(this.srcType || '') &&
        item.energyType.includes(this.energyType || '') &&
        item.nom.includes(this.searchName || '')
    );
  }
}

