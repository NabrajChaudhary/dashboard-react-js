import Meter from "./components/Icons/Meter";
import Project from "./components/Icons/Project";
import User from "./components/Icons/User";
import UserGroup from "./components/Icons/UserGroup";
import Dashboard from "./pages/dashboard";
import Groups from "./pages/groups";
import Projects from "./pages/projects";
import Role from "./pages/role";
import Ticket from "./pages/ticket";
import TicketStatus from "./pages/ticketStatus";
import Users from "./pages/users";
import Tickets from "./components/Icons/Ticket";
import Chat from "./components/Icons/Chat";
import Time from "./components/Icons/Time";
import Roles from "./components/Icons/Role";

 export const routesLink =[
    {
        path:"/",
        name:"Main Dashboard",
        Element:<Dashboard/>,
        icon:<Meter/>
    },
    {
        path:"/user",
        name:"User",
        Element:<Users/>,
        icon:<User/>

    },
    {
        path:"/groups",
        name:"Groups",
        Element:<Groups/>,
        icon:<UserGroup/>
    },
    {
        path:"/project",
        name:"Project",
        Element:<Projects/>,
        icon:<Project/>
    },
    {
        path:"/ticket-status",
        name:"Ticket Status",
        Element:<TicketStatus/>,
        icon:<Time/>
    },
    {
        path:"/role",
        name:"Role",
        Element:<Role/>,
        icon:<Roles/>
    },
    {
        path:"/ticket",
        name:"Ticket",
        Element:<Ticket/>,
        icon:<Tickets/>
    },
    {
        path:"/sms",
        name:"SMS/Email",
        icon:<Chat/>
    },
 ]