import { useEffect, useState, useContext } from "react";

import { UserDataView } from "./user_data.view";
import { useNavigate } from "react-router-dom";

import { logout, getSession, supabase } from "@/utils/spabase";
import { SnackStateContext } from "@/context/snack_bar";
import { z } from "zod";

// interface Todo {
//     id: number;
//     title: string;
// }
const TodoSchema = z.object({
    id: z.number(),
    title: z.string(),
});
const TodosSchema = z.array(TodoSchema);

type Todo = z.infer<typeof TodoSchema>;

export const UserData = () => {
    const [userName, setUserName] = useState("");
    const navigate = useNavigate();
    const { SnackBar, setSnackState } = useContext(SnackStateContext);
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleLogout = () => {
        // Implement logout logic if needed
        logout().catch((error) => {
            console.error("Logout failed:", error);
        });
    };

    supabase.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_OUT") {
            setUserName("name not found");
            setSnackState({
                isOpen: true,
                message: "ログアウト",
                severity: "success",
                vertical: "bottom",
                horizontal: "right",
            });
            setTimeout(() => {
                navigate("/");
            }, 800); // 1.2秒後に遷移
        }
    });

    useEffect(() => {
        async function getTodos() {
            const { data: todos } = await supabase.from("todos").select("*");
            if (!todos) {
                console.error("TODO NULLっちゃ");
                return;
            }
            const parseResult = TodosSchema.safeParse(todos);
            if (!parseResult.success) {
                console.error("Zodバリデーションエラー", parseResult.error);
                setSnackState({
                    isOpen: true,
                    message: "TODOデータ型不一致",
                    severity: "error",
                    vertical: "bottom",
                    horizontal: "right",
                });
                return;
            }
            if (todos.length >= 1) {
                setTodos(todos);
            }
        }

        getSession()
            .then((user) => {
                const name = user.user_metadata.display_name;
                setUserName(name);
                getTodos();
            })
            .catch(() => {
                setSnackState({
                    isOpen: true,
                    message: "ログインしていません",
                    severity: "error",
                    vertical: "bottom",
                    horizontal: "right",
                });
                setUserName("name not found");
                setTimeout(() => {
                    navigate("/");
                }, 800); // 1.2秒後に遷移
            });
    }, []);

    return (
        <>
            {SnackBar}
            <UserDataView
                userName={userName}
                onLogout={handleLogout}
                todos={todos}
            ></UserDataView>
        </>
    );
};
