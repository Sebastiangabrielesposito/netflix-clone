import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Wacth = () => {
    const router = useRouter()
    const {movieId} = router.query

    const {data} = useMovie(movieId as string)

    return (
        <div className="h-screen w-screen bg-black">
            <nav className=" fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 ">
                <AiOutlineArrowLeft  
                onClick={() => router.push('/')}
                className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition mr-1" size={40}/>
                <p className="text-white text-1xl md:text-2xl font-bold ">
                    <span className="text-white text-1xl md:text-2xl  opacity-70 mr-1">
                        Watching:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video
            className="h-full w-full"
            autoPlay 
            controls
            src={data?.videoUrl}></video>
        </div>  
    )
}
export default Wacth