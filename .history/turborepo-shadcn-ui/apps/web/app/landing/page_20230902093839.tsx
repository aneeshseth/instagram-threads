"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import axios from 'axios'


function page() {
  const router = useRouter()
  async function fetchUser() {
    const res = await axios.get("http://localhost:3010/verify", {
        headers: {
           'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await res.data;
    console.log(data)
  }
  useEffect(() => {
    !localStorage.getItem("token") ? router.push("/") : ""
  }, [])
  useEffect(() => {
   fetchUser()
  }, [])
  return (
    <div>landing page</div>
  )
}

export default page