import React, { useState } from "react";

export default function AddStudent() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-80">
      <form style={{ width: '300px' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAge" className="form-label">Age</label>
          <input type="number" className="form-control" id="exampleInputAge" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputGender" className="form-label">Gender</label>
          <select className="form-control" id="exampleInputGender">
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
