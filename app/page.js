"use client"
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

const Home = () => {
  const breakpoint = useMediaQuery('(min-width:600px)');
  const backgroundBreak = useMediaQuery('(min-width:1280px)');

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
          backgroundImage: `url('/background.webp')`,
          backgroundPositionY: backgroundBreak? "-5rem" : "0rem",
          backgroundPositionX: breakpoint? '0rem' : '-14rem',
          minHeight: "90vh",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          fontSize={breakpoint? "7rem" : "4rem"}
          fontFamily="Gabarito"
          textTransform={"uppercase"}
          fontWeight={"800"}
          color={"white"}
          align="center"
          sx={{ textShadow: "1px 1px 2px black", mb: '0.5rem' }}
        >
          Tackle The Toad
        </Typography>
        <br />
        <Button variant="contained" size="large" sx={{background: 'linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)', color: 'white'}}
        onClick={onClickRegister}
        >
          <Typography
            fontSize={"1.2rem"}
            sx={{px: '1rem', py: '0.1rem'}}
            fontWeight={"300"}
            fontFamily={"Open Sans"}
            color="white"
          >
            Register Now
          </Typography>
        </Button>
      </Box>
      <Box sx={{background: 'rgb(14,80,79)',
                background: 'linear-gradient(50deg, rgba(64,171,169,1) 0%, rgba(7,121,111,1) 100%)', py: '2rem', px: {md: '8rem', sm: '1rem' }}}>
        <Typography
        align="center"
        fontSize={'1.1rem'}
        fontFamily={"Roboto"}
        padding="1rem"
        color="white"
        letterSpacing={'0.5rem'}
        fontWeight="100"
        >
            50km &nbsp;-&nbsp; 2500m &nbsp;-&nbsp; June 29 &nbsp;-&nbsp; 2024
        </Typography>
      </Box>
      <Box sx={{backgroundColor: "#EFEEE5", py: '2rem', px: {md: '8rem', sm: '1rem' }}}>
        <Typography
        padding={'1rem'}
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
