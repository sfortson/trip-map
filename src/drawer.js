// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: '33%',
    flexShrink: 0
  },
  drawerPaper: {
    width: '33%'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: '33%'
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

type Props = {
  classes: Object,
  open: boolean,
  title: string,
  theme: Object,
  dayInfo: Object,
  handleDrawerClose: () => mixed
};

class PersistentDrawerRight extends Component<Props> {
  render() {
    const { classes, theme } = this.props;

    return (
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={this.props.open}
        elevation={1000}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          <Typography style={{ textAlign: 'center', paddingTop: '8px' }} variant="h4" gutterBottom>
            {this.props.title}
          </Typography>
        </div>
        <Divider />
        <div style={{ paddingLeft: '8px', paddingRight: '4px' }}>
          {this.props.dayInfo ? <div dangerouslySetInnerHTML={this.props.dayInfo} /> : <div />}
        </div>
      </Drawer>
    );
  }
}

PersistentDrawerRight.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerRight);
