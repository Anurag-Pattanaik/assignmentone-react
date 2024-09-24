import React from "react";
import { User } from "../../interfaces/user";
import { Table } from "react-bootstrap";
interface UserTableProps {
  users: User[];
}
const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="container2">
      <div className="col-md-12 mt-2">
        <div className="card">
          <div className="card-body">
            <h5>User List</h5>
            <Table bordered hover striped variant="info">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Designation</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, key) => (
                  <tr key={user.id}>
                    <td>{++key}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.designation}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
