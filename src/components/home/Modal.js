import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../action/modalActions";

/*
This component is gonna be used by multiple other components
therefore we have to figure out how to trigger it in all of them
*/


function Modal(){

    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    const {openClose, content} = modal;
    let modalStyle;
    let mheight = document.querySelector("#root").clientHeight-130+"px";

    function closeModalHandle(event){
        //console.log("pressed the",event.target.id);
        if(event.target.id==="modal") dispatch(openModal("close",""));
    }

    if(openClose==="open"){
        modalStyle = {display: "block", height:mheight};
    }else{
        modalStyle = {display: "none", height:mheight};
    }

    return(
        <div className="modal" onClick={closeModalHandle} style={modalStyle} id="modal">
            {content}
        </div>
    );
}

export default Modal;