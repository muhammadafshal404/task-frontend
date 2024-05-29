import { COLORS } from "../../../../theme";
import { createStyles } from "../../../../utils/";

export const styles = createStyles({
  centeredImage: {
    display: "block",
    paddingTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "30%",
  },
  title: {
    textAlign: "center",
    marginBottom: "16px",
  },
  input: {
    color: COLORS.LIGHT_BLACK,
  },
  loginForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
