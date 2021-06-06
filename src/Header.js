import "./Header.css";

const Header = (props) => {
  return (
    <div className='header'>
      
        <div className="entry">{props.timestamp}</div>
        <div className="entry">{props.description}</div>
        <div className="entry">{props.type}</div>
        <h3 className="entry">{props.calories}</h3>
      
    </div>
  );
};

export default Header;


