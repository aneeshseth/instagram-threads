"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function page() {
  const router = useRouter()
  useEffect(() => {
    !localStorage.getItem("token") ? router.push("/") : ""
  })
  return (
    <div>landing page</div>
  )
}

export default page