import Buttons from "./Buttons";

function ButtonPanel({buttons, buttonClick}){
    return(
        <div className="button-panel">
            {buttons.map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                {row.map((label) => (
                    <Buttons
                    key={label}
                    label={label}
                    buttonClick={buttonClick}
                    />
                ))}
                </div>
            ))}
        </div>
    );
}
export default ButtonPanel