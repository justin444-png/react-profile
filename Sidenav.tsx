import * as React from 'react';
import './style.css';

export default function SideNav({ expandFlag }) {
  let employees = [
    {
      id: 1,
      name: "Tommy",
      age: 23,
      city: "New York",
    },
  
    {
      id: 2,
      name: "Mike",
      age: 27,
      city: "Detroit",
    },
  
    {
      id: 3,
      name: "Lisa",
      age: 25,
      city: "Chicago",
    },
  ];
  return (
    <div
      className={expandFlag ? 'mobilehight sideNavhed' : 'sideNavhed'}
      style={{
        width: expandFlag ? '30%' : '5%',
      }}
    >
      <div>
      {employees.map((user) => (
        <div className="list_name">{user.name}</div>
      ))}
    </div>
    </div>
  );
}
