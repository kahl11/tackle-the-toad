"use client"
import { Box, Typography } from "@mui/material"
import { blueGrey } from "@mui/material/colors";

const Footer = () => {
    return(<Box sx={{backgroundColor: "#0f171c", width: '100%', minHeight: '3rem', px:'4rem', py: '1rem'}}>
        <Typography
        color={blueGrey[200]}>
        Copyright © 2023 Kevin Ahl Designs
        </Typography>
        </Box>)
}

export default Footer;