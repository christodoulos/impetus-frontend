export enum GeometryType {
  Point = 'Point',
  LineString = 'LineString',
  Polygon = 'Polygon',
  MultiPolygon = 'MultiPolygon',
}

export interface Geometry {
  type:
    | GeometryType.Point
    | GeometryType.LineString
    | GeometryType.Polygon
    | GeometryType.MultiPolygon;
  coordinates: any[];
}

export interface Feature {
  type: 'Feature';
  geometry: Geometry;
  id?: string;
  properties?: Record<string, any>;
}

export interface FeatureCollection {
  type: 'FeatureCollection';
  features: Feature[];
  id?: string;
  properties?: Record<string, any>;
}
