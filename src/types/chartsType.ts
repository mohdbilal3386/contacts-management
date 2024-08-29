export interface DataPoint {
  [key: string]: number;
}
export interface ChartData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

export interface FormattedData {
  name: string;
  cases: number;
  deaths: number;
  recovered: number;
}

export interface LineConfig {
  key: keyof FormattedData;
  stroke: string;
  name: string;
}

export interface ChartProps {
  data: FormattedData[];
  lines: LineConfig[];
}
