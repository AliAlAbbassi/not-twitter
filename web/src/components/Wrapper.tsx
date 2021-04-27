import React from "react";
import { Box, Grid } from "@chakra-ui/core";

export type WrapperVariant = "small" | "regular";

interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      mt={8}
      mx="auto"
      // maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      <Grid templateColumns="auto 800px auto" gap={2}>
        <Box></Box>
        <Box>
          {children}
        </Box>
        <Box></Box>
      </Grid>
    </Box>
  );
};
