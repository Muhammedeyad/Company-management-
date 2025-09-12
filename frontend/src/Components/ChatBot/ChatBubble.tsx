import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import type { ChatType } from '../../types/CompanyAdmin/PropTypes';
import { EnterAnimation } from '../../Animations/EnterAnimation';

export const ChatBubble: React.FC<ChatType> = ({ theme, messages }) => {

    return (

        <section className={`flex-1 h-full overflow-y-auto ${theme ? "bg-blue-100" : "bg-base-100"} px-5 md:px-10 py-4  relative md:mt-0 mt-25 `}>

            {messages?.length > 0 && messages?.map((message, idx) => (
                <EnterAnimation><div key={idx} className={`chat ${message.position ? 'chat-end' : 'chat-start'} mb-11`}>
                    <div className="">
                        {!message.position ? <FaRobot /> : <FaUser />}
                    </div>
                    <div className="chat-header">
                        Anakin
                        <time className="text-xs opacity-50">12:46</time>
                    </div>
                    <div className={`chat-bubble ${theme && message.position ? 'bg-white text-black' : 'bg-primary text-white'} px-10 border-1 border-gray-400`}>{message.message}</div>
                    <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div></EnterAnimation>
            ))

            }
        </section>
    )
}
