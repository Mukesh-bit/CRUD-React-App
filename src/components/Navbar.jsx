import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailSlice";

const Navbar = () => {

  const dispatch = useDispatch()

  const {users} = useSelector((state) => state.userDetail)

  const [searchData, setSearchData] = useState("")

  useEffect(() => {
    dispatch(searchUser(searchData))
  }, [searchData])


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            CRUD
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">
                  Create Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/'} className="nav-link">
                  All Posts <sup>({users.length})</sup>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearchData(e.target.value)}
              />
              
            </form>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
