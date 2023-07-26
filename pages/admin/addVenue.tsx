import { addVenue } from "@/services/services";
import { useFormik } from "formik";
import * as Yup from "yup";


const AddVenue = () => {


    const formik = useFormik({
        initialValues: {
            venueName: '',
            description: '',
            venueImage: '',
            price: '',
            capacity: ''
        },
        validationSchema: Yup.object({
            description: Yup.string(),
            venueImage: Yup.string(),
            venueName: Yup.string(),
            capacity: Yup.string(),
            price: Yup.string()
        }),
        validateOnChange: false,
        onSubmit: async (values, { resetForm }) => {
            console.log(values);
            console.log('clicked');


            try {

                // console.log(values)

                //venueid
                //email
                //date
               const data ={
                'venueName':values.venueName,
                'venueImage':values.venueImage,
                'description':values.description,
                'price':values.price.toString(),
                'capacity':values.capacity

               }
               console.log(data)

                const venueAdd = await addVenue(data)

                console.log(venueAdd);

                resetForm()


            } catch (error) {
                console.log('error')
                console.log(error);

            }

        }
    })



    return (
        <div className="flex flex-col items-center p-4 overflow-auto ">
        <div className="flex flex-col justify-center w-3/4 overflow-auto p-4 shadow-md rounded-md">

            <div className=" font-extrabold">Add Venue</div>
            <form onSubmit={formik.handleSubmit} autoComplete="off" className="mt-8 space-y-0" action="#" method="POST">



                <div className="rounded-lg shadow-sm  py-4">
                    <div>
                        <label htmlFor="venueName" className="sr-only">
                            Capacity
                        </label>
                        <input
                            id="venuename"
                            name="venueName"
                            type="text"
                            autoComplete="off"
                            value={formik.values.venueName}
                            onChange={formik.handleChange}
                            required
                            className="appearance-none rounded-lg shadow-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                            placeholder="Name"
                        />
                    </div>
                </div>



                <div className="rounded-lg shadow-sm  py-4">
                    <div>
                        <label htmlFor="venueImage" className="sr-only">
                            Venue Image
                        </label>
                        <input
                            id="venueImage"
                            name="venueImage"
                            type="text"
                            autoComplete="off"
                            value={formik.values.venueImage}
                            onChange={formik.handleChange}
                            required
                            className="appearance-none rounded-lg shadow-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                            placeholder="Paste Image link"
                        />
                    </div>
                </div>

                <div className="rounded-lg shadow-sm  py-4">
                    <div>
                        <label htmlFor="description" className="sr-only">
                            Description
                        </label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            autoComplete="off"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            required
                            className="appearance-none rounded-lg shadow-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                            placeholder="Description"
                        />
                    </div>
                </div>


                <div className="rounded-lg shadow-sm  py-4">
                    <div>
                        <label htmlFor="capacity" className="sr-only">
                            Capacity
                        </label>
                        <input
                            id="capacity"
                            name="capacity"
                            type="text"
                            autoComplete="off"
                            value={formik.values.capacity}
                            onChange={formik.handleChange}
                            required
                            className="appearance-none rounded-lg shadow-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                            placeholder="Capacity"
                        />
                    </div>
                </div>
                <div className="rounded-lg shadow-sm  py-4">
                    <div>
                        <label htmlFor="price" className="sr-only">
                            Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            autoComplete="off"
                            value={formik.values.price}
                            onChange={formik.handleChange}
                            required
                            className="appearance-none rounded-lg shadow-sm  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#2DD4BF] focus:border-[#2DD4BF] focus:z-10 sm:text-sm"
                            placeholder="Price"
                        />
                    </div>
                </div>

                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"

                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Add
                  </button>
                </div>


            </form>
        </div>

        </div>

    );
}

export default AddVenue;