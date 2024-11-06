export type InputType={
    fullName:string,
    userName:string,
    password:string,
    confirmpassword:string,
    gender:"male"|"female"|""
}

export type SigninType={
    userName:string,
    password:string,

}




export type ConversationType={
    fullName:string,
    profilePic:string,
    userName:string,
    _id:string
}

export type MessageType={
    senderId:string,
    receiverId:string,
    message:string,
    _id:string,
    createdAt:string,
    updatedAt:string,
    
}
export type useConverswationType={
    selectedConversation:ConversationType|null,
    setSelectedConversation:(selectedConversation:ConversationType|null)=>void,
    messages:MessageType[],
    setMessages:(messages:MessageType[])=>void
}