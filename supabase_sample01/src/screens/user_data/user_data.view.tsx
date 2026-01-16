import type { Dispatch, SetStateAction } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

interface Todo {
    id: number;
    title: string;
}

interface UserDataViewProps {
    userName: string;
    onLogout: () => void;
    todos: Todo[];
    addTaskTitle: string;
    setAddTaskTitle: Dispatch<SetStateAction<string>>;
    addTodo: (title: string) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
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

            <form
                style={{ display: "flex", gap: "10px" }}
                onSubmit={(e) => {
                    e.preventDefault();
                    props.addTodo(props.addTaskTitle);
                }}
            >
                <TextField
                    id="task-title"
                    label="Task Title"
                    variant="outlined"
                    value={props.addTaskTitle}
                    onChange={(e) => props.setAddTaskTitle(e.target.value)}
                />
                <Button type="submit" variant="contained" endIcon={<AddIcon />}>
                    Add
                </Button>
            </form>

            <ul>
                {props.todos.map((todo) => (
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                        }}
                        key={todo.id}
                    >
                        <li key={todo.id}>{todo.title}</li>
                        <IconButton
                            aria-label="delete"
                            onClick={() => props.deleteTodo(todo.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}
            </ul>
            <Button variant="contained" onClick={props.onLogout}>
                Logout
            </Button>
        </div>
    );
};
