'use client'

import Link from 'next/link';
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation'


import { cn } from '@/lib/utils';
import { Category } from '@/types';
import MobileNavbar from './mobile-navbar';

interface MainNavProps{
    data: Category[],
}

const MainNav: React.FC<MainNavProps> = ({
    data
}) => {
    const pathname = usePathname();
    const [IsMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!IsMounted){
        return null;
    }

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`
    }));

    return ( 
        <>  
            <MobileNavbar data={data}/>
            <nav
                className='hidden lg:flex mx-6 items-center space-x-4 lg:space-x-6'
            >
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "text-md font-medium transition-colors hover:text-black",
                            route.active? "text-black" : "text-neutral-500"    
                        )}
                    >
                        {route.label}
                    </Link>
                ))}
            </nav>
        </>
     );
}
 
export default MainNav;