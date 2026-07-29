import "./Header.css";
import "./Sider.jsx";

function Header({ showSider }) {

    return(
        //Search, Notification and Acc
        <div className={`Header ${showSider ? "expanded" : "collapsed"}`}>
            <div className="left">
                <input type="text" placeholder="Search task ...." />
            </div>

            <div className="right">
                <img src={`${import.meta.env.BASE_URL}icons/notification.png`} alt="Notification" />
                <img src="/public/icons/user.png" alt="user" />
            </div>

        </div>
    );
    
}

export default Header;