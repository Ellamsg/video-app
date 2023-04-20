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
    <div style={{ 
        backgroundImage: `url("image/mul.jpg")` 
      }}
    className="cover h-screen flex justify-center">
        <div className="form  lg:w-[50%] w-[90%] lg:p-6 p-3  py-6 m-auto h-[50%]">
        <form  action="" onSubmit={submitCode}
         className="flex m-0  flex-col items-center justify-center"
        >

        <label htmlFor="" className="font-bold text-[30px] text-white pt-12">Enter the room code</label><br/>
         <input 
         type="text"
          required placeholder="enter code"
         value={RoomCode}
         onChange={(e) => setRoomCode(e.target.value)}
         className="bg-transparent input1 border-2 border-green placeholder:text-white py-2 w-[16rem]
          pl-8 mt-4"
         />
         <button className="bg-[#0f172a] hover:bg-red duration-500 text-white rounded-[0.5rem] mt-4 py-1 px-4
         " type="submit">Enter room</button>
        </form>
        </div>
    </div>
)



}
export default Home