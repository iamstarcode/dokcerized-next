'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';

function Client() {

    const [isReady, setIsReady] = useState(false)
    useEffect(() => {

        const host = window.location.host;

        setIsReady(true)
    }, [])
    const pathName = usePathname()
    const router = useRouter()

    if (!isReady) return null
    if (isReady)
        return (<div>{pathName}bvgdcvjehvjgh</div>);
}

export default Client;