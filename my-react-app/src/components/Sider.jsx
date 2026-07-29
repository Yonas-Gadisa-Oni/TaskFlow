import "./Sider.css";

function Sider({showSider, setShowSider}){

    return(
        //side nav bar
        <div className = {showSider ? "side_nav" : "side_nav closed"}>
            <div className = "top-side">
                <div className="main-img">
                    <img src={`${import.meta.env.BASE_URL}icons/list.png`} onClick={() => setShowSider(true)} alt="" />
                    <span>TaskFlow</span>
                    <button className="nav_top_icon" onClick={() => setShowSider(false)}>
                        <img className="nav_icon" src={`${import.meta.env.BASE_URL}icons/angle-right.png`} alt="" />
                    </button>
                </div>                    
            </div>

            <div className="main-side">
                <div className="nav">
                    <div className="nav-item">
                        <img src={`${import.meta.env.BASE_URL}icons/Dashboard.png`} alt="Dashboard" />
                        <span>Dashboard</span>
                    </div>

                    <div className="nav-item">
                        <img src={`${import.meta.env.BASE_URL}icons/inbox.png`} alt="Inbox" />
                        <span>Inbox</span>
                    </div>

                    <div className="nav-item">
                        <img src={`${import.meta.env.BASE_URL}icons/My Tasks.png`} alt="My Tasks" />
                        <span>My Task</span>
                    </div>

                    <div className="nav-item">
                        <img src={`${import.meta.env.BASE_URL}icons/calendar.png`} alt="Calendar" />
                        <span>Calendar</span>
                    </div>

                    <div className="nav-item">
                        <img src={`${import.meta.env.BASE_URL}icons/Reports.png`} alt="Reports" />
                        <span>Reports</span>
                    </div>
                </div>
            </div>

            <div className = "project-side">
                <div className = "project-nav">
                    <p>PROJECTS</p>
                    <ul>
                        <li>Product</li>
                        <li>Engineering</li>
                        <li>Research</li>
                        <li>Strategy</li>
                        <li>Legal</li>
                    </ul>
                </div>        
            </div>

            <div className = "buttom-side">
                <div className="nav-item">
                    <img className="setting" src={`${import.meta.env.BASE_URL}icons/settings.png`} alt="" />
                        <span>Setting</span>
                </div>        
            </div>
        </div>
    );
}


export default Sider;