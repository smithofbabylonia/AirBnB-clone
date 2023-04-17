import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../action/modalActions";

/*
This component is gonna be used by multiple other components
therefore we have to figure out how to trigger it in all of them
*/


function Modal(props){

    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const {openClose, content} = modal;
    let modalStyle;

    function closeModalHandle(event){
        //console.log("pressed the",event.target.id);
        if(event.target.id==="modal") dispatch(openModal("close",""));
    }

    if(openClose==="open"){
        modalStyle = {display: "block"};
    }else{
        modalStyle = {display: "none"};
    }

    return(
        <div className="modal" onClick={closeModalHandle} style={modalStyle} id="modal">
            {content}
        </div>
    );
}

export default Modal;