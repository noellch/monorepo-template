"use client";

import { StyledEngineProvider } from "@mui/material/styles";
import { PropsWithChildren } from "react";

const GlobalCssPriority = ({ children }: PropsWithChildren) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
};

export default GlobalCssPriority;
