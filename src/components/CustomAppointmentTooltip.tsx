// @ts-ignore
import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import Room from "@mui/icons-material/LocationOn";
import { Grid, styled } from "@mui/material";
const PREFIX = "Demo";
const classes = {
  icon: `${PREFIX}-icon`,
  textCenter: `${PREFIX}-textCenter`,
  firstRoom: `${PREFIX}-firstRoom`,
  secondRoom: `${PREFIX}-secondRoom`,
  thirdRoom: `${PREFIX}-thirdRoom`,
  header: `${PREFIX}-header`,
  commandButton: `${PREFIX}-commandButton`,
};

const StyledRoom = styled(Room)(({ theme: { palette } }) => ({
  [`&.${classes.icon}`]: {
    color: palette.action.active,
  },
}));

const StyledGrid = styled(Grid)(() => ({
  [`&.${classes.textCenter}`]: {
    textAlign: "center",
  },
}));

const Content = ({ children, appointmentData, ...restProps }: any) => (
  <AppointmentTooltip.Content {...restProps} appointmentData={appointmentData}>
    <Grid container alignItems="center">
      <StyledGrid item xs={2} className={classes.textCenter}>
        <StyledRoom className={classes.icon} />
      </StyledGrid>
      <Grid item xs={10}>
        <span>{appointmentData.location}</span>
      </Grid>
    </Grid>
  </AppointmentTooltip.Content>
);

const CustomAppointmentTooltip = () => {
  return (
    <AppointmentTooltip
      showCloseButton
      showOpenButton
      contentComponent={Content}
    />
  );
};

export default CustomAppointmentTooltip;
