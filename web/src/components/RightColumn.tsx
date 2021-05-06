import { Box, Heading, Link } from '@chakra-ui/core';
import React from 'react'
import NextLink from "next/link";

interface RightColumnProps {

}

export const RightColumn: React.FC<RightColumnProps> = ({ }) => {
    return (
        <Box zIndex={1} position="sticky" top={0} >
            right column here
        </Box>
    );
}