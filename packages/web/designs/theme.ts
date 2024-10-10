"use client";

import { createTheme, responsiveFontSizes, Theme } from "@mui/material/styles";

const baseTheme: Theme = createTheme({ cssVariables: true });
const theme = responsiveFontSizes(baseTheme);

export default theme;
