import { Box, Flex, Heading, Link } from '@chakra-ui/core';
import React from 'react'
import NextLink from "next/link";

interface RightColumnProps {

}

export const RightColumn: React.FC<RightColumnProps> = ({ }) => {
    return (
        <Box zIndex={1} position="sticky" top={0} >
            <Flex flex={1} direction='column' >
                <Box ml='auto' mr='auto'>
                    <Box fontSize='1.5em' >Trending Topics</Box>
                    <Box mt='10px' fontSize='1.2em'>#somethingbad</Box>
                    <Box fontSize='1.2em'>#somethingcontroversial</Box>
                    <Box fontSize='1.2em'>#anime</Box>
                    <Box fontSize='1.2em'>#someonegotcancellediguess</Box>
                </Box>
            </Flex>
        </Box>
    );
}