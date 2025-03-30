'use client'

import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from "@/lib/appwrite/auth"
import { login, logout } from "@/store/authSlice"

export default function AuthWrapper({ children }) {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                    dispatch(login({ userData: JSON.parse(JSON.stringify(userData)) }))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, [dispatch])

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    return <>{children}</>
}
