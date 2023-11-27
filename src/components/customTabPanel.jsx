const { Box, Typography, Card } = require("@mui/material");

const CustomTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Card
            elevation={10}
            sx={{
              padding: "2rem",
              boxShadow: "0 0 10px 1px rgba(0, 0, 0, 0.25)",
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              border: "1px solid rgba(255, 255, 255, .25)",
              backdropFilter: "blur(25px)",
            }}
          >
            {children}
          </Card>
        </Box>
      )}
    </div>
  );
};

export default CustomTabPanel;
