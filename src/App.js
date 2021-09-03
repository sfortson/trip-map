// @flow

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import marked from 'marked';

import Map from './map';
import DrawerRight from './drawer';

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
});

type Props = {
  classes: {
    root: {
      display: 'flex',
      height: '100%',
    },
  },
};

type State = {
  open: boolean,
  markdown: Object,
  drawerTitle: string,
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super();
    this.state = {
      open: false,
      markdown: null,
      drawerTitle: '',
    };
  }

  handleDrawerOpen = (filePath: string, drawerTitle: string) => {
    this.setState({ open: true, drawerTitle: drawerTitle });
    this.fetchMarkdown(filePath);
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  fetchMarkdown = (filePath: string) => {
    fetch(filePath)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        const rawMarkup = marked(text, { sanitize: true });
        this.setState({ markdown: { __html: rawMarkup } });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Grid container>
          <DrawerRight
            handleDrawerClose={this.handleDrawerClose}
            open={this.state.open}
            dayInfo={this.state.markdown}
            title={this.state.drawerTitle}
          />
          <Map onClick={this.handleDrawerOpen} />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
