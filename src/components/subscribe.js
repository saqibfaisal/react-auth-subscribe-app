import {
  Box,
  Button,
  Container,
  CssBaseline,
  Typography,
  createTheme
} from "@mui/material";
import { ThemeProvider } from "styled-components";
import supabase from "../config/supabaseClient";
const theme = createTheme();
function Subscribe() {
  const handleSubscribe = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        console.log("User is not logged in. Please log in first.");
        // You may redirect the user to the login page or display a message
        return;
      }

      console.log("User details:", user.email);

      // Perform the subscription logic using Supabase
      // For example:
      const { data, error } = await supabase.from("email_list").insert({
        user_id: user.id,
        email: user.email,
      });

      if (error) {
        console.log("Error subscribing:", error);
        // Handle the error as needed
      } else {
        console.log("Successfully subscribed:", data);
        alert("Successfully subscribed:");
        // Handle the successful subscription response
      }
    } catch (error) {
      console.log("Unexpected error:", error);
      // Handle unexpected errors if any
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Subscribe
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubscribe()}
              color="primary" 
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Subscribe;
