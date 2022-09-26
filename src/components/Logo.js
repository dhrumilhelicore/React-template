import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { ListItemAvatar } from "@mui/material";

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const mainLogo = {
    logo: "/static/mock-images/avatars/logo.png",
  };

  const logo = (
    <ListItemAvatar>
      <img
        alt="logo"
        src={mainLogo.logo}
        style={{
          height: 70,
          width: 200,
        }}
      />
    </ListItemAvatar>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
