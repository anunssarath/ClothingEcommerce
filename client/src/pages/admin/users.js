import React, { useState, useEffect } from "react";
import Layout from '../../components/Layout/layout';
import axios from "axios";
import Adminmenu from '../../components/Layout/adminmenu'
import moment from "moment";
import { useAuth } from "../../context/auth";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [auth, setAuth] = useAuth();

  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-users");
      
      setUsers(data.user || data.users || []); 
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    if (auth?.token) getUsers();
  }, [auth?.token]);

  return (
    <Layout title={"All Users Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <Adminmenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Users</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((u, i) => {
                return (
                  <tr key={u._id}>
                    <td>{i + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.phone}</td>
                    <td>{u.address}</td>
                    <td>{moment(u.createdAt).fromNow()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Users;