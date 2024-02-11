"use client"

import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile'
// import { Session } from 'inspector'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const MyProfile = () => {
    const router = useRouter()
    const {data:session} = useSession()
    const [posts,setPosts] = useState([])
    const handleEdit = (post) =>{
     router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async (post) =>{
     const hasConfirmed = confirm("Are you sure you want to delete this prompt")
    }
    useEffect(()=>{
        fetchPost()
      },[session?.user?.id])
      const fetchPost = async () =>{
         const response = await fetch(`/api/users/${session?.user?.id}/posts`)
         const data = await response.json()
         console.log(data,"conn");
         setPosts(data)
      }
  return (
    <Profile
    name="My"
    desc="Welcome to your personalized profile page"
    data={posts}
    handleEdit={handleEdit}
    handleDelte={handleDelete}
    />
  )
}

export default MyProfile;