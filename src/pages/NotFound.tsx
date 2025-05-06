import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const NotFoundPage: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        py: 6,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          px: 4,
          py: 5,
          borderRadius: 3,
        }}
      >
        <Box textAlign="center">
          <MotionBox
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.1,
            }}
            mb={3}
          >
            <ErrorIcon color="error" sx={{ fontSize: 60 }} />
          </MotionBox>

          <MotionBox
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            mb={1}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              404 - Page Not found
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            mb={4}
          >
            <Typography variant="body1" color="text.secondary">
              Sorry, the page you’re looking for doesn’t exist or has been
              moved.
            </Typography>
          </MotionBox>

          <MotionBox
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<ArrowBackIcon />}
              href="/"
            >
              Back to Home
            </Button>
          </MotionBox>
        </Box>
      </Paper>
    </Container>
  );
};

export default NotFoundPage;
