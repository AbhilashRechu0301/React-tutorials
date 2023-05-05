import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
export const UserSlice = createSlice({
    name:'user',
    initialState: { 
        value: false
        }, 
        reducers: {
            register:(Form)=>{
                axios.post("http://localhost:9091/user/register", Form).then(
                    response => {
                        console.log(response)
                        return response;
                    },
                    error => {
                        console.log(error)
                    }
                  )
            } 
        }
})
export const { register } = UserSlice.actions 
export default UserSlice.reducer 