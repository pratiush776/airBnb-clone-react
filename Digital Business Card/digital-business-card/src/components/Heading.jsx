import profile from '../assets/images/profile.jpeg';
import LinkButton from './LinkButtons';


export default function Heading(){
    return(
        <div className="header">
            <div className='profile-picture-container'>
                <img className='profile-picture' src={profile} alt="Profile Picture"></img>
            </div>
            <div className='description'>
                <h1>Pratiush Karki</h1>
                <h3>Aspiring Software Engineer</h3>
                <h6>Junior at Caldwell University</h6>
            </div>

            <div className='links'>
                <LinkButton text="Email" link="https://mail.google.com/"/>
                <LinkButton text="Linkedin" link="https://www.linkedin.com/"/>
            </div>
        </div>
    )
}