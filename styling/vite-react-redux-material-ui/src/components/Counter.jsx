import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  getCounterValue,
} from "../app/store/reducers/counterReducer";
import {
  Card,
  CardHeader,
  Button,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

export function Counter() {
  const count = useSelector(getCounterValue);
  const dispatch = useDispatch();

  return (
    <>
      <Card>
        <CardHeader title="React-redux counter" />
        <CardContent>
          <Grid container>
            <Button
              aria-label="Decrement value"
              variant="contained"
              color="primary"
              size="small"
              onClick={() => dispatch(decrement())}
            >
              -
            </Button>
            <Typography sx={{ mx: 2 }}>{count}</Typography>
            <Button
              aria-label="Increment value"
              variant="contained"
              color="primary"
              size="small"
              onClick={() => dispatch(increment())}
            >
              +
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
