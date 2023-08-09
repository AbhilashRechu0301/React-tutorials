import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
export const UserSlice = createSlice(
    {
        name:'user',
    initialState: { 
        value: "notLoggedIn",
        role: "customer"
        }, 
        reducers: {
            register:async(state, action)=>{
              console.log("state", state);
              console.log("action", action);
              try{
                const response = await axios.post("http://localhost:9091/user/register", action.payload);
                console.log("response", response.data.statusCode);
            // dispatch(register(response.data)
            if  (response.data.statusCode === 200) {
              
              state.value = "Registered";
              return state;
                
                //console.log(response.data);
              //  return state;
            }
            } catch (error) {
                console.log(error);
              }

              },

              login: async(state, action)=>{
                console.log("state", state);
                console.log("action", action);
                try{
                  const response = await axios.post("http://localhost:9091/user/login", action.payload);
                  console.log("response", response.data.statusCode);
                  if  (response.data.statusCode === 200) {
                  state.value = 'Logined';
                  state.role = response.data.role;
                 // console.log(response.data);
                  return state;

                } 
              } catch (error){
                  console.log(error);
                }
              }

                    
            }

        }
    );
    
        
export const { register, login } = UserSlice.actions 
export default UserSlice.reducer 