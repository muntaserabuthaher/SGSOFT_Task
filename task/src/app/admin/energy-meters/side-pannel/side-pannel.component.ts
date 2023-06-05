import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumptionPeriod, EnergyMeters, EnergyTypes, EnergyUnit, SrcType } from 'src/app/data';

@Component({
  selector: 'app-side-pannel',
  templateUrl: './side-pannel.component.html',
  styleUrls: ['./side-pannel.component.css'],
})
export class SidePannelComponent implements OnChanges {
  @Input() data!: EnergyMeters;
  @Output() hideSidePannel = new EventEmitter<boolean>();
  @Output() updateData = new EventEmitter<EnergyMeters>();
  @Output() deleteData = new EventEmitter<number>();

  EnergyTypes = Object.keys(EnergyTypes);
  ConsumptionPeriod = Object.keys(ConsumptionPeriod);
  SrcType = Object.keys(SrcType);
  EnergyUnit = Object.values(EnergyUnit);

  isEdit = false;

  public updateForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    sites: new FormControl('', [Validators.required]),
    energyType: new FormControl('', [Validators.required]),
    energyUnit: new FormControl('', [Validators.required]),
    srcType: new FormControl('', [Validators.required]),
    reference: new FormControl('', [Validators.required]),
    consumptionPeriod: new FormControl('', [Validators.required]),
    main: new FormControl(false, [Validators.required]),
  });

  ngOnChanges(changes: any): void {
    this.isEdit = false;
    this.updateForm.patchValue({
      id: this.data?.id,
      nom: this.data?.nom,
      sites: this.data?.sites,
      energyType: this.data?.energyType,
      energyUnit: this.data?.energyUnit,
      srcType: this.data?.srcType,
      reference: this.data?.reference,
      consumptionPeriod: this.data?.consumptionPeriod,
    });
  }

  toggleEditing() {
    this.isEdit = !this.isEdit;
  }

  closeSidePannel() {
    this.hideSidePannel.emit(true);
  }

  onDelete(){
    this.deleteData.emit(this.updateForm?.value?.id);
    this.closeSidePannel();
  }

  submitForm() {
    this.updateData.emit(this.updateForm.value);
    this.closeSidePannel();
  }
}
