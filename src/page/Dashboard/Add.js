import React, { useState, useRef, useEffect } from 'react';
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const textInput = useRef(null);

  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !contact || !salary || !location || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Fill all fields to continue.',
        showConfirmButton: true,
        timer: 1000,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      contact,
      salary,
      location,
      date,
    };

    addEmployee(newEmployee);

    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added',
      text: `${firstName} ${lastName}'s data has been added`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={handleAdd} className="space-y-4">
        <h1 className="text-2xl font-semibold mb-4">Add New Employee</h1>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
          First Name
        </label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
          Last Name
        </label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
                <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
          Contact (+254)
        </label>
        <input
          id="contact"
          type="number"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="salary" className="block text-sm font-medium text-gray-600">
          Salary (KES)
        </label>
        <input
          id="salary"
          type="number"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
                <label htmlFor="location" className="block text-sm font-medium text-gray-600">
          Location
        </label>
        <input
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <label htmlFor="date" className="block text-sm font-medium text-gray-600">
          Date
        </label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border rounded-md p-2 w-full"
        />

        <div className="mt-4 flex space-x-2">
          <input
            type="submit"
            value="Add"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 cursor-pointer"
          />
          <input
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
            className="bg-gray-300 text-gray-600 rounded-md px-4 py-2 hover:bg-gray-400 cursor-pointer"
          />
        </div>
      </form>
    </div>

  )
}

export default Add
