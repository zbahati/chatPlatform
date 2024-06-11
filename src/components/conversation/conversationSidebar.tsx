import { ConversationSideBarStyle } from "../../utils/styles"
import { IoChatboxEllipsesSharp } from "react-icons/io5";

export const ConversationSideBar = ()=>{
    return (
        <ConversationSideBarStyle>
           <header>
            <h1>Conversation</h1>
            <IoChatboxEllipsesSharp size={32} color="white" />
           </header>
        </ConversationSideBarStyle>
    )
}