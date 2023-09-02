"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'


function page() {
  const router = useRouter()
  useEffect(() => {
      if (!localStorage.getItem("token")) router.push("/")
  })
  if (!localStorage.getItem("token"))  {
    return (
        <div>landing page not found</div>
    )
  }
  return (
    <div>landing page</div>
  )
}

export default page