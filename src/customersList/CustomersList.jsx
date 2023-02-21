import React, { useState, useEffect } from "react";
import Customer from "../customer/Customer";
import "./CustomersList.css";

export const CustomersList = () => {
  const [customers, setCustomers] = useState([]);

  const addCustomers = (e) => {
    e.preventDefault();
    const newCustomer = { name: e.currentTarget.form.name.value };
    setCustomers([...customers, newCustomer]);
  };

  useEffect(() => {
    console.log(customers);
  }, [customers]);

  return (
    <div>
      <div className="customers-list-container">
        <form>
          <input type="text" name="name" className="inputdata" />
          <button type="button" onClick={addCustomers}>
            Add Customer
          </button>
        </form>
      </div>

      {customers &&
        customers.map((customer) => (
          <div className="list-container">
            {" "}
            <Customer name={customer.name} />
          </div>
        ))}
    </div>
  );
};
