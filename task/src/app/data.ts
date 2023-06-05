export enum EnergyTypes {
  Water = 'water',
  Electricity = 'electricity',
  Gaz = 'gaz',
}

export enum ConsumptionPeriod {
  Day = 'day',
  Week = 'week',
  Month = 'month',
  Year = 'year'
}

export enum SrcType {
  Internal = 'internal',
  External = 'external',
  Manual = 'manual',
}

export enum EnergyUnit {
  Water = 'M³',
  Electricity = 'kWh',
  Gaz = 'leter',
}

export interface EnergyMeters {
  id: number,
  nom: string;
  sites: string;
  energyType: string;
  energyUnit: string;
  srcType: string;
  reference: string;
  consumptionPeriod: string;
}

export const EM_DATA: EnergyMeters[] = [
  {
    id: 1,
    nom: '10 RUE DES PONTS ANGLE RD 321',
    sites: '10 rue des points angle rd 321',
    energyType: 'Water',
    energyUnit: 'Water',
    srcType: 'Internal',
    reference: '98-6333093286',
    consumptionPeriod: 'Week',
  },
  {
    id: 2,
    nom: '321',
    sites: '321',
    energyType: 'Water',
    energyUnit: 'Water',
    srcType: 'Internal',
    reference: '98-6333093286',
    consumptionPeriod: 'Week',
  },
];
