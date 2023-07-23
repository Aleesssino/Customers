import "../Styles/_sidebar.scss"
import { SidebarMenu } from "./SidebarMenu";

function SideBar() {
  return (
    <div className="sidebar">
        <p>SITE ADMIN</p>

        <ul>
        {SidebarMenu.map((val, key) => {
            return (
                <li key={key} onClick={() => {window.location.pathname = val.link}}>
                    <div>
                        {val.icon}
                    </div>
                    <div>
                        {val.title}
                    </div>
                </li>
            )    
        })
        }
        </ul>
    </div>
  )
}

export default SideBar;