
export function openModal(openClose,content){
    return{
        type: "OPEN_MODAL",
        payload : {
            openClose, content
        }
    }
}