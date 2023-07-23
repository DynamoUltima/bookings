import Container from "@/components/container";
import { IVenue } from "@/components/interface/interface.venue";
import RecentCard from "@/components/recentCard";
import Link from "next/link";
import { Key } from "react";

export interface IPost {
    _id:string,
    mainImage :string,
    title:  string,
    author : IAuthor
    slug:string,
    categories: string[]
}

interface IAuthor {
    name:string,
    image:string

}


const Dashboard = (props:{venue?:IVenue[]}) => {
    return (
        <div className="bg-white p-4">
            <div className="flex flex-col space-y-4">
                <div className="text-white text-base">Browse Tags</div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 md:gap-4 gap-8 gap-y-12">
                    {
                        props.venue?.map((venue:IVenue) =>
                            <RecentCard
                                key={venue._id!}
                                image={venue.venueImage}
                                title={venue.venueName}
                                description={venue.description}
                                venueId ={venue._id}
                            />
                        )

                    }
                </div>
            </div>


        </div>
    );
}

export default Dashboard;