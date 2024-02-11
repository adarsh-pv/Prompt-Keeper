'use client'

import Form from '@components/Form';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { useState } from 'react'

const CreatePromt = () => {
  const router = useRouter();
  const {data:session} = useSession()
    const [submitting,setSubmitting] = useState(false)
    const [post,setPost] = useState({
            prompt:'',
            tag:''
        })
    const createPrompt = async (e) =>{
      e.preventDefault();
      setSubmitting(true)
      try {
        
        const response = await axios.post('/api/prompt/new',JSON.stringify({
          prompt:post.prompt,
          userId:session?.user?.id,
          tag:post.tag
        }))
        console.log(response,"response gett");
        if(response.data){
          router.push('/')
        }
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false)
      }
    }
  return (
    <Form
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />
    // <div>hi</div>
  )
}

export default CreatePromt;