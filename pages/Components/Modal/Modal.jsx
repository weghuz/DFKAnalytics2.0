import React, { useState } from "react";
import reactDom from "react-dom";

export default function Modal({ Title, children, closeModalFunction }) {
  if (typeof document !== "undefined") {
    return reactDom.createPortal(
      <div className="modal" role="dialog" style={{ display: "block" }} onClick={closeModalFunction}>
        <div className="modal-dialog modal-lg" role="document">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "",
              backgroundColor: "rgb(20,20,20)",
              color: "white",
            }}
          >
            <div className="modal-header">
              <h5 className="modal-title">{Title}</h5>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={closeModalFunction}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" >{children}</div>
          </div>
        </div>
      </div>,
      document.querySelector("#modalContainer")
    );
  }
  return "";
}
