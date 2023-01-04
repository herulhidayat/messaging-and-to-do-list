import Image from "next/image"

export default function ChatRoom(props) {
    return(
        <>
            <div className="flex flex-col justify-center">
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
                        <span className="text-[#2F80ED]">109220-Naturalization</span>
                        <span className="text-[#4F4F4F] text-sm">3 Participant</span>
                    </div>
                    <div className="flex justify-center" onClick={() => props.close()}>
                        <Image
                            src="/icons/close.svg"
                            alt="search"
                            width="14"
                            height="14"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}