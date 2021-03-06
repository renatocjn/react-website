import React from 'react'
import Typography from '@material-ui/core/Typography'
import Section from '../components/section';
import Avatar from "@material-ui/core/Avatar"
import Hidden from "@material-ui/core/Hidden"

import ShortTextIcon from '@material-ui/icons/ShortText';

import useStyles from '../styles'

export default props => {
   const classes = useStyles()
   return (
      <Section sectionId="bio" title="Short Bio" icon={<ShortTextIcon/>}
               subtitle="A short description of myself">
         <Typography variant="body1" className={classes.bioText}>
            <Hidden mdUp implementation="css">
               <Avatar src={process.env.PUBLIC_URL+"/avatar.jpg"} variant="rounded"
                  className={[classes.Avatar, classes.bioAvatar].join(' ')} />
            </Hidden>
            {props.short_bio}
         </Typography>
      </Section>
   )
}
