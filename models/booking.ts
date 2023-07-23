import { Schema, model, models ,Types} from "mongoose";


const bookingSchema = new Schema({
   bookingId :{
    type:Types.ObjectId
   },
   email: String,

}, { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }})


const Booking = models.Booking || model('Booking', bookingSchema);

export default Booking