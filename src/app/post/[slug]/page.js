
'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import appwriteService from "@/lib/appwrite/config";
import { Button, Container } from "@/components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const router = useRouter();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else router.push("/");
            });
        } else router.push("/");
    }, [slug, router]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                router.push("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 bg-white">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl object-cover max-h-[400px]"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link href={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                                </Button>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css prose prose-slate max-w-none">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
