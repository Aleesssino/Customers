import "../Styles/_sidebar.scss";
import { SidebarMenu } from "./SidebarMenu";

function SideBar() {
  return (
    <div className="sidebar">
      <p>SITE ADMIN</p>

      <ul>
        {SidebarMenu.map((val, key) => {
          return (
            <li
              key={key}
              className="sidebarrow"
              id={window.location.pathname == val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBar;
