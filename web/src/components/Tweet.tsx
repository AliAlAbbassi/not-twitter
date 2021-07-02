import { Flex, Box, Text } from '@chakra-ui/core';
import React from 'react'
import {
    PostSnippetFragment,
} from "../generated/graphql";
import { EditDeletePostButtons } from './EditDeletePostButtons';
import NextLink from "next/link";
import { UpdootSection } from './UpdootSection'

interface TweetProps {
    p: PostSnippetFragment
}

export const Tweet: React.FC<TweetProps> = ({ p }) => {
    return (
        <Flex direction='column' key={p.id} p={4} shadow="md" borderWidth="1px">
            <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                <Box flex={1}>
                    <Text>posted by {p.creator.username}</Text>
                    <Flex align="center">
                        <Text flex={1} mt={4}>
                            {p.textSnippet}
                        </Text>
                        <Box ml="auto">
                            <EditDeletePostButtons
                                id={p.id}
                                creatorId={p.creator.id}
                            />
                        </Box>
                    </Flex>
                </Box>
            </NextLink >
            <Box mt={2}>
                <UpdootSection post={p} />
            </Box>
        </Flex>
    );
}