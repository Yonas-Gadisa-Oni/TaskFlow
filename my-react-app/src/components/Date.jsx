import "./Date.css";

function Date ({ showSider }){
    return (
        <div className={`Date ${showSider ? "expanded" : "collapsed"}`}>
            <div className="left">
                <h3>My Task</h3>
                <p>Thursday, july 17</p>
            </div>

            <div className="right">
                <button>
                    <img src="/my-react-app/public/icons/plus (1).png" alt="" />
                    <span style={{ color: "white" }}>AddTask</span>
                </button>
            </div>
        </div>
    );
}

export default Date;