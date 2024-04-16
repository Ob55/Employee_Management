
// import Dashboard from "./page/Dashboard";
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import { employeesData } from "../../data/index";
import { useState } from "react";

function Dashboard() {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedemployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setISEditing] = useState(false);

  const handleEdit = (id) => {
   const [employee]=employees.filter(employee => employee.id === id);
    setSelectedEmployee(employee);
    setISEditing(true);
   };

  const handleDelete = (id) => {
    Swal.fire(
    {
      icon: 'Warning',
      title: 'Do you want to give a second chance to the employee?',
      showCancelButton: true,
      confirmButtonText: 'No,not Today!',
      cancelButtonText: 'Yes,Forgiven',

    }
    ).then(result => 
    {
      if (result.value) {
        const [employee] = employees.filter(employee => employee.id === id);
        Swal.fire({
          icon: 'success',
          title: 'Fired!',
          text: `${employee.firstName} ${employee.lastName}has been FIRED`,
          showConfirmButton: false,
          timer: 1000
        });
        setEmployees(employees.filter(employee => employee.id !== id));
      };
    });
  }

  return (
    <div className="container">
 
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
    
      {isAdding && (
        <>
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        </>
      )}
  
      {isEditing && (
        <>
          <Edit
            employees={employees}
            selectedemployee={selectedemployee}
            setEmployees={setEmployees}
            setISEditing={setISEditing}
          />
        </>
      )}
    </div>
  );
}

export default Dashboard;
