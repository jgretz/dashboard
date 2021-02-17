import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlareIcon from '@material-ui/icons/Flare';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

import {DRAWER_WIDTH} from '../constants';

const useStyles = makeStyles((theme) => ({
  stamp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    paddingTop: 16,
    paddingLeft: 12,
  },
  stampText: {
    marginLeft: 16,
  },

  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    background: theme.palette.secondary.main,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
    background: theme.palette.secondary.main,
  },
}));

interface MenuItemProps {
  slug: string;
  text: string;
  Icon: JSX.Element;
}

const MenuItem = ({slug, text, Icon}: MenuItemProps) => (
  <Link href={`/${slug}`}>
    <ListItem button key={slug}>
      <ListItemIcon>{Icon}</ListItemIcon>
      <ListItemText>{text}</ListItemText>
    </ListItem>
  </Link>
);

const Menu = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Box className={classes.stamp}>
        <Image src="/dashboard-icon.png" alt="Dashboard" width="30" height="30" />
        <Typography variant="h3" className={classes.stampText}>
          Status
        </Typography>
      </Box>
      <List>
        <MenuItem slug="" text="Spotlight" Icon={<FlareIcon color="primary" />} />
        <MenuItem slug="josh" text="Josh" Icon={<DirectionsRunIcon color="primary" />} />
        <MenuItem slug="schwankie" text="Schwankie" Icon={<BookmarksIcon color="primary" />} />
      </List>
      <Divider />
    </Drawer>
  );
};

export default Menu;
