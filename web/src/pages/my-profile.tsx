import { Box, Flex, Heading, Link } from '@chakra-ui/core';
import React, { useState } from 'react'
import { Wrapper } from '../components/Wrapper';
import { useMeQuery } from '../generated/graphql';
import { withApollo } from '../utils/withApollo';

interface myProfileProps {

}

export type menuType = 'tweets' | 'media'

const myProfile: React.FC<myProfileProps> = ({ }) => {
    const [menu, setMenu] = useState<menuType>('tweets')

    const { data, loading, error } = useMeQuery()
    if (loading) {
        return (
            <Box>loading...</Box>
        )
    }
    return (
        <Wrapper>
            {(data && !error) && (
                <Box>
                    <Heading>{data.me?.username}</Heading>
                    <Flex mt={4}>
                        <Link onClick={() => setMenu('tweets')}>Tweets</Link>
                    </Flex>
                </Box>
            )}
        </Wrapper>
    );
}

export default withApollo({ ssr: false })(myProfile);