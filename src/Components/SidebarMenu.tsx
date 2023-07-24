import PublicIcon from '@mui/icons-material/Public';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';


export const SidebarMenu = [
    {
        title: "Customer Overview",
        icon: <PublicIcon/>,
        link: "/Home"
    },
    {
        title: "Reports",
        icon: <FormatListBulletedIcon/>,
        link: "/reports"
    },
    {
        title: "File transcodings",
        icon: <NoteAddRoundedIcon/>,
        link: "/files"
    },
    {
        title: "Notification Center",
        icon: <NotificationsIcon/>,
        link: "/notifications"
    }

]
  
