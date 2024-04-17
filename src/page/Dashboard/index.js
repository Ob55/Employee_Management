import React, { useState } from "react";
import LoginPage from "./LoginPage"; // Import the LoginPage component
import Swal from "sweetalert2";

import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import { employeesData } from "../../data/index";

function Dashboard() {
  // State variables
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  // Function to handle edit
  const handleEdit = (id) => {
    const employee = employees.find((employee) => employee.id === id);
    setSelectedEmployee(employee);
    setIsEditing(true);
  };

  // Function to handle delete
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to terminate this employee?",
      showCancelButton: true,
      confirmButtonText: "Terminate",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedEmployees = employees.filter(
          (employee) => employee.id !== id
        );
        setEmployees(updatedEmployees);
        Swal.fire({
          icon: "success",
          title: "Employee Terminated",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  // Function to handle login
  const handleLogin = () => {
    // Implement login functionality
    // Set isLoggedIn to true if login is successful
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      {/* Conditional rendering based on login status */}
      {!isLoggedIn && <LoginPage onLogin={handleLogin} />} {/* Pass handleLogin function as prop */}
      
      {/* Render dashboard content if user is logged in */}
      {isLoggedIn && (
        <>
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
                selectedEmployee={selectedEmployee}
                setEmployees={setEmployees}
                setIsEditing={setIsEditing}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;

// // import Dashboard from "./page/Dashboard";
// import Swal from "sweetalert2";

// import Header from "./Header";
// import List from "./List";
// import Add from "./Add";
// import Edit from "./Edit";
// import { employeesData } from "../../data/index";
// import { useState } from "react";

// function Dashboard() {
//   const [employees, setEmployees] = useState(employeesData);
//   const [selectedemployee, setSelectedEmployee] = useState(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [isEditing, setISEditing] = useState(false);

//   const handleEdit = (id) => {
//    const [employee]=employees.filter(employee => employee.id === id);
//     setSelectedEmployee(employee);
//     setISEditing(true);
//    };

//   const handleDelete = (id) => {
//     Swal.fire(
//     {
//       icon: 'Warning',
//       title: 'Do you want to give a second chance to the employee?',
//       showCancelButton: true,
//       confirmButtonText: 'No,not Today!',
//       cancelButtonText: 'Yes,Forgiven',

//     }
//     ).then(result => 
//     {
//       if (result.value) {
//         const [employee] = employees.filter(employee => employee.id === id);
//         Swal.fire({
//           icon: 'success',
//           title: 'Fired!',
//           text: `${employee.firstName} ${employee.lastName}has been FIRED`,
//           showConfirmButton: false,
//           timer: 1000
//         });
//         setEmployees(employees.filter(employee => employee.id !== id));
//       };
//     });
//   }

//   return (
//     <div className="container">
 
//       {!isAdding && !isEditing && (
//         <>
//           <Header setIsAdding={setIsAdding} />
//           <List
//             employees={employees}
//             handleEdit={handleEdit}
//             handleDelete={handleDelete}
//           />
//         </>
//       )}
    
//       {isAdding && (
//         <>
//           <Add
//             employees={employees}
//             setEmployees={setEmployees}
//             setIsAdding={setIsAdding}
//           />
//         </>
//       )}
  
//       {isEditing && (
//         <>
//           <Edit
//             employees={employees}
//             selectedemployee={selectedemployee}
//             setEmployees={setEmployees}
//             setISEditing={setISEditing}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
