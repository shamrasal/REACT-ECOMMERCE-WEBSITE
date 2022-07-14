import youtubeIcon from '../Assets/youtube.png'
import facebookIcon from '../Assets/facebook.png'
import spotifyIcon from '../Assets/spotify.png'
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div>
            <div className={classes.footer}>
                <h1 className={classes.footertitle}>The Generics</h1>
                <div className={classes.img1}>
                    <img alt='youtubeIcon' className={classes.img} src={youtubeIcon}></img>
                    <img alt='youtubeIcon' className={classes.img} src={facebookIcon}></img>
                    <img alt='youtubeIcon' className={classes.img} src={spotifyIcon}></img>
                </div>
            </div>
        </div>
    )
}

export default Footer
