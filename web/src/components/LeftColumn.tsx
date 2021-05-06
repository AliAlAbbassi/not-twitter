import { Box, Button, Flex, Heading, Link } from '@chakra-ui/core';
import React from 'react'
import { NavBar } from './NavBar';
import NextLink from "next/link";
import { useApolloClient } from '@apollo/client';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { isServer } from '../utils/isServer';

interface LeftColumnProps {

}

export const LeftColumn: React.FC<LeftColumnProps> = ({ }) => {
    const [logout, { loading: logoutFetching }] = useLogoutMutation();
    const apolloClient = useApolloClient();
    const { data, loading } = useMeQuery({
        skip: isServer(),
    });

    let body = null;

    // data is loading
    if (loading) {
        // user not logged in
    } else if (!data?.me) {
        body = (
            <>
                <NextLink href="/login">
                    <Link mr={2}>login</Link>
                </NextLink>
                <NextLink href="/register">
                    <Link>register</Link>
                </NextLink>
            </>
        );
        // user is logged in
    } else {
        body = (
            <Flex justifyContent='flex-start' direction='column' mt={10}>
                <NextLink href="/">
                    <Link fontSize='1.5em'>
                        Home
                    </Link>
                </NextLink>
                <NextLink href="/my-profile">
                    <Link fontSize='1.5em'>
                        Profile
                    </Link>
                </NextLink>
                <NextLink href="/create-post">
                    {/* <Button as={Link} mr={4} mb={2} >
                        Tweet
                    </Button> */}
                    <Link fontSize='1.5em'>
                        Tweet
                    </Link>
                </NextLink>
                <Flex mt={5} bg='white' rounded="md" boxShadow='Outline'>
                    <NextLink href='/my-profile'>
                        <Box mr={2}>{data.me.username}</Box>
                    </NextLink>
                    <Button
                        onClick={async () => {
                            await logout();
                            await apolloClient.resetStore();
                        }}
                        isLoading={logoutFetching}
                        variant="link"
                    >
                        logout
                    </Button>
                </Flex>
            </Flex>
        );
    }

    return (
        <Box zIndex={1} position="sticky" top={0} >
            <NextLink href="/">
                <Link>
                    <Heading color='blue.300' >Not Twitter</Heading>
                </Link>
            </NextLink>
            {body}
        </Box>
    );
}