
function PickButton({title, sub, check}){
    return(
        <div className="pickbutton">
            <h5>{title}</h5>
            {check ?<input className="checked" placeholder={sub}/> : <p className="checked">{sub}</p>}
        </div>
    );
}

export default PickButton;