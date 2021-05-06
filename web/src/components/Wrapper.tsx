import React from "react";
import { Box, Grid } from "@chakra-ui/core";
import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";
import { useMeQuery } from "../generated/graphql";
import { useRouter } from "next/router";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  const { data, loading, error } = useMeQuery()
  const router = useRouter()
  if (data && !error) {
    return (
      <Box
        mt={8}
        mx="auto"
        // maxW={variant === "regular" ? "1000px" : "800px"}
        w="90%"
      >
        <Grid height="500px" templateColumns="repeat(1, 1fr) 700px repeat(1, 1fr)" gap={2}>
          <LeftColumn />
          <Box>
            {children}
          </Box>
          <RightColumn />
        </Grid>
      </Box>
    );
  } else {
    return (
      <Box
        mt={8}
        mx="auto"
        // maxW={variant === "regular" ? "1000px" : "800px"}
        w="90%"
      >
        {children}
      </Box>
    )
  }
};
