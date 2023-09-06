export interface SelectState {
  options: { [key: string]: string };
  selected: string;
  type: 'info' | 'settings';
}
