"use client"

import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  Fade,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import conversationStarterData from "../conversationStarterData";

const getRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * conversationStarterData.length);
  return conversationStarterData[randomIndex];
};

export const ConversationStarter = () => {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");

  const handleOpen = () => {
    setQuestion(getRandomQuestion());
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      {/* Clickable image */}
      <Box
        sx={{
            margin: "auto",
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            width: "80%",
            height: 180,
            cursor: "pointer",
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 6px 16px rgba(0,0,0,0.4)",
          transition: "transform 0.2s ease",
          "&:hover": { transform: "scale(1.03) rotate(-1deg)" },
        }}
        onClick={handleOpen}
      >
        <img
          src="/images/cards_2.png"
          alt="Pick a card"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Pick a card
        </Typography>
      </Box>

      {/* Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: "#004225", // green felt background
            backgroundImage: "radial-gradient(#006b3a, #00351c)",
            p: 4,
            borderRadius: 3,
            boxShadow: "0 0 30px rgba(0,0,0,0.5)",
            overflow: "visible", // allow card to “float” above edge
          },
        }}
        TransitionComponent={Fade}
      >
        <Box sx={{ position: "relative" }}>
          {/* Close button */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Floating tilted card */}
          <DialogContent
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              mt: 8,
              mb: 3,
              mx: "auto",
              width: "80%",
              minHeight: 300,
              p: 4,
              boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
              transform: "rotate(-4deg) translateY(-10px)",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "rotate(0deg) translateY(-15px)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
              },
            }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{
                fontWeight: 500,
                color: "#c70000",
              }}
            >
              {question}
            </Typography>
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};

export default ConversationStarter;