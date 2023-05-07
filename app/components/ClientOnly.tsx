'use client';
import { children, useEffect, useState } from "react";

const ClientOnly = () => {
    children
    const [hasMounted, sethasMounted] = useState(false);
    useEffect(() => {
        sethasMounted(true);
    }, [])
    if (!hasMounted) {
        return null;
    }
    return (
        <>
            {children}
        </>
    );
}

export default ClientOnly;