
'use server'

import { revalidatePath } from 'next/cache'

export async function incrementViewCount(postId) {
    // Simulate database update
    console.log(`Incrementing view count for post ${postId}`);
    revalidatePath(`/post/${postId}`);
}

export async function submitComment(postId, commentData) {
    // Simulate comment submission
    console.log(`New comment on post ${postId}:`, commentData);
    revalidatePath(`/post/${postId}`);
    return { success: true };
}
