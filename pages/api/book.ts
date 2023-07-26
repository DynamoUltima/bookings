import Booking from '@/models/booking';
import BookingSchedule from '@/models/bookingSchedule';
import { connectMongo } from '@/utils/connectMongo';
import { formatWithOptions } from 'date-fns/fp';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from  'nodemailer'
import { eo,enGB } from 'date-fns/locale'
import { format, parseISO } from 'date-fns';




const handler: NextApiHandler = async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    console.log('called');
    console.log(req.body.data);

    const dateToString = formatWithOptions({ locale: enGB }, 'D MMMM YYYY')
    const toUpper = (arg: any) => String(arg).toUpperCase()



    try {

        await connectMongo();
        const booking = await Booking.create(req.body);
        const { email,venueId, bookingId, bookedBy, time } = req.body.data

        if (booking._id) {
            //check if order Id exists
            // const bid =  await Booking.create({bidId:boooking._id})

            const bookingSchedule = await BookingSchedule.create({
                'bookingId': booking._id,
                'venue': req.body.venue,
                'time': time
            });

           

            const formattedArray = time.map((dateTime: string) => {
                return format(parseISO(dateTime), 'MMMM d, yyyy HH:mm:ss');
              });

            // let date: Date[]  =time;

            //  date.forEach((time)=>{
            //        date.push(new Date(time))
            // })

            // const formattedDates = date.map(dateToString).map(toUpper)



             const transport =  createTransport({
                service:'gmail',
                auth: {
                    user:'kabakaba.dev@gmail.com',
                    pass:'etvtnluawnbarfll'
                }
            });
            
             const mailOptions ={
                from:'kabakaba.dev@gmail.com',
                to:email,
                subject: 'Booking  Apointments',
                text: formattedArray.toString()
            }


             const info = await transport.sendMail(mailOptions);
            
            console.log('-----response data------');
            console.log(formattedArray)
           console.log(info.response);
           // console.log(formattedDates);





            return res.status(200).json({ message: 'created Successfully', booking: booking, schedule: bookingSchedule })

        }

        //   res.status(200).json({ message: 'Unsucessful',  })

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error })
    }

}



export default handler;