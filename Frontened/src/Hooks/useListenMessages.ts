import { useContext, useEffect } from "react";


import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sound/ui-4-sound-effect-notification-test-242230.mp3";
import { SocketContext } from "../context/SocketContext";

const useListenMessages = () => {
	const { socket } = useContext(SocketContext);
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages([...messages, newMessage]);
		});

		return () => {socket?.off("newMessage")};
	}, [socket, setMessages, messages]);
};
export default useListenMessages;