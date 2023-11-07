"use client";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useContext, useState } from "react";
import { WAIVER } from "../../src/constants/waiver";
import { handleRegistration, handleVolunteerRegistration } from "../../src/helpers/registrationHelpers";
import { GlobalContext } from "@/src/components/GlobalContextProvider";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const VolunteerRegistration = () => {
  const [birthday, setBirthday] = useState(null);
  const globalDataContext = useContext(GlobalContext);
  const breakpoint = useMediaQuery("(min-width:600px)");
  const router = useRouter();
  const [tShirtSize, setTShirtSize] = useState("");
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: breakpoint ? "0rem" : "1rem",
        alignItems: 'center',
        pt: '1rem',
      }}
    >
      <form
        onSubmit={(event) => {
          if (typeof window !== "undefined") {
            event.preventDefault();
            const email = event.target.querySelector("#email").value;
            Cookies.set("email", email);
            globalDataContext.setData({
              ...globalDataContext.data,
              email,
              firstName: event.target.querySelector("#firstName").value,
              lastName: event.target.querySelector("#lastName").value,
            });
            handleVolunteerRegistration(
              event.target,
              birthday,
              tShirtSize,
              router
            );
          }
        }}
      >
        <FormControl>
          <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
            Volunteer
          </Typography>
          <Typography sx={{ paddingBottom: "1rem" }}>
            Personal Information
          </Typography>
          <TextField
            required
            id="firstName"
            label="First Name"
            variant="filled"
          />

          <TextField
            required
            id="lastName"
            label="Last Name"
            variant="filled"
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              slotProps={{
                textField: {
                  id: "birthdate",
                  required: true,
                },
              }}
              sx={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
              label="Birthday"
              value={birthday}
              onChange={(newValue) => setBirthday(newValue)}
            />
          </LocalizationProvider>
          <Typography sx={{ paddingBottom: "0.5rem" }}>Shirt Size</Typography>
          <Select
            id="shirt-size"
            value={tShirtSize}
            onChange={(e) => setTShirtSize(e.target.value)}
            sx={{ mb: "1rem" }}
          >
            <MenuItem value={"xs"}>xs</MenuItem>
            <MenuItem value={"s"}>s</MenuItem>
            <MenuItem value={"m"}>m</MenuItem>
            <MenuItem value={"l"}>l</MenuItem>
            <MenuItem value={"xl"}>xl</MenuItem>
          </Select>
          <Typography required sx={{ paddingBottom: "1rem" }}>
            Contact
          </Typography>
          <TextField id="email" label="Email" variant="filled" />
          <TextField id="verifyEmail" label="Verify Email" variant="filled" />
          <TextField id="phone" label="Phone Number" variant="filled" />
          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              background:
                "linear-gradient(141deg, rgba(38,159,186,1) 0%, rgba(9,175,176,1) 100%)",
              color: "white",
              mb: "2rem",
              py: "1rem",
              px: "2rem",
              boxShadow: "1px 1px 12px black",
              "&:hover": { boxShadow: "1px 1px 12px black" },
            }}
          >
            <Typography
              fontSize={"0.8rem"}
              fontWeight={"500"}
              fontFamily={"Open Sans"}
            >
              Register
            </Typography>
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default VolunteerRegistration;
