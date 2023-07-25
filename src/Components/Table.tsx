import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/_tableComponent.scss"; // Import the Sass file

interface Customer {
  id: number;
  logo: string;
  name: string;
  com_id: number;
  status: string;
  enabled: boolean;
  lae_id: number;
}

const Table: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    // Fetch data from the JSON server
    axios.get<Customer[]>("http://localhost:3001/customers").then((response) => {
      setCustomers(response.data);
    });
  }, []);

  return (
    <div>

      <table>
        <thead>
          <tr>
            <th style={{ width: "50%" }}>CUSTOMER</th>
            <th>COM ID</th>
            <th>LEG ID</th>
            <th>SIZE</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
          
            <tr key={customer.id}>
              <td>
                <div className="customer-info">
                  <img src={customer.logo} alt="Customer Logo" />
                  <span>{customer.name}</span>
                  <div className="dropdown">
                    {/* Add your dropdown menu content here */}
                    {/* Example: */}
                    <button>Dropdown</button>
                    <div className="dropdown-content">
                      {/* Dropdown content */}
                    </div>
                  </div>
                </div>
              </td>
              <td>{customer.com_id}</td>
              <td>{customer.lae_id}</td>
              <td>{customer.com_id}</td>
              <td>{customer.status}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
