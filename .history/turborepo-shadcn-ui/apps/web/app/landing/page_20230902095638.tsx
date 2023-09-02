"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import axios from 'axios'


function page() {
  const router = useRouter()
  async function verifyLoggedIn() {
    const res = await axios.get("http://localhost:3010/verify", {
        headers: {
           'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await res.data;
    console.log(data)
  }
  function getUserDecodedToken() {
    
  }
  function getUserFromDecodedToken() {
       
  }
  useEffect(() => {
    !localStorage.getItem("token") ? router.push("/") : ""
  }, [])
  useEffect(() => {
   verifyLoggedIn()
   getUserDecodedToken();
   getUserFromDecodedToken()
  }, [])
  return (
    <div>landing page</div>
  )
}

export default page


