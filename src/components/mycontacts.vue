<template>
   <div class="my-contacts">
     <h2>My Contacts</h2>
     <table>
       <thead>
         <tr>
           <th>Name</th>
           <th>Phone Number</th>
           <th>Email</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(contact, index) in contacts" :key="index">
           <td>{{ contact.name }}</td>
           <td>{{ contact.phone }}</td>
           <td>{{ contact.email }}</td>
           <td>
             <button @click="editContact(contact)">Edit</button>
             <button @click="deleteContact(index)">Delete</button>
           </td>
         </tr>
       </tbody>
     </table>
   </div>
 </template>
 
 <script>
 export default {
   name: 'MyContacts',
   data() {
     return {
       contacts: [
         { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com' },
         { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com' },
         // Add more contacts as needed
       ]
     };
   },
   methods: {
     editContact(contact) {
       // Handle editing the contact
       console.log('Editing contact:', contact);
     },
     deleteContact(index) {
       // Handle deleting the contact
       this.contacts.splice(index, 1);
       console.log('Contact deleted');
     }
   }
 };
 </script>
 
 <style scoped>
 .my-contacts {
   margin-top: 20px;
 }
 
 table {
   width: 100%;
   border-collapse: collapse;
 }
 
 th, td {
   padding: 10px;
   border: 1px solid #ddd;
 }
 
 th {
   background-color: #f2f2f2;
 }
 
 button {
   padding: 5px 10px;
   cursor: pointer;
   background-color: #007bff;
   color: #fff;
   border: none;
   border-radius: 5px;
   margin-right: 5px;
 }
 
 button:hover {
   background-color: #0056b3;
 }
 </style>
 