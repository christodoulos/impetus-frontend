export interface EurostatDimension {
  label: string;
  categories: string[];
}

export interface EurostatDataset {
  label: string;
  source: string;
  updated: string;
  n: number;
  dimensions?: EurostatDimension[];
}
