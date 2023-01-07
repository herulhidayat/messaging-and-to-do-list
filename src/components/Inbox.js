import Image from "next/image"
import { useGetInbox } from "../services/GetInbox"

export default function Inbox(props) {
    const api = useGetInbox()
    const data = api.data

    return(
        <>
            <div className="py-[24px] px-[32px] flex flex-col justify-center font-lato h-[500px] gap-3">
                <form>
                    <div className="border border-[#828282] rounded h-[32px] px-10 flex justify-between items-center relative">
                        <input type="search" class="outline-none border-none bg-transparent grow" placeholder="Search"/>
                        <button type="submit">
                            <Image 
                                src="/icons/search.svg"
                                alt="search"
                                width="13"
                                height="13"
                            />
                        </button>
                    </div>
                </form>
                <div className="divide-y divide-[#828282] overflow-auto">
                    {Object.values(data).map(data => (
                        <div className="flex flex-row py-[22px] text-sm gap-3">
                            <Image 
                                src="/icons/avatar-group.svg"
                                alt="avatar icon"
                                width="51"
                                height="34"
                            />
                            <div className="flex flex-col" onClick={() => props.chat()}>
                                <div className="flex flex-row gap-3">
                                    <span className="text-[#2F80ED]">{data.title}</span>
                                    <span className="text-[#4F4F4F]">January 1,2021 19:10</span>
                                </div>
                                <span className="font-bold text-[#4F4F4F]">{data.name}</span>
                                <p className="text-[#4F4F4F]">{data.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}