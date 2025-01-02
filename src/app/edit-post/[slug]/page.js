'use client'

import React, {useEffect, useState} from 'react'
import {Container, PostForm, AuthLayout} from '@/components'
import appwriteService from "@/lib/appwrite/config";
import { useNavigate, useParams, useRouter } from 'next/navigation';

function EditPost() {
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const router = useRouter()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            router.push('/')
        }
    }, [slug, router])
    
  return post ? (
    <div className='py-8'>
        <AuthLayout authentication>
            <Container>
                <PostForm post={post} />
            </Container>
        </AuthLayout>
    </div>
  ) : null
}

export default EditPost

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
