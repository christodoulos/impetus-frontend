export interface EurostatCategory {
  index: { [key: string]: number };
  label: { [key: string]: string };
}

export interface EurostatMetadata {
  class: string;
  id: string[];
  label: string;
  length: number;
  n: number;
  size: number[];
  source: string;
  updated: Date;
  dimension: { [key: string]: EurostatCategory };
}

export interface EurostatDataset extends EurostatMetadata {
  value: number[];
}
