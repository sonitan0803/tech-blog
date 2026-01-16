import { useState } from "react";
import type { ReactNode } from "react";

import { SnackStateContext } from "./context";

import { SnackBar } from "@/components/snack_bar";
import type { SnackBarData } from "@/type/snack_bar";

export const SnackBarProvider = ({ children }: { children: ReactNode }) => {
    const [snackState, setSnackState] = useState<SnackBarData>({
        isOpen: false,
        message: "",
        severity: "success",
        vertical: "top",
        horizontal: "center",
    });

    const handleClose = () => {
        setSnackState({ ...snackState, isOpen: false });
    };

    return (
        <SnackStateContext
            value={{
                SnackBar: (
                    <SnackBar
                        snackBarData={snackState}
                        handleClose={handleClose}
                    />
                ),
                setSnackState: setSnackState,
            }}
        >
            {children}
        </SnackStateContext>
    );
};
