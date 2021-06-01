import React from 'react' 
import Button from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import classes from '*.module.css'
import {Link} from 'react-router-dom'
import { Footer } from '../Footer'
import { Head } from '../Head'

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root: {
        padding: '0',
    },
    
    body: {
        "margin": "0",
        "padding": "0",
        "backgroundImage": "url(\"https://thedesignest.net/wp-content/uploads/2019/06/Light-Brown-Wooden-Texture.jpg\")",
        "fontFamily": "Arial, Helvetica, sans-serif"
      },
      grid_wrapper: {
        "display": "grid",
        "width": "100vw",
        "height": "100vh",
        "gridTemplateColumns": "1fr 4fr 1fr",
        "gridTemplateRows": "1fr 3.5fr .5fr",
        "gridTemplateAreas": "\"header   header    header\"\n    \"right    middlepics   blank\"\n    \"footer   footer       footer\""
      },
      middlepics: {
        "backgroundColor": "white"
      },
      who_we_are: {
        "float": "left",
        "margin": "2.5vh 1vw 0vh 2vw",
        "width": "15vw",
        "height": "55vh",
        "backgroundColor": "#800000"
      },
      h3: {
        "fontWeight": "lighter",
        "fontSize": "1em",
        "marginLeft": "1vw",
        "padding": "1em 0 0 .75em",
        "color": "white"
      },
      line: {
        "color": "white",
        "paddingLeft": "1.20em"
      },
      ul: {
        "listStyle": "none",
        "fontSize": "17px",
        "lineHeight": "175%",
        "color": "white",
        "padding": "1em 1em 1em 1.5em"
      },
      logo_img: {
        "display": "block",
        "margin": "0em 0em 0em 1.0em"
      },
      h6: {
        "margin": ".5em 0em 0em 1em",
        "fontSize": "17px",
        "color": "white"
      },
      p: {
        "margin": "0em .8em 0em 1em",
        "fontSize": "15px",
        "color": "white"
      },
      info_text: {
        "float": "left",
        "width": "45vw",
        "height": "62vh",
        "marginTop": "2.3vh",
        "backgroundColor": "white"
      },
      div_info_text_p: {
        "color": "black",
        "fontSize": "18px",
        "lineHeight": "160%",
        "margin": ".1vh 0 2vh 1vw"
      },
      pictures: {
        "backgroundColor": "white",
        "width": "45vw",
        "height": "47.5vh"
      },
      inline_pics: {
        "display": "inline-block",
        "marginLeft": "1vw",
        "border": "4px double rgb(71, 70, 70)"
      },
      inline_pics2: {
        "display": "inline-block",
        "marginLeft": ".25vw",
        "border": "4px double rgb(71, 70, 70)"
      }
    })

export const WhoWeAre = (props:Props) => {
    const classes = useStyles();

    return (
        <body className={classes.body}>
             <Head title='header'/>
                <div className="right" />
                {/*Main Body */}
                <div className={classes.middlepics}>
                <div className={classes.who_we_are}>
                    {/*Left Column*/}
                    <h3 className={classes.h3}>WHO WE ARE</h3>
                    <p className={classes.p}>
                        <p className={classes.line}> ________________</p>
                    </p>
                    <ul className={classes.ul}>
                    <li>Welcome</li>
                    <li>Attorneys</li>
                    <li>Staff</li>
                    <li>Reputation</li>
                    <li>History</li>
                    </ul>
                    <img className={classes.logo_img} src="https://via.placeholder.com/200x140" alt="place holder logo image" />
                    <h6 className={classes.h6}>Where We Work</h6>          
                    <p className={classes.p}>Find out more about our work coverage area.</p>  
                </div>
                {/*Right Columnn*/}
                <div className={classes.info_text}>
                    <p className={classes.p}>Who we are? That is one of the most important questions a prospective client can ask us.
                    Our answer - one of the most respected law firms in the county that cares about your case, your business, and solving
                    your problem. We invite you to get to know our attourneys better and understand the depth of experience and talent
                    we have in the links below.</p>
                    <div className={classes.pictures}>
                    <img className={classes.inline_pics} src="https://via.placeholder.com/370X130" alt="Nameplate" />
                    <img className={classes.inline_pics}  src="https://via.placeholder.com/370X130" alt="Boardroom Table" />              
                    <img className={classes.inline_pics} src="https://via.placeholder.com/370X130" alt="Waiting Area" />
                    <img className={classes.inline_pics}  src="https://via.placeholder.com/370X130" alt="Skyscraper" />                    
                    <img className={classes.inline_pics} src="https://via.placeholder.com/370X130" alt="Books" />
                    </div>                
                </div>
                </div>
                <div className="blank" />
                <footer> <Footer title='Footer'/> </footer>
      </body>
    )
}