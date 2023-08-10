import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { TiSocialLinkedinCircular } from "react-icons/ti";


import PropTypes from "prop-types";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
//import { withStyles } from "@mui/material/styles";

/* const styles = () => ({
  textTwitter: {
    color: "#9e9e9e",
    fontSize: 13
  },

  followUsText: {
    color: "#e0e0e0",
    fontSize: 14,
    textAlign: "right"
  },
  yourAccountText: {
    color: "#e0e0e0",

    fontSize: 14,
    textAlign: "left"
  },
  headerText: {
    color: "#e0e0e0",
    padding: "10px",
    textAlign: "center",
    fontSize: 18,
    paddingTop: "20px",
    marginBottom: "-40px",
    marginTop: "-20px"
  },
  BackToTopButton: {
    color: "#e0e0e0",
    padding: "10px",
    textAlign: "center",
    fontSize: 14,
    paddingTop: "20px",
    marginBottom: "-40px",
    marginTop: "-20px",
    textTransform: "none"
  },
  paragraph: {
    color: "#e0e0e0",
    padding: "20px",
    paddingTop: "30px",
    textAlign: "center",
    fontSize: 14,
    marginBottom: "-20px"
  },
  copyrightText: {
    color: "#e0e0e0",
    padding: "10px",
    fontSize: 14,
    textAlign: "center",
    paddingBottom: "30px"
  }
}); */

class FooterPage extends React.Component {
  render() {
  //  const { classes } = this.props;
    return (
      <div >
        <MDBFooter
          style={{
            backgroundColor: "black"
          }}
        >
          <MDBContainer fluid>
            <MDBRow>
              <MDBCol md="6">
           

             
                <div style={{ paddingBottom: "10px" }} />
     
              </MDBCol>
              <MDBCol md="6">
                <h5
                  //className={classes.followUsText}
                  style={{
                    paddingRight: this.props.width / 5 - 10,
                   
                  }}
                >
                   
                   

                    <a
                    //  className={classes.textTwitter}
                      href="https://www.linkedin.com/in/pranav00100/"
                    >
                       Linkedin
                    </a>
          
                </h5>
            
              </MDBCol>

            
            </MDBRow>
          </MDBContainer>
         
            <MDBContainer
              fluid
              
              
            >
                <Typography sx={{color: "#9e9e9e"}}>
                Website designed and coded by Pranav Kalra
                </Typography>
             
            </MDBContainer>
            <MDBContainer
              fluid
              
            >
                  <Typography sx={{color: "#9e9e9e"}}>
              &copy; {new Date().getFullYear()} Copyright:
             Pranav Kalra
             </Typography>
            </MDBContainer>
        </MDBFooter>
      </div>
    );
  }
}



export default (FooterPage);
