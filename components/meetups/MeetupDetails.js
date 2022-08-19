import { Fragment } from "react"
import Image from 'next/image'

import classes from './MeetupDetails.module.css'


function MeetupDetails(props){
return (
  <Fragment>
    <section className={classes.detail}>
      <Image src={props.image} alt="" />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  </Fragment>
);   
}

export default MeetupDetails