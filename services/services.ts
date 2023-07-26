import axios from "axios";


export const fetchAllVenue = async () => {
    // console.log('token index')
    // console.log(token)

    const response = await axios.get('api/venue/getAll',{
        data:{},
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }
    
    });
    const venue= response.data;
    
    console.log('venue');
    console.log(venue)
    return venue;
}

// export const bookVenue =async(data:any)=>{
        
//    console.log('called')
//     const res = await fetch('api/book', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         //   'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify(data)
//       })
//       const results= res.json
//       console.log('results',res)
//       return results;

// }


export const bookVenue =async(data:any)=>{
        
    console.log('called')
    const response = await axios.post('api/book',{
        data:data,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }
    
    });
    const results= response.data;
       console.log('results',results)

       
       return results;
 
 }



 export const addVenue =async(data:any)=>{
        
    console.log('called')
    const response = await axios.post('https://bookings-omega-seven.vercel.app/api/venue/create',{
        data:data,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        }
    
    });
    const results= response.data;
       console.log('results',results)

       
       return results;
 
 }
