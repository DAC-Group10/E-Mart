import { createSlice } from '@reduxjs/toolkit';

const cartSlice= createSlice({
    name:"cart",
     initialState:{
        count:0

     },
     reducers: {
       addToCart: (state)=>{
           
            return {
                count:state.count+1,
              }
        
           },
        removeFromCart: (state)=>{            
                 return {
                     count:state.count-1,
                   }
                },
            //    resetCount :()=>{
            //         return{
            //             count:0
            //         }
            //     }

     }
     
            

      
})
export const {addToCart,removeFromCart,resetCount}=cartSlice.actions;
export default cartSlice.reducer;