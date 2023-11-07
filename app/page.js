"use client";
import {
  Box,
  Button,
  Card,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SPONSOR_LOGO_SIZE = "120px";
const SPONSOR_LOGO_SIZE_WIDE = "85px";

const Home = () => {
  const breakpoint = useMediaQuery("(min-width:600px)");
  const backgroundBreak = useMediaQuery("(min-width:1280px)");

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
          backgroundPositionY: backgroundBreak ? "-5rem" : "0rem",
          backgroundPositionX: breakpoint ? "0rem" : "-14rem",
          minHeight: "90lvh",
          backgroundSize: "cover",
        }}
      >
        <Typography
          variant="h1"
          fontSize={breakpoint ? "7rem" : "4rem"}
          fontFamily="Gabarito"
          textTransform={"uppercase"}
          fontWeight={"800"}
          color={"white"}
          align="center"
          sx={{ textShadow: "2px 2px 8px black", mb: "0.5rem" }}
        >
          Tackle The Toad
        </Typography>
        <br />
        <Button
          variant="contained"
          size="large"
          sx={{
            background:
              "linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)",
            color: "white",
            boxShadow: "2px 2px 14px rgba(0,0,0,0.8)",
            "&:hover": { boxShadow: "1px 1px 12px black" },
          }}
          onClick={onClickRegister}
        >
          <Typography
            fontSize={"1.2rem"}
            sx={{ px: "1rem", py: "0.1rem" }}
            fontWeight={"300"}
            fontFamily={"Open Sans"}
            color="white"
          >
            Register Now
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          background: "rgb(14,80,79)",
          background:
            "linear-gradient(50deg, rgba(64,171,169,1) 0%, rgba(7,121,111,1) 100%)",
          py: "1rem",
          px: { md: "8rem", sm: "1rem" },
        }}
      >
        <Typography
          align="center"
          fontSize={"1.1rem"}
          fontFamily={"Roboto"}
          padding="1rem"
          color="white"
          letterSpacing={"0.5rem"}
          fontWeight="100"
        >
          50km &nbsp;-&nbsp; 2500m &nbsp;-&nbsp; June 29 &nbsp;-&nbsp; 2024
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#EFEEE5",
          py: "2rem",
          px: { md: "8rem", sm: "1rem" },
        }}
      >
        <Box sx={{ py: "1rem" }}>
          <Image
            src={"/toadLogo.webp"}
            width={"300"}
            height={"180"}
            alt="logo"
          />
        </Box>
        <Typography
          padding={"1rem"}
          align="center"
          fontSize={"1.1rem"}
          marginBottom="3rem"
        >
          Embark on the adventure of traversing this stunning 50-kilometer
          course, located in the picturesque Toad Mountain just outside the town
          of Nelson. Mark your calendars. Tackle the Toad is making its return
          on the 29th of June, 2024.
        </Typography>
        <Box sx={{ position: "relative", padding: breakpoint? '0rem' : '1rem' }}>
          <Box
            sx={{
              position: "relative",
              display: breakpoint ? "block" : "none",
              height: "15rem",
              width: "100vw",
              transform: "translateY(-50%)",
              top: "calc(277px / 2)",
              mb: "-15rem",
              backgroundColor: "#097a69",
              background:
                "linear-gradient(141deg, rgba(9,122,120,1) 0%, rgba(9,122,105,1) 100%)",
            }}
          />
          <Card
            sx={{
              maxWidth: breakpoint ? "calc(100vw - 16rem)" : "100%",
              ml: breakpoint ? "8rem" : "0rem",
              position: "relative",
              cursor: "pointer",
              backgroundColor: "#faf9f7",
              zIndex: 10,
            }}
            onClick={() => {
              router.push("https://www.strava.com/routes/3140338039930829832");
            }}
          >
            <Box
              display="flex"
              sx={{
                flexDirection: "row",
                flexWrap: breakpoint ? "nowrap" : "wrap",
              }}
            >
              <Image
                src={"/map.png"}
                alt="route"
                sizes="100vw"
                width={0}
                height={0}
                style={{
                  width: breakpoint ? "320px" : "100%",
                  height: breakpoint ? "277px" : "auto",
                }} // optional
              />
              <Box sx={{ pl: "2rem", pt: "1rem", pb: "1rem" }}>
                <Typography fontSize={"1.2rem"} sx={{ fontWeight: "bold" }}>
                  The Route
                </Typography>
                <Typography
                  sx={{
                    pt: "1rem",
                    pr: "1rem",
                  }}
                  fontSize={"0.9rem"}
                >
                  Note the route is not set, but will climb about 2500m to the
                  top of toad mountain. There will be multiple aid stations
                  along the way. Check back later to see the finalized route. We
                  will also send out an email to anyone who has registered, once
                  the route is finialized.
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
        <Box
          sx={{
            mt: "3rem",
            mb: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Image
            src="/nelsonFordLogo.png"
            sizes="100vw"
            alt="nelson ford sponsor"
            width="0"
            height="0"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              width: "auto",
              height: SPONSOR_LOGO_SIZE_WIDE,
            }}
          />
          <Image
            src="/valhallaPathLogo.png"
            sizes="100vw"
            alt="nelson ford sponsor"
            width="0"
            height="0"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              width: "auto",
              height: SPONSOR_LOGO_SIZE,
            }}
          />
          <Image
            src="/ziplineLogo.png"
            sizes="100vw"
            alt="nelson ford sponsor"
            width="0"
            height="0"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              width: "auto",
              height: SPONSOR_LOGO_SIZE_WIDE,
            }}
          />
          <Image
            src="/interiorSuspensionLogo.png"
            sizes="100vw"
            alt="nelson ford sponsor"
            width="0"
            height="0"
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              width: "auto",
              height: SPONSOR_LOGO_SIZE,
            }}
          />
        </Box>
      </Box>
      <Box sx={{ width: "100%",
        justifyContent: 'center',
        padding: '1rem',
        minHeight: '10rem',
        display: "flex",
        background: 'rgb(4,30,148)',
        background: 'linear-gradient(110deg,  rgba(8,142,141,1) 0%, rgba(4,88,148,1) 100%)',

      }}>
        <Typography
        fontSize="1.5rem"
        color="#e8e8e8"
        sx={{textShadow: '1px 1px rgba(0,0,0,0.2)'}}
        > More info coming soon </Typography>
      </Box>
    </>
  );
};

Home.propTypes = {};

Home.defaultProps = {};
export default Home;
