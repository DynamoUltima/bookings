import { Schema, model, models, Types } from "mongoose";


const bookingScheduleSchema = new Schema({
    bookingScheduleId: {
        type: Types.ObjectId
    },
    time:[{type:Date}],
    venue: {
        type: Types.ObjectId,
        ref: 'Venue'
    },
    bookedBy: {
        type: Types.ObjectId,
        ref: 'Booking'
    }

}, { timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' } })


const BookingSchedule = models.BookingSchedule || model('BookingSchedule', bookingScheduleSchema);

export default BookingSchedule