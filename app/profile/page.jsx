"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "@components/Profile";



const MyProfile = () => {
  const {data: session} = useSession();
  const [posts,setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async() => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
    }
    if(session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }
  return (
    <Profile name="My"
     desc="welcome to you personalized profile page"
      data={posts}
      handleEdit={handleEdit} 
      handleDelete={handleDelete}/>
  )
}

export default MyProfile