import Booking from '@/models/booking';
import BookingSchedule from '@/models/bookingSchedule';
import { connectMongo } from '@/utils/connectMongo';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'




const handler: NextApiHandler = async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
     console.log('called');
    console.log(req.body);

  

    try {

        await connectMongo();
        const booking = await Booking.create(req.body);
        const { venueId, bookingId, bookedBy,time } = req.body

        if (booking._id) {
            //check if order Id exists
            // const bid =  await Booking.create({bidId:boooking._id})

            const bookingSchedule = await BookingSchedule.create({
                'bookingId': booking._id,
                'venue': req.body.venueId,
                'bookedBy': bookedBy
            });



            return res.status(200).json({ message: 'created Successfully', booking: booking, schedule: bookingSchedule })

        }

        //   res.status(200).json({ message: 'Unsucessful',  })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error })
    }

}



export default handler;