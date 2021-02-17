import React from 'react';

import Head from 'next/head';
import Typography from '@material-ui/core/Typography';

interface HeaderProps {
  title: string;
}

const Header = ({title}: HeaderProps) => {
  return (
    <>
      <Head>
        <title>{`Gretz - ${title} Dashboard`}</title>
      </Head>
      <Typography variant="h3" noWrap>
        {`${title} - Dashboard`}
      </Typography>
    </>
  );
};

export default Header;
