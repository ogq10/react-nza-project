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
          backgroundImage: "url(https://thedesignest.net/wp-content/uploads/2019/06/Light-Brown-Wooden-Texture.jpg)"
        },
        gridwrapper: {
          "display": "grid",
          "width": "100vw",
          "height": "100vh",
          "gridTemplateColumns": "1fr 1fr 3fr 1fr",
          "gridTemplateRows": "1fr 3fr 0.5fr",
          "gridTemplateAreas": "\"background-left header      header       background-right\"\n        \"background-left whatwedo description  background-right\"\n        \"background-left footer      footer       background-right\""
        },
        description_box: {
          "gridArea": "description",
          "background": "white",
          "display": "block"
        },
        description_h3: {
          "marginLeft": "0.6vw",
          "fontWeight": 100
        },
        description: {
          "gridArea": "description",
          "backgroundColor": "white"
        },
        images: {
          "border": "10px solid transparent"
        },
        Box1_img: {
          "height": "10em",
          "width": "20em",
          "borderStyle": "double",
          "borderColor": "black",
          "position": "relative"
        },
        Box2_img: {
          "height": "10em",
          "width": "20em",
          "borderStyle": "double",
          "borderColor": "black"
        },
        whatwedo: {
          "gridArea": "whatwedo",
          "backgroundColor": "white",
          "marginTop": "0em"
        },
        background_left: {
          "gridArea": "backgroud-left"
        },
        background_right: {
          "gridArea": "background-right"
        },
        box: {
          "backgroundColor": "#800000",
          "height": "90%",
          "width": "90%",
          "color": "white",
          "marginLeft": "1vw",
          "marginTop": "2vh"
        },
        box_title: {
          "marginLeft": "5%",
          "paddingTop": "7%"
        },
        line: {
          "border": "1px solid white",
          "marginLeft": "5%",
          "marginRight": "20%"
        },
        services: {
          "marginLeft": "7%",
          "fontSize": "0.8em"
        },
        box_image: {
          "marginBottom": "0"
        },
        attorneys: {
          fontWeight: 100,
          "marginBottom": "0",
          "marginTop": "0"
        },
        meet: {
          "marginTop": "0"
        },
        list_head: {
          "marginBottom": "1px"
        },
        sub_list: {
          "display": "block",
          "marginLeft": "5%",
          "marginTop": "1px",
          "marginBottom": "1px"
        }
    })

export const WhatWeDo = (props:Props) => {
    const classes = useStyles();

    
    return (
    <body className={classes.body}>
      <div className={classes.gridwrapper}>
        <div className={classes.background_left} />
        <div className={classes.background_right} />
        
        <Head title='header'/>

        
        <div className={classes.whatwedo}>
          <div className={classes.box}>
            <p className={classes.box_title}>WHAT WE DO</p>
            <br />
            <div className={classes.line} />
            <br />
            <div className={classes.services}>
              <p className={classes.list_head}>Subrogation</p>
              <p className={classes.sub_list}>Property</p>
              <p className={classes.sub_list}>Workers Compensation</p>
              <p className={classes.list_head}>Litigation</p>
              <p className={classes.sub_list}>Apellate</p>
              <p className={classes.sub_list}>Commercial</p>
              <p className={classes.sub_list}>Defense</p>
              <p className={classes.sub_list}>Labor/Employment</p>
              <p className={classes.list_head}>Business</p>
              <p className={classes.sub_list}>Brokerage Agreement</p>
              <p className={classes.sub_list}>Business Formation</p>
              <p className={classes.sub_list}>Business Related Contracts</p>
              <p className={classes.sub_list}>Labor/Employment</p>
              <p className={classes.list_head}>Transportation</p>
              <br /><br />
              <div className={classes.box_image}>
                <img src="https://via.placeholder.com/200x100" alt="placeholder" />
              </div>
              <p className={classes.attorneys}>Attorneys</p>
              <p className={classes.meet}>Meet our prestigious partners and<br />esteemed officials.</p>
            </div>
          </div>
        </div>
        <footer> <Footer title='Footer'/> </footer>
        
      </div>
    </body>
)}