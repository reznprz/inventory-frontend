// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DataTable from 'react-data-table-component';

// const CreateStaffFunction = () =>  {

//     const STAFF_API = "http://localhost:8080/api/v1/staff/allStaffs";


//     const [staffs, setStaffs ] = useState([]);

//     const getStaffs = async () => {
//         try{
//             const response = await axios.get(STAFF_API);
//             setStaffs(response.data);
//         }catch(error){
//             console.log(error)
//         }
//     };

//     const columns = [
//         {
//             name: "FirstName",
//             selector: (row) => row.firstName,
//         },
//         {
//             name: "LastName",
//             selector: (row) => row.lastName,
//         },
//         {
//             name: "Email",
//             selector: (row) => row.email,
//         },
//         {
//             name: "Address",
//             selector: (row) => row.address,
//         },
//         {
//             name: "Phone",
//             selector: (row) => row.phoneNumber,
//         },
//     ];

//     useEffect(()=>{
//         getStaffs();
//     }, []);

//   return <DataTable title="Staff List" columns={columns} data={staffs} pagination />;
  
// }

// export default CreateStaffFunction;