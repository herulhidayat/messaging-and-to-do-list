import Image from "next/image"
import { useState } from "react"
import { useGetInbox } from "../services/GetInbox"

export default function ChatRoom(props) {
    const [more, setMore] = useState(false)
    const [selectedMore, setSelectedMore] = useState()

    const api = useGetInbox()
    const chat = api.chat

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
                    {Object.values(chat).map(data => {
                        if(props.roomId === data.inboxId){
                            return(
                                <div className="flex flex-col justify-center grow px-5" key={data.inboxId}>
                                    <span className="text-[#2F80ED]">{data.title}</span>
                                    <span className="text-[#4F4F4F] text-sm">{data.participant} Participant</span>
                                </div>
                            )
                        }
                    })}
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
                    if (data.inboxId === props.roomId){
                        return(
                            <>
                                {Object.values(data.chat).map(message => {
                                    if(message.userId === 1){
                                        return(
                                            <div className="flex flex-col gap-1 items-end" key={message.chatId}>
                                                <span className="text-[#9B51E0]">You</span>
                                                <div className="flex flex-row justify-center items-start gap-1">
                                                    <div className={`${more && selectedMore === message.chatId? "oppacity-100" : "oppacity-0 z-[-1]"}`}>
                                                        <div className={`flex flex-col justify-center border-[1px] border-[#BDBDBD] divide-y divide-[#BDBDBD] rounded p-2 text-sm min-w-[70px]`}>
                                                            <button className="flex items-start">
                                                                <span className="text-[#2F80ED]">Edit</span>
                                                            </button>
                                                            <button className="flex items-start">
                                                                <span className="text-[#EB5757]">Delete</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <Image
                                                        onClick={() => {setMore(!more); setSelectedMore(message.chatId)}}
                                                        src="/icons/more.svg"
                                                        alt="more"
                                                        width="16"
                                                        height="16"
                                                    />
                                                    <div className="flex flex-col justify-center items-end p-3 bg-[#EEDCFF] rounded-lg text-[#4F4F4F] gap-2">
                                                        <p>{message.message}</p>
                                                        <span className="text-sm">{(message.created_at).substring(14,19)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return(
                                            <div className="flex flex-col gap-1" key={message.chatId}>
                                                <span className="text-[#E5A443]">{message.name}</span>
                                                <div className="flex flex-row justify-star items-start gap-1">
                                                    <div className="flex flex-col justify-center p-3 bg-[#FCEED3] rounded-lg text-[#4F4F4F] gap-2">
                                                        <p>{message.message}</p>
                                                        <span className="text-sm">{(message.created_at).substring(14,19)}</span>
                                                    </div>
                                                    <Image
                                                        onClick={() => {setMore(!more); setSelectedMore(message.chatId)}}
                                                        src="/icons/more.svg"
                                                        alt="more"
                                                        width="16"
                                                        height="16"
                                                    />
                                                    <div className={`${more && selectedMore === message.chatId? "oppacity-100" : "oppacity-0 z-[-1]"}`}>
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
                                    }
                                })}
                            </>
                        )
                    } else {
                        return null
                    }
                })}
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