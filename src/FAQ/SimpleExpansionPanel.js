import React from 'react';
import './SimpleExpansionPanel.css'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    paddingLeft: '55%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(22),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.qn + 1}. {props.qa.q}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.qa.a}
          </Typography>
          {(props.qa.i)
            ?
            (props.qa.i.length !== 0)
              ?
              props.qa.i.map(link => {
                return (<img id="demoPic" src={require(link)} alt="demo pic" />)
              })
              :
              <div></div>
            :
            <div></div>
          }
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <div className='spaceLast' />
    </div>
  );
}
