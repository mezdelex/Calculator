import "../styles/ClearButton.css";

export const ClearButton = ({ children, handleClick }) => <button className="clearButton" onClick={() => handleClick()}>{children}</button>;
