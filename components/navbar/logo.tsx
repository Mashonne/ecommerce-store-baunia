'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/");
    }

    return ( 
        <Image 
            onClick={handleClick}
            alt="Logo"
            className='cursor-pointer'
            height="100"
            width="100"
            src="/images/original.png"
        />     
     );
}
 
export default Logo;





