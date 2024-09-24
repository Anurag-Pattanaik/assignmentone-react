import React from "react";
import { User } from "../../interfaces/user";
interface UserTableProps{
    users:User[]
}
const UserTable:React.FC<UserTableProps> = ({users}) =>{
    return (

        
        <table className="table table-bordered">
        {
            users.map((user,key)=>(
                <tr>
                    <td>{++key}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.designation}</td>
                    <td>{user.address}</td>
                </tr>
            ))
        }
    </table>
    )
}

export default UserTable;