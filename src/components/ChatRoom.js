import Image from "next/image"
import { useState } from "react"
import { useGetInbox } from "../services/GetInbox"

export default function ChatRoom(props) {
    const [more, setMore] = useState(false)
    const api = useGetInbox()
    const chat = api.comments
    const name = api.data

    const objectById = chat?.filter(object => object.postId === props.roomId);
    const count = objectById?.length;

    if(!chat){
        return(
            <p>Data Belum ada</p>
        )
    }

    return(
        <>
            <div className="flex flex-col justify-start font-lato h-[500px] gap-1">
                <div className="flex flex-row h-[74px] border-b-[1px] border-[#BDBDBD] justify-between px-5">
                    <div className="flex justify-center" onClick={() => props.chat()}>
                        <Image
                            src="/icons/back.svg"
                            alt="search"
                            width="24"
                            height="24"
                        />
                    </div>
                    <div className="flex flex-col justify-center grow px-5">
                        {Object.values(name).map(data => {
                            if(props.roomId === data.userId){
                                return(
                                    <span className="text-[#2F80ED]">{data.title}</span>
                                )
                            }
                        })}
                        <span className="text-[#4F4F4F] text-sm">{count} Participant</span>
                    </div>
                    <div className="flex justify-center" onClick={() => props.close()}>
                        <Image
                            src="/icons/close.svg"
                            alt="close"
                            width="14"
                            height="14"
                        />
                    </div>
                </div>
                <div className="flex flex-col overflow-auto p-4 grow gap-4">
                {Object.values(chat).map(data => {
                    if (data.postId === props.roomId){
                        return(
                            <div className="flex flex-col gap-1">
                                <span className="text-[#E5A443]">{data.name}</span>
                                <div className="flex flex-row justify-center items-start gap-1">
                                    <div className="flex flex-col justify-center p-3 bg-[#FCEED3] rounded-lg text-[#4F4F4F] gap-2">
                                        <p>{data.body}</p>
                                        <span className="text-sm">19:32</span>
                                    </div>
                                    <Image
                                        onClick={() => setMore(!more)}
                                        src="/icons/more.svg"
                                        alt="more"
                                        width="16"
                                        height="16"
                                    />
                                    <div className={`${more? "oppacity-100" : "oppacity-0 z-[-1]"}`}>
                                        <div className={`flex flex-col justify-center border-[1px] border-[#BDBDBD] divide-y divide-[#BDBDBD] rounded p-2 text-sm min-w-[70px]`}>
                                            <button className="flex items-start">
                                                <span className="text-[#2F80ED]">Replay</span>
                                            </button>
                                            <button className="flex items-start">
                                                <span className="text-[#EB5757]">Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return null
                    }
                })}
                    <div className="flex flex-col gap-1 items-end">
                        <span className="text-[#9B51E0]">You</span>
                        <div className="flex flex-row justify-center items-start gap-1">
                            <div className={`${more? "oppacity-100" : "oppacity-0 z-[-1]"}`}>
                                <div className={`flex flex-col justify-center border-[1px] border-[#BDBDBD] divide-y divide-[#BDBDBD] rounded p-2 text-sm min-w-[70px]`}>
                                    <button className="flex items-start">
                                        <span className="text-[#2F80ED]">Replay</span>
                                    </button>
                                    <button className="flex items-start">
                                        <span className="text-[#EB5757]">Delete</span>
                                    </button>
                                </div>
                            </div>
                            <Image
                                onClick={() => setMore(!more)}
                                src="/icons/more.svg"
                                alt="more"
                                width="16"
                                height="16"
                            />
                            <div className="flex flex-col justify-center p-3 bg-[#EEDCFF] rounded-lg text-[#4F4F4F] gap-2">
                                <p>Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.</p>
                                <span className="text-sm">19:32</span>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="flex flex-row p-5 gap-2">
                        <div className="border border-[#828282] rounded h-[32px] px-2 flex justify-between items-center relative grow text-sm">
                            <input type="input" class="outline-none border-none bg-transparent grow" placeholder="Type a new message"/>
                        </div>
                        <button type="submit" className="bg-[#2F80ED] rounded px-5 text-[#FFFFFF] text-sm">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}