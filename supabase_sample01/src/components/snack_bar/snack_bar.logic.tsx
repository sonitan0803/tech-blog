import { SnackBarView } from "./snack_bar.view";

import type { SnackBarData } from "@/type/snack_bar";

interface SnackBarProps {
    snackBarData: SnackBarData;
    handleClose: () => void;
}

export const SnackBar = (props: SnackBarProps) => {
    return (
        <SnackBarView
            snackBarData={props.snackBarData}
            onClose={props.handleClose}
        />
    );
};
