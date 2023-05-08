import './footer.css';
import {MaterialUISwitch} from "../switch";
import {FC} from "react";
import {IFooterPropsInterface} from "interfaces/footerPropsInterface";

const Footer:FC <IFooterPropsInterface> = ({ todo }) => {
    return (
        <footer>
            <div className="wrapper">
                <div className="all">
                    <p>all tasks {todo.length}</p>
                </div>
                <span className='slash'>/</span>
                <div className="completed">
                    <p>completed tasks 0</p>
                </div>
            </div>
            <div className="switch">
                <MaterialUISwitch />
            </div>
        </footer>
    );
};

export default Footer;