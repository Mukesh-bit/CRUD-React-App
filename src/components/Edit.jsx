import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

const Edit = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [updateData, setUpdateData] = useState();

  const { id } = useParams();

  const { users, loading } = useSelector((state) => state.userDetail);

  const addData = (e) => {
    setUpdateData({...updateData, [e.target.name] : e.target.value})
  }

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((elem) => elem.id === id);
      setUpdateData(singleUser[0]);
    }
  }, []);

  const handleEdit = (e) => {
    e.preventDefault()
    dispatch(updateUser(updateData))
    navigate('/')
  }


  return (
    <div>
      <h1 className="text-center my-4">Edit the Data</h1>
      <form className="my-5 w-25 position-absolute top-50 start-50 translate-middle" onSubmit={handleEdit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={updateData && updateData.name}
            className="form-control"
            onChange={addData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            value={updateData && updateData.email}
            className="form-control"
            onChange={addData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={updateData && updateData.age}
            className="form-control"
            onChange={addData}
          />
        </div>

        <div className="check-box d-flex align-items-center gap-5">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="male"
              checked={updateData && updateData.gender === "male"}
              onChange={addData}
            />
            <label className="form-check-label">Male</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="female"
              checked={updateData && updateData.gender === "female"}
              onChange={addData}
            />
            <label className="form-check-label">Female</label>
          </div>
        </div>

        <button className="btn btn-primary my-5">Submit</button>
      </form>
    </div>
  );
};

export default Edit;
