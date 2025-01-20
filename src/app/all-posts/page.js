'use client'

import React, {useState, useEffect} from 'react'
import { Container, PostCard, AuthLayout } from '@/components'
import appwriteService from "@/lib/appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <AuthLayout authentication>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </AuthLayout>
    </div>
  )
}

export default AllPosts

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak

// minor tweak
