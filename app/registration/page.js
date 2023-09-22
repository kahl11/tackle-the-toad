"use client"
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useContext, useState } from "react";
import { WAIVER } from "../../src/constants/waiver";
import { handleRegistration } from "../../src/helpers/registrationHelpers";
import { GlobalContext } from "@/src/components/GlobalContextProvider";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Registration = () => {
  const [birthday, setBirthday] = useState(null);
  const globalDataContext = useContext(GlobalContext);
  const router = useRouter();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const email = event.target.querySelector("#email").value
        Cookies.set('email', email)
        globalDataContext.setData(
          {
            ...globalDataContext.data,
            email,
            firstName: event.target.querySelector("#firstName").value,
            lastName: event.target.querySelector("#lastName").value,
          }
        )
        handleRegistration(event.target, birthday, router);
      }}
    >
      <FormControl>
        <Grid container spacing={4} sx={{ px: "4rem", py: "2rem" }}>
          <Grid container item md={6} xs={12} direction="column">
            <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
              Registration
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

            <Typography sx={{}}>Gender</Typography>
            <RadioGroup
              aria-labelledby="gender-select-group"
              defaultValue="male"
              name="gender-select-group"
              required
            >
              <FormControlLabel
                value="female"
                control={<Radio id="female-select" />}
                label="Female"
              />
              <FormControlLabel
                value="male"
                control={<Radio id="male-select" />}
                label="Male"
              />
              <FormControlLabel
                value="other"
                control={<Radio id="nb-select" />}
                label="Other"
              />
            </RadioGroup>


            <Typography sx={{ paddingBottom: "1rem" }}>Address</Typography>
            <TextField required id="address" label="Address" variant="filled" />

            <TextField required id="country" label="Country" variant="filled" />

            <TextField
              required
              id="province"
              label="Province"
              variant="filled"
            />

            <TextField
              required
              id="postalCode"
              label="Postal Code"
              variant="filled"
            />


            <Typography required sx={{ paddingBottom: "1rem" }}>
              Contact
            </Typography>
            <TextField id="email" label="Email" variant="filled" />

            <TextField id="phone" label="Phone Number" variant="filled" />


            <Typography sx={{ paddingBottom: "1rem" }}>
              Emergency Contact
            </Typography>
            <TextField
              id="emergencyName"
              label="Emergency Contact Full Name"
              variant="filled"
              required
            />

            <TextField
              id="emergencyPhone"
              label="Emergency Contact Phone Number"
              variant="filled"
              required
            />

          </Grid>
          <Grid container item md={6} xs={12} direction="column">
            <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
              Waiver
            </Typography>
            <WAIVER />
            <Typography sx={{ paddingBottom: "1rem" }}>
              I hearby accept the above terms
            </Typography>
            <TextField
              required
              sx={{ minWidth: "5rem", width: "5rem" }}
              id="initial"
              label="initial"
              variant="filled"
            />
          </Grid>
        </Grid>
        <Box
          display="flex"
          sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}
        >
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ width: "20rem", mb: '1rem' }}
          >
            <Typography
              fontSize={"1.2rem"}
              fontWeight={"500"}
              fontFamily={"Open Sans"}
            >
              Go to Payment
            </Typography>
          </Button>
        </Box>

      </FormControl>
    </form>
  );
};

export default Registration;
