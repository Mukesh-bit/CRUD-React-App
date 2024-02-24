import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const [users, setUser] = useState({});

  const getUserDetail = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate('/')
  };


  return (
    <div>
      <h1 className="text-center my-4">Fill the Data</h1>
      <form className="my-5 w-25 position-absolute top-50 start-50 translate-middle" onSubmit={handleSubmit} >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserDetail}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUserDetail}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getUserDetail}
          />
        </div>

        <div className="check-box d-flex align-items-center gap-5">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              onChange={getUserDetail}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              onChange={getUserDetail}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        
        <button className="btn btn-primary my-5"  >
          Submit
        </button>
        
       
      </form>
    </div>
  );
};

export default Create;
