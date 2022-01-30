import BakeryLogo from '../assets/ProjectLogos/SpeltacularBakingLogo.png';
import StockOverflowLogo from '../assets/ProjectLogos/StockOverflowLogo.png';
import BudgyLogo from '../assets/ProjectLogos/BudgyLogo.png';
import ChessLogo from '../assets/ProjectLogos/ChessLogo.jpeg';
import VeilLogo from '../assets/ProjectLogos/VeilLogo.png';
import SmartWindowsLogo from '../assets/ProjectLogos/SmartWindowsLogo.jpeg';

const Project = ({projectName, stack, date, description, githubLink, devpostLink}) => {
    if (projectName === "Speltacular Baking" ) {
        return (
            <div className="column">
                <img src={BakeryLogo} alt="Speltacular Baking Logo" className="projectLogo"/>
                <h3>{projectName}</h3>
                <h5>{date}</h5>
                <p>Stack: {stack}<br/>{description}<br/><a href={githubLink}>GitHub</a></p>
            </div>
        )
    }
    else if (projectName === "Stock Overflow" ) {
        return (
            <div className="column">
                <img src={StockOverflowLogo} alt="Stock Overflow Logo" className="projectLogo"/>
                <h3>{projectName}</h3>
                <h5>{date}</h5>
                <p>Stack: {stack}<br/>{description}<br/><a href={githubLink}>GitHub</a><br/><a href={devpostLink}>Devpost</a></p>
            </div>
        )
    }
    else if (projectName === "Budgy" ) {
        return (
            <div className="column">
                <img src={BudgyLogo} alt="Budgy Logo" className="projectLogo"/>
                <h3>{projectName}</h3>
                <h5>{date}</h5>
                <p>Stack: {stack}<br/>{description}<br/><a href={githubLink}>GitHub</a><br/><a href={devpostLink}>Devpost</a></p>
            </div>
        )
    }
    else if (projectName === "Checkmate Finder" ) {
        return (
            <div className="column">
                <img src={ChessLogo} alt="Checkmate Finder Logo" className="projectLogo"/>
                <h3>{projectName}</h3>
                <h5>{date}</h5>
                <p>Stack: {stack}<br/>{description}<br/><a href={githubLink}>GitHub</a></p>
            </div>
        )
    }
    else if (projectName === "Veil" ) {
        return (
            <div className="column">
                <img src={VeilLogo} alt="Veil Logo" className="projectLogo"/>
                <h3>{projectName}</h3>
                <h5>{date}</h5>
                <p>Stack: {stack}<br/>{description}<br/><a href={githubLink}>GitHub</a></p>
            </div>
        )
    }
    else if (projectName === "Smart Windows" ) {
        return (
            <div className="column">
                <img src={SmartWindowsLogo} alt="Smart Windows Logo" className="projectLogo"/>
                <h3>{projectName}</h3>
                <h5>{date}</h5>
                <p>Stack: {stack}<br/>{description}<br/><a href={githubLink}>GitHub</a></p>
            </div>
        )
    }
};

export default Project;