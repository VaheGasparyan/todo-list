import {FC} from "react";

import {MaterialUISwitch} from "../switch";
import {IFooterPropsInterface} from "interfaces/footerPropsInterface";

import './footer.css';
const Footer:FC <IFooterPropsInterface> = ({ todo }) => {
    return (
        <footer>
            <div className="wrapper">
                <div className="all">
                    <p>all tasks {todo.length}</p>
                </div>
                <span className='slash'>/</span>
                <div className="completed">
                    <p>completed tasks {todo.filter(item => item.checked).length}</p>
                </div>
            </div>
            <div className="switch">
                <MaterialUISwitch />
            </div>
        </footer>
    );
};

export default Footer;