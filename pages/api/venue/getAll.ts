
import Venue from '@/models/venue';
import { connectMongo } from '@/utils/connectMongo';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'




const handler: NextApiHandler = async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {

    try {
        await connectMongo();
       
        // const { venueId, bookingId, bookedBy } = req.body

        const venue = await Venue.find();

      
            //check if order Id exists
            // const bid =  await Booking.create({bidId:boooking._id})

            return res.status(200).json({ message: 'venued created Successfully',venue:venue })

        

        //   res.status(200).json({ message: 'Unsucessful',  })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error })
    }

}



export default handler;