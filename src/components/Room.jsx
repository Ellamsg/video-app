import React  from "react"
import {useParams} from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room =() =>{
    /*webtrc api and zego implimentation for the ui */
     const {roomID} =useParams();
     
     console.log(roomID);
        const meeting = async(element) =>{
            const appID = 1936147861;
            const serverSecret = 
            "e35432c6bb626b204780a769c120e89a"
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,serverSecret,roomID,Date.now().toString(),
                "gooseDev"
            );
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zp.joinRoom({
                container:element,
                scenario:{
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            })
        };

    return(
        <div ref={meeting}  className="m-auto lg:py-0 py-6  h-[100vh]">
          <p className="text-green font-bold text-2xl">See home to enter code</p>
    
        </div>
    )
    
    }

    export default Room