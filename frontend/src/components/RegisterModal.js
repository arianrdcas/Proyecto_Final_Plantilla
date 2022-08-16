import React from "react";

const RegistarModal = () =>{
    return (
        <>
            {/* large modal */}
            <div
                        className="modal fade bs-example-modal-lg"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="myLargeModalLabel"
                    >
                        <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">
                                <i className="fa fa-close" />
                                </span>
                            </button>
                            <h4 className="modal-title" id="myLargeModalLabel">
                                Register 11111
                            </h4>
                            <form className="lg-frm" style={{ padding: 25 }}>
                                <label>Name :</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Name"
                                />
                                <label>Email :</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Email"
                                />
                                <label>Passoward :</label>
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Passoward"
                                />
                                <button
                                type="button"
                                className="btn btn-default pull-right"
                                >
                                Submit
                                </button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
        </>

    )
}
export default RegistarModal;