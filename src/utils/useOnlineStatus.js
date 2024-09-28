import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    //Input - Online status boolean value true by default
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    },[]);
    
    //Output return boolean value of Online status
    return onlineStatus;
}

export default useOnlineStatus;