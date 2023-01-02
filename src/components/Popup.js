import Image from "next/image"
import { useState } from "react";

export default function Popup() {
    const [open, setOpen] = useState(false);
    return(
        <>
            <div className="absolute bottom-[34px] right-[34px] flex justify-center gap-[26px]">
                <div className={`${open
                    ? "opacity-100"
                    : "opacity-0"
                } transition-all ease-in duration-500`}>
                    <div className="flex justify-center gap-[26px] text-center font-lato text-base text-[#F2F2F2]">
                        <div className="flex justify-center">
                            <span className="absolute top-[-25px]">Task</span>
                            <Image 
                                src="/icons/todo.svg"
                                alt="task icon"
                                width="60"
                                height="60"
                            />
                        </div>
                        <div className="flex justify-center">
                            <span className="absolute top-[-25px]">Inbox</span>
                            <Image 
                                src="/icons/message.svg"
                                alt="inbox icon"
                                width="60"
                                height="60"
                            />
                        </div>
                    </div>
                </div>
                <div className="" onClick={() => setOpen(!open)}>
                    <Image 
                        src="/icons/popup-button.svg"
                        alt="menu icon"
                        width="68"
                        height="68"
                    />
                </div>
            </div>
        </>
    )
}