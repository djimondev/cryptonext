export const networkData = {
  nodes: [
    // Datacenters (depth 1)
    ...[...Array(5)].map((_, i) => ({
      id: `datacenter${i + 1}`,
      radius: 8,
      depth: 1,
      color: "#3b82f6",
      size: 24
    })),

    // Servers (depth 2)
    ...[...Array(15)].map((_, i) => ({
      id: `server${i + 1}`,
      radius: 4,
      depth: 2,
      color: "#10b981",
      size: 16
    })),

    // Clients (depth 3)
    ...[...Array(30)].map((_, i) => ({
      id: `client${i + 1}`,
      radius: 2,
      depth: 3,
      color: "#6366f1",
      size: 12
    }))
  ],
  links: [
    // Datacenter to Server connections
    // Each datacenter connects to 3 servers
    ...[...Array(5)].flatMap((_, i) => [
      {
        source: `datacenter${i + 1}`,
        target: `server${i * 3 + 1}`,
        distance: 50,
        weight: 1
      },
      {
        source: `datacenter${i + 1}`,
        target: `server${i * 3 + 2}`,
        distance: 50,
        weight: 1
      },
      {
        source: `datacenter${i + 1}`,
        target: `server${i * 3 + 3}`,
        distance: 50,
        weight: 1
      }
    ]),

    // Server to Client connections
    // Each server connects to 2-3 clients
    ...[...Array(15)].flatMap((_, i) => [
      {
        source: `server${i + 1}`,
        target: `client${i * 2 + 1}`,
        distance: 30,
        weight: 0.5
      },
      {
        source: `server${i + 1}`,
        target: `client${i * 2 + 2}`,
        distance: 30,
        weight: 0.5
      },
      ...(Math.random() > 0.5
        ? [
            {
              source: `server${i + 1}`,
              target: `client${i * 2 + 3}`,
              distance: 30,
              weight: 0.5
            }
          ]
        : [])
    ]),

    // Cross-connections between servers within same datacenter
    ...[...Array(5)].flatMap((_, i) => [
      {
        source: `server${i * 3 + 1}`,
        target: `server${i * 3 + 2}`,
        distance: 40,
        weight: 0.3
      },
      {
        source: `server${i * 3 + 2}`,
        target: `server${i * 3 + 3}`,
        distance: 40,
        weight: 0.3
      }
    ]),

    // Inter-datacenter connections (mesh network)
    ...[...Array(5)].flatMap((_, i) =>
      [...Array(5)].flatMap((_, j) =>
        i < j
          ? [
              {
                source: `datacenter${i + 1}`,
                target: `datacenter${j + 1}`,
                distance: 70,
                weight: 0.2
              }
            ]
          : []
      )
    ),

    // Some random cross-datacenter server connections
    ...[...Array(5)].map(() => ({
      source: `server${Math.floor(Math.random() * 15) + 1}`,
      target: `server${Math.floor(Math.random() * 15) + 1}`,
      distance: 60,
      weight: 0.2
    }))
  ]
};
