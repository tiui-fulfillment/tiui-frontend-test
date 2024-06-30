import React from 'react';
import { Box, Container, Typography } from '@mui/material';
// import './Layout.css';

export default function Layout({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Container className="container">
        <Box className="spacer" />
        <Typography variant="h5" className="title">
          {title}
        </Typography>
        {children}
        <Box className="spacer" />
      </Container>
    </main>
  );
}
