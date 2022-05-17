import "../styles/Button.css";

export const Button = ({ children, handleClick }) => {
    return (
        <button className={isNaN(children) ? 'regularButton' : 'operationButton'} onClick={() => handleClick(children)}>
            {children}
        </button>
    );
}