import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Component, ReactElement } from 'react';

interface ContainerProps {
    background: string;
    height: string;
    width: string;
    children: Array<ReactElement>;
}

export default function MUIContainer({ background, height, width, children, ...args }: ContainerProps) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: { height }, backgroundImage: `url(${background})`, width: { width } }} >
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    );
}
