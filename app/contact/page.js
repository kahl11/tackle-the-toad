"use client"
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const router = useRouter();
  const returnHome = () => router.push('/');
  return (
    <Box
      display={"flex"}
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        pt: '8rem'
      }}
    >
      <Typography
        fontSize={"2rem"}
        fontWeight={"500"}
        fontFamily={"Open Sans"}
        align="center"
      >
      If you have any questions please reach out at: <br /> <a style={{textDecoration: 'underline'}} href="mailto:contact@tacklethetoad.com">contact@tacklethetoad.com</a>
      </Typography>
    </Box>
  );
};

export default ThankYou;
