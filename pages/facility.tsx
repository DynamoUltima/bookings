import FacilityCard from "@/components/facilityCards";
import { IVenue, IVenueList } from "@/components/interface/interface.venue";
import { fetchAllVenue } from "@/services/services";
import { useQuery } from "@tanstack/react-query";



const Facility = () => {

    const { data, isError, isLoading, error, isSuccess, } = 
    useQuery<IVenueList>(["getVenue"], fetchAllVenue, { keepPreviousData: true, });
    
    return (
        <div className="bg-white p-4">
            <div className="flex flex-col space-y-4">
                <div className="text-white text-base">Browse Tags</div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-8 gap-y-12">
                    {
                        data?.venue?.map((venue:IVenue) =>
                            <FacilityCard
                                key={venue._id!}
                                image={venue.venueImage}
                                venueName={venue.venueName}
                                description={venue.description}
                                capacity={venue.capacity}
                                venueId ={venue._id}
                                price={venue.price}
                            />
                        )

                    }
                </div>
            </div>


        </div>
        
    );
}

export default Facility;