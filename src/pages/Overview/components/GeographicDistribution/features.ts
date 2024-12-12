import type { FeatureCollection } from "geojson";

export const features: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "United States", id: "USA" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-125.0, 48.0],
              [-125.0, 25.0],
              [-65.0, 25.0],
              [-65.0, 48.0],
              [-125.0, 48.0]
            ]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "United Kingdom", id: "GBR" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-5.0, 58.0],
              [-5.0, 50.0],
              [2.0, 50.0],
              [2.0, 58.0],
              [-5.0, 58.0]
            ]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Germany", id: "DEU" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [6.0, 55.0],
            [6.0, 47.0],
            [15.0, 47.0],
            [15.0, 55.0],
            [6.0, 55.0]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "France", id: "FRA" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-5.0, 51.0],
            [-5.0, 42.0],
            [8.0, 42.0],
            [8.0, 51.0],
            [-5.0, 51.0]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Japan", id: "JPN" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [129.0, 46.0],
              [129.0, 31.0],
              [146.0, 31.0],
              [146.0, 46.0],
              [129.0, 46.0]
            ]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Australia", id: "AUS" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [113.0, -10.0],
              [113.0, -39.0],
              [154.0, -39.0],
              [154.0, -10.0],
              [113.0, -10.0]
            ]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Canada", id: "CAN" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-141.0, 70.0],
              [-141.0, 48.0],
              [-52.0, 48.0],
              [-52.0, 70.0],
              [-141.0, 70.0]
            ]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "India", id: "IND" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [68.0, 35.0],
            [68.0, 8.0],
            [97.0, 8.0],
            [97.0, 35.0],
            [68.0, 35.0]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Brazil", id: "BRA" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-74.0, 5.0],
            [-74.0, -34.0],
            [-34.0, -34.0],
            [-34.0, 5.0],
            [-74.0, 5.0]
          ]
        ]
      }
    },
    {
      type: "Feature",
      properties: { name: "Singapore", id: "SGP" },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [103.6, 1.45],
            [103.6, 1.15],
            [104.1, 1.15],
            [104.1, 1.45],
            [103.6, 1.45]
          ]
        ]
      }
    }
  ]
};
