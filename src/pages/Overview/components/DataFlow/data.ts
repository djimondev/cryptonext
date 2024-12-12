export const sankeyData = {
  nodes: [
    { id: "Collectors" },
    { id: "Data Processing" },
    { id: "Storage" },
    { id: "Analysis" },
    { id: "Visualization" },
    { id: "Real-time" },
    { id: "Historical" },
    { id: "Alerts" }
  ],
  links: [
    {
      source: "Collectors",
      target: "Data Processing",
      value: 2500
    },
    {
      source: "Data Processing",
      target: "Storage",
      value: 2200
    },
    {
      source: "Data Processing",
      target: "Real-time",
      value: 300
    },
    {
      source: "Storage",
      target: "Analysis",
      value: 1800
    },
    {
      source: "Storage",
      target: "Historical",
      value: 400
    },
    {
      source: "Analysis",
      target: "Visualization",
      value: 1200
    },
    {
      source: "Analysis",
      target: "Alerts",
      value: 600
    },
    {
      source: "Real-time",
      target: "Visualization",
      value: 300
    }
  ]
};
