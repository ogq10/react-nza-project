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
    
    bold: {
        fontweight: 'bold'
    },

    body: {
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundImage: "url(https://thedesignest.net/wp-content/uploads/2019/06/Light-Brown-Wooden-Texture.jpg)"
    },
    
    grid_wrapper: {
        display: "grid",
        width: "100vw",
        height: "100vh",
        gridTemplateColumns: "1.5fr 3.5fr 1.5fr 1.5fr",
        gridTemplateRows: "1fr 3fr 0.5fr",
        gridTemplateAreas: "\"bg-left    logo    logo    bg-right\"\n        \"bg-left    cn      side    bg-right\"\n        \"bg-left    footer  footer  bg-right\""
    },

    logo: {
        gridArea: "logo",
        backgroundColor: "white"
      },
      cn: {
        gridArea: "cn",
        backgroundColor: "white"
      },
      home_image: {
        maxWidth: "100%",
        height: "auto",
        padding: "0.5vmin",
        marginTop: "32px",
        marginLeft: "75px",
        marginBottom: "50px",
        border: "1.5px solid #a09fa0",
        outline: "3px solid #929091",
        outlineOffset: "5px"
      },
      cn_text_header: {
        lineHeight: "1.25",
        marginLeft: "75px",
        marginRight: "120px"
      },
      cn_text: {
        lineHeight: "1.25",
        marginLeft: "75px",
        marginRight: "120px",
        marginBottom: "40px"
      },

      side: {
        gridArea: "side",
        backgroundColor: "white"
      },
      scrollbar: {
        padding: "5px",
        marginTop: "25px",
        backgroundColor: "#800000",
        width: "265px",
        height: "400px",
        overflowX: "hidden",
        overflowY: "scroll"
      },
        scrollbar_p: {
        margin: "5% 30% 0 5%",
        lineHeight: "1.25",
        color: "white"
      },
      hr: {
        margin: "5% 30% 0 5%",
        lineHeight: "1.25",
        color: "white"
      },
      contact_info: {
        marginTop: "120px",
        marginLeft: "30px",
        fontSize: "90%"
      },
      contact_email: {
        color: "#800000"
      },
      footer: {
        gridArea: "footer",
        borderTop: "2px solid black"
      },
      footnav_a: {
        color: "inherit",
        textDecoration: "none"
      },
      footnav_ul: {
        float: "none",
        marginBottom: "0.5vh"
      },
      footnav: {
        float: "none",
        textAlign: "center"
      },
      footnav_ul_li: {
        float: "none",
        display: "inline"
      },
      copyright: {
        color: "grey",
        fontSize: "0.75em",
        marginTop: "0px"
      },
      header: {
        gridArea: "logo",
        backgroundColor: "white",
        marginBottom: "0em"
      },
    
    image_header_img: {
        marginLeft: "1vw",
        marginTop: "1vh"
      },
      topnav: {
        borderTop: "2px solid black",
        paddingBottom: "0px",
        height: "fit-content",
        borderBottom: "2px solid black",
        display: "inline-block",
        width: "98%",
        textAlign: "center",
        marginLeft: "1vw"
      },
      topnav_ul: {
        listStyleType: "none",
        marginTop: "0",
        textAlign: "center",
        display: "inline"
      },
      topnav_li: {
        display: "inline-block",
        float: "left",
        marginRight: "4%",
        marginLeft: "0.1",
        paddingRight: "3.5%",
        paddingLeft: "2%",
        paddingTop: "1vh",
        paddingBottom: "1vh",
        borderRight: "1px solid grey"
      },
      contactus: {
        borderRight: "0px solid grey",
        marginLeft: "2%"
      },
      topnav_a: {
        display: "block",
        color: "inherit",
        textDecoration: "none"
      }
    })

export const Home = (props:Props) => {
    const classes = useStyles();


return (
    <body className={classes.body}>
        <header><Head title='header'/> </header>
    
            <div className={classes.cn}>
                <img className={classes.home_image} src="https://via.placeholder.com/700x450" alt="Placeholder for Home Image" />
                <p className={classes.cn_text_header}>Welcome to our website!</p>
                <p className={classes.cn_text}>Nielsen, Zehe &amp; Antas, PC is a nationally recognized and respected law firm that offers its clients
                bit girm experience and talent in a smaller firm environment. Our reputation is very important to
                us. We solve our client's problems in some situations and prevent them all together in other
                situations. We welcome you to our website to learn more about us.</p>
            </div>


            <div className={classes.side}>
                <div className={classes.scrollbar}>
                <p className={classes.bold}>NEWS FEED</p>
                <hr />
                <p>In a 1983/Title IX claim brought against an Illinois school district and its
                    administrators, Robert Lentz was able to obtain a Motion to Dismiss with prejudice from
                    the Fed Dist Court of Illinois. <br />
                    <br />
                    Nielsen, Zehe &amp; Antas. P.C. is pleased to announce that Vaughn A. Drozd has joined the Firm 
                    Associate Attorney. <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor aut officiis sit 
                    dolore. Illo officiis eaque labore officia eos, adipisci ex dicta error iure facilis recusandae, est, 
                    modi quod! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, nobis! Consequatur veritatis 
                    accusamus eius laborum dignissimos sunt architecto corporis qui modi, quas laboriosam aut quasi animi 
                    ducimus error quae facilis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, commodi. 
                    Enim, unde nisi corporis, officiis nobis consequuntur velit eius repellat cupiditate est numquam molestias 
                    minus expedita voluptatibus possimus magnam libero.
                </p>
            
        


                <div>
                <p className={classes.contact_info}>
                <span className={classes.bold}>Nielsen, Zehe &amp; Antas, P.C.</span> <br />
                55 West Monroe Street, Suite 1800 <br />
                Chicago, Illinois 60603 <br />
                312-322-9900 phone <br />
                312-322-9977 fax <br />
                <a className={classes.contact_email} href="ENielsen@nzalaw.com">ENielsen@nzalaw.com</a>
                </p>

            </div>
            </div>
            </div>
        
            <footer> <Footer title='footer'/> </footer>

    </body>

)}