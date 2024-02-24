import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import { Link } from "react-router-dom";

const AllPost = () => {
  const { users, loading, searchData } = useSelector((state) => state.userDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className="text-center my-3">All Post</h1>
      <div className="container">
        {users && users.filter((elem) => {
          if(searchData.length === 0) {
            return elem
          }else {
            return elem.name.toLowerCase().includes(searchData.toLowerCase())
          }
        })
          .map((detail) => (
            <div key={detail.id} className="container-child">
              <h5>Name: {detail.name}</h5>
              <h6>Email: {detail.email}</h6>
              <h6>Age: {detail.age}</h6>
              <h6>Gender: {detail.gender}</h6>
              <Link to={`/edit/${detail.id}`}>
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteUser(detail.id))}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default AllPost;
