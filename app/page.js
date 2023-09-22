"use client"
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
    const onClickRegister = () => {
        router.push("/registration");
    };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url('/nelsonBackdrop.webp')`,
          minHeight: "90vh",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          fontSize={"5rem"}
          textTransform={"uppercase"}
          fontWeight={"bold"}
          color={"white"}
          align="center"
          sx={{ textShadow: "1px 1px 2px black", mb: '1rem' }}
        >
          Tackle The Toad
        </Typography>
        <br /> <br />
        <Button variant="contained" color="secondary" size="large"
        onClick={onClickRegister}
        >
          <Typography
            fontSize={"1.2rem"}
            fontWeight={"500"}
            fontFamily={"Open Sans"}
          >
            Register Now
          </Typography>
        </Button>
      </Box>
      <Box sx={{backgroundColor: "#EFEEE5", py: '2rem', px: {md: '8rem', sm: '1rem' }}}>
        <Typography
        align="center"
        fontSize={'1.1rem'}
        >
            Embark on the adventure of traversing this stunning 50-kilometer course, located in the picturesque Toad Mountain just outside the town of Nelson.
            Mark your calendars. Tackle the Toad is making its return on the 29th of June, 2024.
        </Typography>
      </Box>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};
export default Home;
