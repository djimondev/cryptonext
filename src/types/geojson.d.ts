export interface Geometry {
  type: string;
  coordinates: number[][][] | number[][][][];
}

export interface Feature {
  type: "Feature";
  properties: {
    name: string;
    id: string;
  };
  geometry: Geometry;
}

export interface FeatureCollection {
  type: "FeatureCollection";
  features: Feature[];
}
