"use client"

import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile'
// import { Session } from 'inspector'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
const MyProfile = () => {
    const router = useRouter()
    const {data:session} = useSession()
    const [posts,setPosts] = useState([])
    const handleEdit = (post) =>{
     router.push(`/update-prompt?id=${post._id}`)
    }
    const handleDelete = async (post) =>{
        // console.log("post",post);
     const hasConfirmed = confirm("Are you sure you want to delete this prompt ?")
     if(hasConfirmed){
        try {
            await axios.delete(`api/prompt/${post?._id.toString()}`)
            const filterPost =posts.filter((p)=>p._id !== post._id)
            setPosts(filterPost)
        } catch (error) {
            console.log(error);
        }
     }
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
    handleDelete={handleDelete}
    />
  )
}

export default MyProfile;