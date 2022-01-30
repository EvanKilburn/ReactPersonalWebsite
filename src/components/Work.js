import FormativeLogo from '../assets/CompanyLogos/FormativeLogo.jpeg';
import AmazonLogo from '../assets/CompanyLogos/AmazonLogo.png';
import TheBoxLogo from '../assets/CompanyLogos/TheBoxLogo.jpeg';

const Work = ({companyName, position, stack, dates, companyLink}) => {
    if (companyName === "Formative Innovations" ) {
        return (
            <a href={companyLink} className="columnCompany noUnderline">
                <img src={FormativeLogo} alt="Formative Innovations Logo" className="companyLogo"/>
                <h3>{position} @ {companyName}</h3>
                <h5>{dates}</h5>
                <p>Stack: {stack}</p>
            </a>
        )
    }
    else if (companyName === "Amazon") {
        return (
            <a href={companyLink} className="columnCompany noUnderline">
                <img src={AmazonLogo} alt="Amazon Logo" className="companyLogo"/>
                <h3>{position} @ {companyName}</h3>
                <h5>{dates}</h5>
                <p>Stack: {stack}</p>
            </a>
        )
    }
    else if (companyName === "THE BOX") {
        return (
            <a href={companyLink} className="columnCompany noUnderline">
                <img src={TheBoxLogo} alt="THE BOX Logo" className="companyLogo"/>
                <h3>{position} @ {companyName}</h3>
                <h5>{dates}</h5>
                <p>Stack: {stack}</p>
            </a>
        )
    }
};

export default Work;