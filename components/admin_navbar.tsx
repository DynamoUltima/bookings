import Image from "next/image";
import Link from "next/link";
// import gradcelaImage from "/assets/svg/GradcelaLogo.svg"
// import { useSession } from "next-auth/react";

const AdminNavbar = () => {

    // const { data: session } = useSession();

    return (

        <div className=''>
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                {/* <img src="/assets/images/gradcela logo.png" alt="logo" /> */}
                {/* <Image alt="logo" layout="contain" src={gradcelaImage} /> */}

                <div className='w-20 h-14 relative flex items-center'><div>Bookings</div></div>
                <div className="md:flex hidden lg:flex-row justify-center  lg:justify-between items-center gap-5">
                    {/* <p>Services</p>
                    <p>About Us</p> */}
                    {/* <p>Teacher</p>
                    <p>Pricing</p>
                    <p>Careers</p> */}
                </div>
                <Link href={'/adminDashboard'}>
                    <button className='btn bg-white text-teal-300 border-none hover:bg-[#2DD4BF] p-2 hover:text-white capitalize rounded-full'>
                        Admin
                    </button>
                </Link>
                {/* future sign in button*/}
                {/* Mobile Nav */}


            </div>
        </div>
    )
}

export default AdminNavbar