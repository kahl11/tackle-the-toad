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
      <Typography fontSize={'1.4rem'} fontWeight={'bold'}>Thank You!</Typography>
      <Image src={"/toadLogo.webp"} width="540" height="299" alt="logo" />
      <Typography fontSize={'1.4rem'} fontWeight={'bold'}>You&apos;re Registered</Typography>
      <Button variant="contained" color="secondary" size="large"
      sx={{mt: '2rem'}}
        onClick={returnHome}
        >
          <Typography
            fontSize={"1.2rem"}
            fontWeight={"500"}
            fontFamily={"Open Sans"}
          >
            Return Home
          </Typography>
        </Button>
    </Box>
  );
};

export default ThankYou;
