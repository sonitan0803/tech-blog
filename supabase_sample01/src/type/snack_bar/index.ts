export interface SnackBarData {
    message: string;
    severity: "info" | "success" | "warning" | "error";
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
    isOpen: boolean;
}
