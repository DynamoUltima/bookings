import Image from "next/image";
import Link from "next/link";

import { useRouter } from 'next/router';
// import { useAuth } from "../../context/authContext";

const RecentCard = ({ image, venueName: title,  description,venueId,venueName,capacity,price }: { image: string; venueName: string; description: string, venueId: string ,capacity:string,price:string}) => {

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
            venueId,
            venueName,
            capacity,
            price
          }
        });
      };

    return (
        <>
         
                <div  onClick={handleClick} className='flex flex-col w-44 space-y-2'>
                    {/* Image */}
                    <div className='relative h-40  w-52 bg-white rounded-lg overflow-clip  shadow-lg'>
                        <Image alt='Card Image' layout='fill' src={image} />
                    </div>
                    {/* Text */}
                    <div className='flex flex-col space-y-1'>
                        <div className='text-slate-700 text-base  font-bold truncate '>{venueName}</div>
                        <div className='text-slate-600 text-xs'>capacity: {capacity} seater</div>
                    </div>

                </div>
            
        </>
    );
}

export default RecentCard;