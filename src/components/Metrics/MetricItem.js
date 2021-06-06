import "./MetricItem.css";

const MetricItem = (props) => {
  return (
    <div className="ListItem">
      
        <div className="entry">{props.timestamp}</div>
        <div className="entry">{props.description}</div>
        <div className="entry">{props.type}</div>
        <h3 className="entry">{props.calories}</h3>
      
    </div>
  );
};

export default MetricItem;
