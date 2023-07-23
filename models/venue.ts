import { Schema, model, models ,Types} from "mongoose";


const venueSchema = new Schema({
   venueId :{
    type:Types.ObjectId
   },
   venueName: String,
   venueImage:String,
   description:String,
   price:String,
   capacity:String
   
//    createdBy:{
//        type:Types.ObjectId,
//        ref:'User'
//    }

 

}, { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }})


const Venue = models.Venue || model('Venue', venueSchema);

export default Venue