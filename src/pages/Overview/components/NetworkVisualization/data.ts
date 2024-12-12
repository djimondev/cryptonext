export const networkData = {
  nodes: [
    {
      id: "datacenter1",
      radius: 8,
      depth: 1,
      color: "#3b82f6",
      size: 24
    },
    {
      id: "datacenter2",
      radius: 8,
      depth: 1,
      color: "#3b82f6",
      size: 24
    },
    {
      id: "server1",
      radius: 4,
      depth: 2,
      color: "#10b981",
      size: 16
    },
    {
      id: "server2",
      radius: 4,
      depth: 2,
      color: "#10b981",
      size: 16
    },
    {
      id: "server3",
      radius: 4,
      depth: 2,
      color: "#10b981",
      size: 16
    },
    {
      id: "client1",
      radius: 2,
      depth: 3,
      color: "#6366f1",
      size: 12
    },
    {
      id: "client2",
      radius: 2,
      depth: 3,
      color: "#6366f1",
      size: 12
    },
    {
      id: "client3",
      radius: 2,
      depth: 3,
      color: "#6366f1",
      size: 12
    }
  ],
  links: [
    {
      source: "datacenter1",
      target: "server1",
      distance: 50,
      weight: 1
    },
    {
      source: "datacenter1",
      target: "server2",
      distance: 50,
      weight: 1
    },
    {
      source: "datacenter2",
      target: "server3",
      distance: 50,
      weight: 1
    },
    {
      source: "server1",
      target: "client1",
      distance: 30,
      weight: 0.5
    },
    {
      source: "server2",
      target: "client2",
      distance: 30,
      weight: 0.5
    },
    {
      source: "server3",
      target: "client3",
      distance: 30,
      weight: 0.5
    }
  ]
};
