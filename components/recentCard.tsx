import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/router';
// import { useAuth } from "../../context/authContext";

const RecentCard = ({ image, title,  description,venueId }: { image: string; title: string; description: string, venueId: string }) => {

    const router = useRouter();
    // const {isToggled,toggle, setToggle} = useAuth();

    const handleClick = () => {
      console.log('title clicked',title);
      console.log('venue clicked',venueId);

    //   if(isToggled){
    //     setToggle(false)
    // }
        router.push({
          pathname: '/book',
          query: {
            image: image,
            title:title,
            description,
            venueId
          }
        });
      };

    return (
        <>
         
                <div  onClick={handleClick} className='flex flex-col w-44 space-y-2'>
                    {/* Image */}
                    <div className='relative h-32 w-44 bg-white rounded-lg overflow-clip  shadow-lg'>
                        <Image alt='Card Image' layout='fill' src={image} />
                    </div>
                    {/* Text */}
                    <div className='flex flex-col space-y-1'>
                        <div className='text-gray-50 text-sm  truncate '>{title}</div>
                        <div className='text-gray-400 text-xs'>2 days ago</div>
                    </div>

                </div>
            
        </>
    );
}

export default RecentCard;