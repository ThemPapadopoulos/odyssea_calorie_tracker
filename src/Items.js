import MetricItem from "../Metrics/MetricItem";

function Items() {
  const startupMetrics = [
    {
      id: 1,
      timestamp: "17:20",
      description: "100gr burger",
      type: "snack",
      calories: 500,
    },
    {
      id: 2,
      timestamp: "15:20",
      description: "250gr steak",
      type: "brunch",
      calories: 1000,
    },
    {
      id: 3,
      timestamp: "09:20",
      description: "100gr cereals",
      type: "breakfast",
      calories: 600,
    },
  ];
  return startupMetrics.map((item) => {
    return (
      <li >
        <MetricItem
          key={item.id}
          timestamp={item.timestamp}
          description={item.description}
          type={item.type}
          calories={item.calories}
        />
      </li>
    );
  });
}

export default Items;
