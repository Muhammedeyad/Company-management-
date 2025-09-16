import React, { useState } from 'react'
import { IoExitOutline } from "react-icons/io5";
import { RiRobot2Line } from "react-icons/ri";
import { ChatBubble } from '../../Components/ChatBot/ChatBubble';
import { FaAnglesRight } from 'react-icons/fa6';
import { MoonIcons } from '../../Components/MyIcons/MoonIcons';
import { SunIconC } from '../../Components/MyIcons/SunIcon';

const ChatbotPage: React.FC = () => {
    let [messages, setMessages] = useState([
        { message: 'hi', position: true },
        { message: 'how can i assist you !', position: false },
        { message: 'thank you for you kindness', position: true },
        { message: "it's my work don't thank me", position: false },

    ])
    const [theme, setTheme] = useState(true)
    const [newMessage, setNewMessage] = useState<string>("")
    const handleAppendMessage = () => {
        const currentNewMessages = [...messages, { message: newMessage, position: true }]
        setNewMessage("")
        setMessages(currentNewMessages)
        setTimeout(() => {
            const newmessages = [...currentNewMessages, { message: "Wait for a few minutes", position: false }]
            setMessages(newmessages)
        }, 1000)

    }

    const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewMessage(e.target.value)
    }
    const handleKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key == "Enter") {
            handleAppendMessage()
            return
        }
        handleChangeEvent()
    }
    return (
        <main className='w-full flex flex-col bg-base-100 text-base-content ' data-theme={theme ? "light" : 'dark'}>
            <section className='flex fixed top-0 z-3   w-full justify-between px-8 py-4 items-center shadow-sm bg-base-100 '>
                <section className=''>
                    <h4 className={`font-bold md:text-xl text-lg `}>Welcome to the chatbot</h4>
                </section>
                <section className='flex  gap-6 items-center'>
                    <div className='bg-primary p-2 rounded-full text-base-100  cursor-pointer'>
                        <div>
                            <label className="swap swap-rotate w-5 h-5 ">
                                <input type="checkbox" className="theme-controller " value="retro" onClick={() => setTheme(!theme)} />
                                <SunIconC />
                                <MoonIcons />

                            </label>
                        </div>
                    </div>
                    <button className='flex gap-2 btn px-4 btn-primary text-white'><IoExitOutline size={20} /><p className='text-thin'>Signout</p></button>
                </section>
            </section>
            <section className='flex md:pt-15 h-screen'>
                <section className='lg:w-1/5 w-2/5 p-4  shadow-lg sticky top-14  h-[calc(100%-0rem)] border-1 border-gray-200  hidden md:block  '>
                    <p className='text-base-600 mt-2'>Chat modes</p>
                    <ul className='mt-3'>
                        <li className='flex gap-3 items-center bg-gray-color py-4 px-3 text-violet-600 rounded shadow-lg'><RiRobot2Line /><span className=''>Hi_Doctor</span></li>
                    </ul>
                </section>
                <div className='w-full flex flex-col relative '>
                    <div className='bg-base-100 w-full h-21 hidden md:flex gap-3  items-center sticky top-0 px-4 shadow-lg  border-1 border-gray-200'>
                        <p className='p-1.5 rounded-full bg-green-400 w-2'></p>
                        <span className=''><RiRobot2Line size={28} /></span>
                    </div>

                    <div className='overflow-y-auto h-screen shadow-lg'>
                        <ChatBubble theme={theme} messages={messages} />
                    </div>
                    <div className={`absolute bottom-0 px-3 md:px-10 w-full items-center flex ${theme ? 'bg-gray-100' : "bg-base-100"} `}>
                        <p className=' bottom-0 p-2 w-full  '> <input type="text" className={`border-1 border-black rounded-full py-3  ${!theme && 'bg-white text-black ' || 'bg-base-100'} w-full px-5 `} placeholder='Type message here' onKeyDown={(e) => handleKeyEvent(e)} onChange={(e) => handleChangeEvent(e)} value={newMessage} /></p>
                        <span className=' bg-blue-900 p-3 rounded-full text-white cursor-pointer' onClick={handleAppendMessage}><FaAnglesRight /></span>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default ChatbotPage