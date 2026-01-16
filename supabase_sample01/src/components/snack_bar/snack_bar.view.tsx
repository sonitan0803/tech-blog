import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import type { SnackBarData } from "@/type/snack_bar";

interface SnackBarViewProps {
    snackBarData: SnackBarData;
    onClose: () => void;
}

export const SnackBarView = (props: SnackBarViewProps) => {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: props.snackBarData.vertical,
                horizontal: props.snackBarData.horizontal,
            }}
            open={props.snackBarData.isOpen}
            onClose={props.onClose}
            key={props.snackBarData.vertical + props.snackBarData.horizontal}
            autoHideDuration={5000}
        >
            <Alert
                onClose={props.onClose}
                severity={props.snackBarData.severity}
                variant="filled"
                sx={{ width: "100%" }}
            >
                {props.snackBarData.message}
            </Alert>
        </Snackbar>
    );
};
