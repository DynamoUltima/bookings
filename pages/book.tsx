import { add, format } from "date-fns";
import { useState } from "react";
import ReactCalendar from 'react-calendar'
import { DateTime } from "./utils/types";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { bookVenue } from "@/services/services";

interface ITime {

    time: Date
}


const Book = () => {

    const router = useRouter();
    const { image, title, venueId,description,capacity,venueName,price } = router.query;
    const imageString = image! as string;

    console.log('images', image);
    console.log('title', title);
    let results: Date[] = [];

    const [date, setDate] = useState<DateTime>({
        justDate: null,
        dateTime: null,
    });

    const now = new Date();

    const [selectedButtons, setSelectedButtons] = useState<any[]>([]);
    const [selectedTime, setSelectedTime] = useState<any>([]);

    const getTimes = () => {
        if (!date.justDate) return;

        const { justDate } = date;
        const beginning = add(justDate, { hours: 9 });
        const end = add(justDate, { hours: 17 });

        const interval = 1;

        const times = [];

        for (let i = beginning; i <= end; i = add(i, { hours: interval })) {
            times.push(i);
        }
        return times

    }

    const times = getTimes()
    // console.log(times);

    console.log(date.dateTime);

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email()
                .required('email is a required field!!'),
        }),
        validateOnChange: false,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            console.log('clicked');

            setDate({ justDate: null, dateTime: null })
            try {

                const dates = ["Sun Jul 23 2023 09:00:00 GMT+0000 (Greenwich Mean Time)", " Sun Jul 23 2023 10:00:00 GMT+0000 (Greenwich Mean Time)"]

                console.log('clicked')
                const data = { email: values.email, time: selectedTime, venue: venueId }


                //venueid
                //email
                //date
                const results = await bookVenue(data);
                console.log(results);
                if (results.message) {
                    router.back()
                }

                //send date and email

                // if(data?.error){
                //     toast.error('Invalid Credentials');

                //  }

                //  if(data?.ok){
                //     toast.success(' Succesful',)
                //     router.push('/businessPage')
                //  }
                resetForm()


            } catch (error) {
                console.log('error')
                console.log(error);

            }

        }
    })

    const selectTime = (time: Date, index: any) => {
        console.log('time button clicled')
        setDate((prev) => ({ ...prev, dateTime: time }))
        console.log('pre  condition', time)
        // setSelectedButton(index);
        const finalDates: Date[] = [];

        selectedButtons.forEach((items: number) => {
            let date = times![items]
            console.log('added', date);

            finalDates.push(date)


        })

        console.log('finalDates', finalDates);



        results.push(time);
        results.filter((times) => times == time);
        let result = results.concat()

        setSelectedTime([...selectedTime, ...results]);

        // setSelectedTime(times?.filter((t)=>t !==time));

        if (selectedButtons.includes(index)) {
            // Button is already selected, so remove it from the selectedButtons array
            setSelectedButtons(selectedButtons.filter((ind) => ind !== index));
            // setSelectedTime(selectedTime.filter((times: Date) => selectedTime[index] !== time));
        } else {
            // Button is not selected, so add it to the selectedButtons array
            setSelectedButtons([...selectedButtons, index]);
            // setSelectedTime([...selectedTime,selectedTime[index]])
        }

        // if (selectedTime.includes(time)) {
        //     console.log('precondition', time)
        //     // Button is already selected, so remove it from the selectedButtons array

        //     setSelectedTime(selectedTime.filter((times: any) => times !== time));
        // } else {
        //     console.log('precondition', time)
        //     // Button is not selected, so add it to the selectedButtons array
        //     setSelectedTime([...selectedTime, time]);
        // }

        console.log(selectedButtons)
        //   console.log(results)
        console.log('selected time', selectedTime);


    }

    // const intervalTime =add(time, { minutes: 30 }




    return (
        <div className="flex flex-col items-center space-y-5 overflow-auto p-5">

            <div className="relative h-20 w-20 flex-shrink-0">
                <Image
                    src={imageString}
                    alt={"facility"}
                    className="rounded-full object-cover"
                    fill
                    sizes="60px"
                />
            </div>

        <div> {venueName!}</div>
        <div> {description}</div>
        <div> {capacity} seater</div>

        <div>${price!}</div>


            <form onSubmit={formik.handleSubmit} autoComplete="off" className="mt-8 space-y-0" action="#" method="POST">

                <div className="rounded-lg shadow-sm  py-4">
                    <div>
                        <label htmlFor="email-address" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="off"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            required
                            className="appearance-none rounded-lg shadow-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                </div>





                <div className="flex flex-col items-center justify-center">
                    {date.justDate ? (
                        <div className=" h-screen flex flex-col space-y-4 items-center justify-center">
                            <div className='flex max-w-lg flex-wrap gap-4'>
                                {times?.map((time, i) => (

                                    <div className={`rounded-md shadow-sm  p-4  ${selectedButtons.includes(i) ? 'bg-blue-300 text-white' : 'bg-slate-300'}`} key={`time-${i}`}>
                                        <button onClick={() => selectTime(time, i)} type='button'>
                                            {format(time, 'hh:mm')} -{format(add(time, { hours: 1 }), 'hh:mm')}
                                        </button>
                                    </div>


                                ))}


                            </div>
                            {/* we are going to  send date, time  , user details?  to the db */}
                            <button type="submit" className="bg-blue-500 rounded-md shadow-md text-white p-4 max-w-lg"
                            // onClick={() => setDate({ justDate: null, dateTime: null })}

                            >
                                Book Facility
                            </button>
                        </div>) :
                        (
                            <ReactCalendar
                                minDate={now}
                                className='REACT-CALENDAR p-2'
                                view='month'

                                //   onClickDay={(date) => console.log(date)}
                                onClickDay={(date) => setDate((prev) => ({ ...prev, justDate: date }))}
                            />)


                    }

                </div>
            </form>




        </div>

    );
}

export default Book;