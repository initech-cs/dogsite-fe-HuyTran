import React from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

const SearchPage = () => {
  return (
    <div>
        <MDBCol md="6">
            <MDBFormInline className="md-form">
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
                <MDBIcon icon="search" />
            </MDBFormInline>
        </MDBCol>
    </div>
  )
}

export default SearchPage