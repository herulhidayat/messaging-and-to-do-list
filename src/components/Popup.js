import Image from "next/image"
import { useState } from "react";
import ChatRoom from "./ChatRoom";
import Inbox from "./Inbox";
import Task from "./Task";

export default function Popup() {
    const [open, setOpen] = useState(false);
    const [popup1, setPopup1] = useState(false);
    const [popup2, setPopup2] = useState(false);
    const [chatRoom, setChatroom] = useState(false)
    const chat = () => {setChatroom(!chatRoom)}
    const close = () => {setOpen(false); setPopup1(false); setPopup2(false); chat()}
    console.log(open, popup1, popup2,chatRoom)
    return(
        <>
            <div className="absolute bottom-[34px] right-[34px] flex justify-center gap-[26px]">
                <div className={`${open
                    ? "opacity-100"
                    : "opacity-0 z-[-1]"
                } transition-all ease-in duration-500 flex items-center`}>
                    <div className="flex justify-center gap-[26px] text-center font-lato text-base text-[#F2F2F2]">
                        <div className={`${popup1 || popup2? "hidden" : ""} flex justify-center`} onClick={() => setPopup1(!popup1)}>
                            <span className={`${popup2? "hidden" : ""} absolute top-[-25px]`}>Task</span>
                            <Image 
                                src="/icons/todo.svg"
                                alt="task icon"
                                width="60"
                                height="60"
                            />
                        </div>
                        <div className={`${!popup2? "hidden" : ""} flex justify-center`} onClick={() => {setPopup2(!popup2);setPopup1(!popup1)}}>
                            <Image 
                                src="/icons/todo.svg"
                                alt="task icon"
                                width="60"
                                height="60"
                            />
                        </div>
                        <div className={`${popup2 || popup1? "hidden" : ""} flex justify-center`} onClick={() => setPopup2(!popup2)}>
                            <span className={`${popup1? "hidden" : ""} absolute top-[-25px]`}>Inbox</span>
                            <Image 
                                src="/icons/message.svg"
                                alt="inbox icon"
                                width="60"
                                height="60"
                            />
                        </div>
                        <div className={`${!popup1? "hidden" : ""} flex justify-center`} onClick={() => {setPopup1(!popup1);setPopup2(!popup2)}}>
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
                        className={`${popup1 || popup2? "hidden" : ""} `}
                        src="/icons/popup-button.svg"
                        alt="menu icon"
                        width="68"
                        height="68"
                    />
                    <Image 
                        className={`${popup2? "" : "hidden"}`}
                        onClick={() => setPopup2(!popup2)}
                        src="/icons/active-message1.svg"
                        alt="active inbox icon"
                        width="83"
                        height="68"
                    />
                    <Image 
                        className={`${popup1? "" : "hidden"}`}
                        onClick={() => setPopup1(!popup1)}
                        src="/icons/active-todo1.svg"
                        alt="active task icon"
                        width="83"
                        height="68"
                    />
                </div>
            </div>
            
            <div className={`${popup1
                    ? ""
                    : "hidden"
                } transition-all ease-in duration-500`}>
                <div className="absolute bottom-[130px] right-[34px] bg-[#FFFF] h-[500px] w-[500px] rounded-lg">
                    <Task />
                </div>
            </div>
            <div className={`${popup2
                    ? ""
                    : "hidden"
                } transition-all ease-in duration-500`}>
                <div className="absolute bottom-[130px] right-[34px] bg-[#FFFF] h-[500px] w-[500px] rounded-lg">
                    <div className={`${chatRoom? "hidden" : ""}`}>
                        <Inbox chat={chat}/>
                    </div>
                    <div className={`${chatRoom? "" : "hidden"}`}>
                        <ChatRoom chat={chat} close={close}/>
                    </div>
                </div>
            </div>
        </>
    )
}