import Button from "@mui/material/Button";

interface Todo {
    id: number;
    title: string;
}

interface UserDataViewProps {
    userName: string;
    onLogout: () => void;
    todos: Todo[];
}

export const UserDataView = (props: UserDataViewProps) => {
    return (
        <div
            style={{
                width: "100dvw",
                height: "100dvh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "24px",
            }}
        >
            <div>Welcome! : {props.userName}</div>
            <ul>
                {props.todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            <Button variant="contained" onClick={props.onLogout}>
                Logout
            </Button>
        </div>
    );
};
