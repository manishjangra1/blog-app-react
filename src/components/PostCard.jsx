import React from 'react'
import appwriteService from "@/lib/appwrite/config"
import Link from 'next/link'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link href={`/post/${$id}`}>
        <div className='w-full bg-white rounded-xl p-4 border hover:shadow-md transition-shadow'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl object-cover h-48 w-full' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard



























