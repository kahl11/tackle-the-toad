"use client";
import { useState } from "react";
import dynamic from 'next/dynamic'

import CustomTabPanel from "@/src/components/customTabPanel";
import {
  Box,
  Button,
  Card,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EmbededMap = dynamic(() => import('../src/components/EmbededMap'), { ssr: false })


const SPONSOR_LOGO_SIZE = "120px";
const SPONSOR_LOGO_SIZE_WIDE = "85px";

const Home = () => {
  const breakpoint = useMediaQuery("(min-width:600px)");
  const backgroundBreak = useMediaQuery("(min-width:1280px)");
  const [mapShowing, setMapShowing] = useState('50KM');

  const [tabValue, setTabValue] = useState(0);

  const a11yProps = (index) => {
    return {
      id: `tab-${index}`,
    };
  };

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
          Embark on the adventure of traversing a stunning 50 or 20 kilometer
          course, located in the picturesque Toad Mountain just outside the town
          of Nelson. Mark your calendars. Tackle the Toad is making its return
          on the 29th of June, 2024.
        </Typography>
        <Box display={"flex"} flexDirection={"row"}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: mapShowing === "50KM" ?
              "linear-gradient(30deg, rgba(79,186,210,0.8) 0%, rgba(45,221,222,0.8) 100%)" :
              "linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)",
              marginBottom: "1rem",
              marginRight: "1rem",
              boxShadow: "2px 2px 14px rgba(0,0,0,0.2)",
              "&:hover": { background: mapShowing === "50KM" ?
              "linear-gradient(30deg, rgba(79,186,210,0.8) 0%, rgba(45,221,222,0.8) 100%)" :
              "linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)" },
            }}
            onClick={() => setMapShowing("50KM")}
            mb={"1rem"}
            mr={"1rem"}>
            <Typography
              fontSize={"1rem"}
              color="white"
              sx={{ cursor: "pointer" }}
              fontWeight="500"
            >50km Map
            </Typography>
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: mapShowing === "20KM" ?
              "linear-gradient(30deg, rgba(79,186,210,0.8) 0%, rgba(45,221,222,0.8) 100%)" :
              "linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)",
              marginBottom: "1rem",
              marginLeft: "1rem",
              boxShadow: "2px 2px 14px rgba(0,0,0,0.2)",
              "&:hover": { background: mapShowing === "20KM" ?
              "linear-gradient(30deg, rgba(79,186,210,0.8) 0%, rgba(45,221,222,0.8) 100%)":
              "linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)" },
            }}
            onClick={() => setMapShowing("20KM")}
            mb={"1rem"}
            mr={"1rem"}>
            <Typography
              fontSize={"1rem"}
              color="white"
              sx={{ cursor: "pointer" }}
              fontWeight="500"
            >20km Map
            </Typography>
          </Button>
        </Box>
        <Card
          sx={{
            width: breakpoint ? "80%" : "95%",
            backgroundColor: "white",
            zIndex: 10,
          }}
        >
          <Box
            display="block"
            sx={{
              flexDirection: "row",
              flexWrap: "wrap",
              marginBottom: '-5px' //this is hack for the weird iframe fatmaps embeds
            }}
          >
            <Box display="block" sx={{ display: mapShowing === "50KM" ? "clear" : "none" }}>
              <EmbededMap mapId={"50KM"} />
            </Box>
            <Box display="block" sx={{ display: mapShowing === "20KM" ? "clear" : "none" }}>
              <EmbededMap mapId={"20KM"} />
            </Box>
            {/* <Box sx={{ pl: "2rem", pt: "1rem", pb: "1rem" }}>
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
              </Box> */}
          </Box>
        </Card>
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
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          px: breakpoint ? "4rem" : "0.5rem",
          alignItems: "center",
          py: "1rem",
          minHeight: "10rem",
          display: "flex",
          background: "rgb(4,30,148)",
          backgroundImage: 'url("/mountainBg.jpg")',
          backgroundSize: "cover",
          backgroundPositionY: breakpoint ? "-100px" : "0px",
        }}
      >
        <Tabs
          sx={{
            width: "100%",
            "& .MuiTabs-indicator": {
              backgroundColor: "white",
              height: 2,
            },
            "& .MuiTab-root": {
              color: "white!important",
              fontWeight: "700",
              minWidth: "60px",
              fontSize: breakpoint ? "1rem" : "0.7rem",
            },
          }}
          variant="scrollable"
          allowScrollButtonsMobile
          value={tabValue}
          onChange={(event, newValue) => {
            setTabValue(newValue);
          }}
        >
          <Tab label="Event Guide" {...a11yProps(0)} />
          <Tab label="Aid stations" {...a11yProps(1)} />
          <Tab label="Rules" {...a11yProps(2)} />
          <Tab label="Schedule" {...a11yProps(3)} />
        </Tabs>
        <CustomTabPanel value={tabValue} index={0}>
          <Typography>Event Guide coming soon!</Typography>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          <Typography fontSize="1rem" color="black">
            The <b>50km course will have 6 aid stations</b> and the{" "}
            <b>20km course will have 3 aid stations</b>.<br />
            <b>This is a cup free event.</b> We will have NO cups at any Aid
            Stations. <br />
            Please travel with your own foldable, re-usable cup or bottle.{" "}
            <br /> <br />
          </Typography>
          <Typography fontSize="1rem" color="black">
            <b>Each of the aid stations will be equiped with: </b>
            <ul style={{ listStylePosition: "inside" }}>
              <li>Fruit: Watermelon, Oranges and Bananas</li>
              <li>Chips: Plain, Salt and Vinegar</li>
              <li>Sweet Treats: Gummies and Twizzlers</li>
              <li>
                Gels: Limited variety of Gels – please don’t depend on our
                stock, travel with your own race food!
              </li>
              <li>Boiled & Salted Potatoes</li>
              <li>Pickles</li>
              <li>Water</li>
              <li>Gatorade</li>
              <li>Coke</li>
              <li>Ice + small ziploc bags</li>
              <li>
                We will also have feminine hygiene products at both TA’s and the
                Start + Finish Lines - please ask the Medic on duty
              </li>
              <li>Sunscreen</li>
            </ul>
          </Typography>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          <Typography>Rules coming soon!</Typography>
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={3}>
          <Typography>Schedule coming soon!</Typography>
        </CustomTabPanel>
      </Box>
    </>
  );
};

Home.propTypes = {};

export default Home;
