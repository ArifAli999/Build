import React from 'react'

function ModalBoxes({ id, title }: { id: string, title: string }) {
    return (
        <div className="modal text-left" id={id}>
            <div className="modal-box bg-white border-2 border-black border-b-4">
                <h3 className="font-bold text-lg">{title} </h3>
                <p className="py-4">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div className="modal-action">
                    <a href="#" className="btn">Yay!</a>
                </div>
            </div>
        </div>
    )
}

export default ModalBoxes