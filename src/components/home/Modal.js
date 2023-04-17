
/*
This component is gonna be used by multiple other components
therefore we have to figure out how to trigger it in all of them
*/

function Modal(props){

    return(
        <div className="modal">
            {props.children}
        </div>
    );
}

export default Modal;