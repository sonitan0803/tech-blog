import { createContext, type Dispatch, type ReactNode } from "react";

import type { SnackBarData } from "@/type/snack_bar";

interface SnackStateContextType {
    SnackBar: ReactNode;
    setSnackState: Dispatch<React.SetStateAction<SnackBarData>>;
}

export const SnackStateContext = createContext<SnackStateContextType>({
    SnackBar: null,
    setSnackState: () => {},
});
