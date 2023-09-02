"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import axios from 'axios'



function page() {
  const router = useRouter()
  async function getUserDecodedToken() {
    const res = await axios.get("http://localhost:3010/decodedToken", {
        headers: {
           'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    const data = await res.data;
    console.log(data)
    return data;
  }
  async function getUserFromDecodedToken(token) {
    const res = await axios.post("http://localhost:3010/getUser", {
        id: token.id,
        username: token.username
    })
    const data = await res.data;
    return data;
  }
  async function callStack() {
    const userDecodedToken = await getUserDecodedToken();
    const user = await getUserFromDecodedToken(userDecodedToken?.userDecodedToken)
    console.log(user.user)
  }
  useEffect(() => {
    !localStorage.getItem("token") ? router.push("/") : ""
  }, [])
  useEffect(() => {
   callStack()
  }, [])
  return (
    <div>
        landing page
    </div>
  )
}

export default page


