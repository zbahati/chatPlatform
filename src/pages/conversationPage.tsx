import { Outlet } from "react-router-dom"
import { ConversationSideBar } from "../components/conversation/conversationSidebar"
import { Page } from "../utils/styles"

export const ConversationPage = () => {
    return (
        <Page>
            <ConversationSideBar />
           <Outlet />
        </Page>
    )
}