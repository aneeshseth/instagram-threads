"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function page() {
    const router = useRouter()
    useEffect(() => {
      console.log(localStorage.getItem("token"))
      if (localStorage.getItem("token")) router.push("/landing")
    })
  return (
    <div>landing page</div>
  )
}

export default page