import './footer.css';
import {MaterialUISwitch} from "../switch";

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <div className="all">
                    <p>all tasks 0</p>
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