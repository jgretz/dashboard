import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';

interface ContentProps {
  children: React.ReactNode;
}

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 16,
    paddingLeft: 0,
  },
}));

const Content = ({children}: ContentProps) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} disableGutters>
      {children}
    </Container>
  );
};

export default Content;
