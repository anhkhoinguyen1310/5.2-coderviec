 import React from 'react'
 import {useParams } from "react-router-dom";
 
 export default function Jobdetail() {
     const {id } = useParams();
     console.log({Helloid: id});
     return (
         <div>
              <h1>Job Page</h1>
         </div>
     )
 }
 