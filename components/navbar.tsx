import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// import gradcelaImage from "/assets/svg/GradcelaLogo.svg"


const Navbar = () => {

    const { data: session, status, } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        const data = await signOut({ redirect: false, });
        console.log('sign out')
        console.log(data)
        router.push('/')

    }

     

    console.log(status)
    
    return (

        <div className='shadow-lg divide-y px-4'>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                {/* <img src="/assets/images/gradcela logo.png" alt="logo" /> */}
                {/* <Image alt="logo" layout="contain" src={gradcelaImage} /> */}

                <div className='w-20 h-14 relative flex items-center'><Link href={'/'}><div>Bookings</div></Link> </div>
                <div className="md:flex hidden lg:flex-row justify-center  lg:justify-between items-center gap-5">
                    {/* <p>Services</p>
                    <p>About Us</p> */}
                    {/* <p>Teacher</p>
                    <p>Pricing</p>
                    <p>Careers</p> */}
                    {session && (
                        <Link href={'/facility'}>
                            Facility
                        </Link>)}
                    {session && (
                        <button onClick={handleLogout} className='btn bg-teal-300 text-white border-none hover:bg-[#2DD4BF] p-2 hover:text-white capitalize rounded-full'>
                            signout
                        </button>)}
                </div>
                <Link href={'/admin/adminAuth'}>
                    <button className='btn bg-white text-teal-300 border-none hover:bg-[#2DD4BF] p-2 hover:text-white capitalize rounded-full'>
                        Admin Login
                    </button>
                </Link>
                {/* future sign in button*/}
                {/* Mobile Nav */}


            </div>






        </div>

    );
}

export default Navbar;