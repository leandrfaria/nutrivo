import Link from 'next/link'
import Logo from '../logo'

export function Header () {
    return (
        <header>
            <div id='container'>
                <div id="content" className="text-forest">
                    <div id="contentLogo">
                        <Logo className="w-40" />
                    </div>
                    
                    <div id='nav' className='text-lg'>
                        <Link href="" >Home</Link>
                        <Link href="/#about">About Us</Link>
                        <Link href="/#howitworks">How It Works</Link>
                        <Link href="#contact">Contact</Link>

                    <button>Login</button>
                    </div>

                </div>
            </div>
        </header>
    )
    

}