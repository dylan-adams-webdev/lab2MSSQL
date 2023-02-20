const db = require('mssql');
const connection = require('../config/db.config');

// Instruction ask to 'get all the customers' so this is what that does
const listCustomers = async () => {
    const query = `
    SELECT
        Customer.CustomerId,
        Customer.FirstName,
        Customer.LastName,
        Customer.EmailAddress,
        Customer.Phone,
        Address.AddressLine1,
        Address.City,
        Address.StateProvince,
        Address.PostalCode
    FROM
        SalesLT.Customer as Customer
    INNER JOIN
        SalesLT.CustomerAddress as CustomerAddress
    ON
        CustomerAddress.CustomerID = Customer.CustomerID
    INNER JOIN
        SalesLT.Address as Address
    ON
        CustomerAddress.AddressID = Address.AddressID
    `;
    
    const context = await db.connect(connection);
    return context.request().query(query);
}

module.exports = { listCustomers };