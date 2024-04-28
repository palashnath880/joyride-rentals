import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#0092B1",
    },
  },
  typography: {
    allVariants: {
      color: "#2C3E50",
      fontFamily: roboto.style.fontFamily,
    },
  },
});

export default lightTheme;
