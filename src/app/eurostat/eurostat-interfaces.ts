export interface EurostatDimension {
  id: string;
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
