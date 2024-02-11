"use client";

import Form from "@components/Form";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditPrompt = () => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");
  console.log(promptId, "m");
  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      console.log(response, "res");
      const data = await response.json();
      setPost({
        prompt: data?.prompt,
        tag: data?.tag,
      });
    };
    if (promptId) getPromptDetails();
  }, [promptId]);
  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (!promptId) return alert("Missing Prompt ID");
    try {
      const response = await axios.patch(
        `/api/prompt/${promptId}`,
        JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        })
      );
      console.log(response, "response gett");
      if (response?.data) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
    // <div>hi</div>
  );
};

export default EditPrompt;
