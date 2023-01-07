import { useState } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Task() {
    const [showTask, setShowTask] = useState(false)
    const [more, setMore] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    return(
        <>
            <div className="flex flex-col justify-start font-lato h-[500px] gap-3 py-[24px] px-[32px]">
                <div className="flex flex-row justify-between">
                    <div class="flex justify-center">
                        <select id="countries" class="w-auto p-2 border border-[#4F4F4F] text-sm rounded block bg-transparent placeholder-[#4F4F4F] text-[#4F4F4F] focus:ring-grey-500 focus:border-grey-500">
                            <option selected>Filter</option>
                            <option value="US">By Name</option>
                            <option value="CA">By Favorite</option>
                        </select>
                    </div>
                    <button className="bg-[#2F80ED] rounded px-5 text-[#FFFFFF] text-sm">New Task</button>
                </div>
                <div className="flex flex-col justify-start divide-y divide-[#BDBDBD] overflow-auto">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-start">
                            <form className="flex gap-2">
                                <input type="checkbox" id="" name="" value="" />
                                <label for="" className="font-bold text-sm text-[#4F4F4F]">
                                    Close off Case #012920- RODRIGUES, Amiguel
                                </label>
                            </form>
                            <span className="text-xs text-[#EB5757]">2 days left</span>
                            <span className="text-xs text-[#4F4F4F]">09/01/2023</span>
                            <Image
                                onClick={() => setShowTask(!showTask)}
                                className={`${showTask? "" : "hidden"}`}
                                src="/icons/down.svg"
                                alt="show content"
                                width="16"
                                height="16"
                            />
                            <Image
                                onClick={() => setShowTask(!showTask)}
                                className={`${showTask? "hidden" : ""}`}
                                src="/icons/up.svg"
                                alt="hide content"
                                width="16"
                                height="16"
                            />
                            <Image
                                onClick={() => setMore(!more)}
                                src="/icons/more.svg"
                                alt="more"
                                width="16"
                                height="16"
                            />
                            <div className={`${more? "oppacity-100" : "oppacity-0 z-[-1]"} absolute bg-white right-1 mt-5`}>
                                <div className={`flex flex-col justify-center border-[1px] border-[#BDBDBD] rounded p-2 text-sm min-w-[70px]`}>
                                    <button className="flex items-start">
                                        <span className="text-[#EB5757]">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={`${showTask? "hidden" : ""} flex flex-col gap-3 pl-5`}>
                            <div className="flex flex-row justify-start gap-3">
                                <Image
                                    src="/icons/clock.svg"
                                    alt="time"
                                    width="16"
                                    height="16"
                                />
                                <div className="border border-[#4F4F4F] text-sm rounded bg-transparent flex flex-row p-2">
                                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="outline-none border-none bg-transparent"/>
                                    <Image
                                        src="/icons/calendar.svg"
                                        alt="calendar"
                                        width="16"
                                        height="16"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-row justify-start gap-3">
                                <Image
                                    src="/icons/pencil.svg"
                                    alt="description"
                                    width="16"
                                    height="16"
                                />
                                <p className="text-sm">Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}