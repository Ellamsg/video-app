import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

const Home =() =>{

 const [RoomCode, setRoomCode]=useState("")
 const navigate = useNavigate();
 const submitCode =(e) =>{
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
 }
return(
    <div>
        <form action="" onSubmit={submitCode}
         className="flex flex-col items-center justify-center"
        >

        <label htmlFor="" className="font-bold text-[30px] pt-12">Enter the room code</label><br/>
         <input 
         type="text"
          required placeholder="enter code"
         value={RoomCode}
         onChange={(e) => setRoomCode(e.target.value)}
         className="bg-blue placeholder:text-white py-2 w-[16rem]
         rounded-full pl-8 mt-4"
         />
         <button className="bg-orange rounded-[0.5rem] mt-4 py-1 px-4
         " type="submit">enter room</button>
        </form>
       
    </div>
)



}
export default Home