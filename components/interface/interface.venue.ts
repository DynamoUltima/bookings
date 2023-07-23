// export interface IVenue {
//     _id:string,
//     venueName: string,
//    venueImage:string,
//    description:string,
//    price:string,
//    capacity:string
// }

export interface IVenueList {
    message: string;
    venue:   IVenue[];
}

export interface IVenue {
    _id:         string;
    venueName:   string;
    venueImage:  string;
    description: string;
    price:       string;
    capacity:    string;
    created_on:  Date;
    updated_on:  Date;
    __v:         number;
}


