/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import CardHeader from "./creative-tim/Card/CardHeader.js";
import GridContainer from "./creative-tim/Grid/GridContainer.js";
import GridItem from "./creative-tim/Grid/GridItem.js";
import Card from "./creative-tim/Card/Card.js";
import CardBody from "./creative-tim/Card/CardBody.js";
import Muted from "./creative-tim/Typography/Muted.js";

import productFeatures from "./jss/productFeatures.js";

const useStyles = makeStyles(productFeatures);

export default function ProductFeatures({ ...rest }) {
  const classes = useStyles();
  return (
<div className={classes.projects}>
<div className={classes.container}>
  <GridContainer>
    <GridItem
      xs={12}
      sm={8}
      md={8}
      className={
        classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
      }
    >
      <h3 className={classes.title}>
        Free digital tools to empower your mutual aid organization
      </h3>
      <h5 className={classes.description}>
      Resilience is the ability to recover from changes or disasters. 
      This is a grassroots crisis response project built by a global 
      community of developers, designers, project managers, lawyers, 
      data scientists, strategists, writers, and translators – 
      creating apps to help people help eachother.
      </h5>
      <div className={classes.sectionSpace} />
    </GridItem>
  </GridContainer>
  <GridContainer>
    <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkpr-projects-section-sections"
          target="_blank"
        >
          <CardHeader image plain>
            <img
              src={
                "https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474"
              }
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/83/original/opt_mk_react_thumbnail.jpg?1525851474')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a
            href="https://www.creative-tim.com/product/material-kit-react?ref=mkpr-projects-section-sections"
            target="_blank"
          >
            <h4 className={classes.cardTitle}>
              Accept Requests
            </h4>
          </a>
          <h6 className={classes.description}>FREE UI KIT</h6>
          <p
            className={classes.description + " " + classes.marginTop20}
          >
            Resilience is the ability to recover from changes or disasters. This is a
            grassroots crisis response project built by a global community 
            of developers, designers, project managers, lawyers, 
            data scientists, strategists, writers, and translators – 
            creating apps to help people help each other.
          </p>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a
          href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=mkpr-projects-section-sections"
          target="_blank"
        >
          <CardHeader image plain>
            <img
              src="https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/66/thumb/opt_lbdp_react_thumbnail.jpg?1509466309')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a
            href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=mkpr-projects-section-sections"
            target="_blank"
          >
            <h4 className={classes.cardTitle}>
              Coordinate &amp; Schedule
            </h4>
          </a>
          <h6 className={classes.description}>Premium Template</h6>
          <p
            className={classes.description + " " + classes.marginTop20}
          >
            Light Bootstrap Dashboard PRO is a Bootstrap 3 Admin Theme
            designed to look simple and beautiful. Forget about boring
            dashboards and grab yourself a copy to kickstart new
            project!
          </p>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={4} md={4}>
      <Card plain className={classes.card2}>
        <a
          href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=mkpr-projects-section-sections"
          target="_blank"
        >
          <CardHeader image plain>
            <img
              src="https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306"
              alt="..."
            />
            <div
              className={classes.coloredShadow}
              style={{
                backgroundImage:
                  "url('https://s3.amazonaws.com/creativetim_bucket/products/73/original/opt_nudp_react_thumbnail.jpg?1518533306')",
                opacity: "1"
              }}
            />
          </CardHeader>
        </a>
        <CardBody plain>
          <a
            href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react?ref=mkpr-projects-section-sections"
            target="_blank"
          >
            <h4 className={classes.cardTitle}>
              Pay &amp; Deliver Resources
            </h4>
          </a>
          <h6 className={classes.description}>Premium Template</h6>
          <p
            className={classes.description + " " + classes.marginTop20}
          >
            Now UI Dashboard React is an admin dashboard template
            designed by Invision and coded by Creative Tim. It is built
            on top of Reactstrap, using Now UI Dashboard and it is fully
            responsive.
          </p>
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
</div>
</div>);
}