import React, { useState } from "react";
import LoginPage from "./LoginPage"; 

function Header({ setIsAdding }) {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [adminButtonHover, setAdminButtonHover] = useState(false); 

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center", 
  };

  const buttonStyle = {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "0 650px",
    transition: "background-color 0.3s ease",
  };

  

  return (
    <div className="w-screen">
      <div className="bg-gray-100 py-3 w-full">
        <div className="container mx-auto flex items-center justify-between">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-indigo-700">WorkWave.</h1>
            <div style={buttonContainerStyle}> {}
              <button
                style={buttonStyle}
                onClick={() => setIsAdding(true)}
              >
                Hire Employee
              </button>
              {/* Add the Admin Login button here */}
            
            </div>
          </header>
        </div>
      </div>
      {showLoginPage && <LoginPage />} {/* Render the login page component conditionally */}
    </div>
  );
}

export default Header;
