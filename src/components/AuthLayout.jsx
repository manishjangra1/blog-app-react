'use client'

import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useRouter} from 'next/navigation'

export default function Protected({children, authentication = true}) {

    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            router.push("/login")
        } else if(!authentication && authStatus !== authentication){
            router.push("/")
        }
        setLoader(false)
    }, [authStatus, router, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}























