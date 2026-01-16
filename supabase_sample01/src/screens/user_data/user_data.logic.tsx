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
    const [addTaskTitle, setAddTaskTitle] = useState("");

    const handleLogout = async () => {
        // Implement logout logic if needed
        await logout().catch((error) => {
            console.error("Logout failed:", error);
        });
    };

    const addTodo = async (title: string) => {
        if (title === "") {
            setSnackState({
                isOpen: true,
                message: "タスクを入力してください",
                severity: "error",
                vertical: "bottom",
                horizontal: "right",
            });
            return;
        }

        const userId = await supabase.auth.getUser().then((data) => {
            if (data.data.user) {
                return data.data.user.id;
            } else {
                setSnackState({
                    isOpen: true,
                    message: "ユーザー情報取得失敗",
                    severity: "error",
                    vertical: "bottom",
                    horizontal: "right",
                });
                throw new Error("User not found");
            }
        });

        const { error } = await supabase
            .from("todos")
            .insert([
                {
                    title: title,
                    user_id: userId,
                },
            ])
            .select();

        if (error) {
            setSnackState({
                isOpen: true,
                message: "データ追加失敗:" + error.message,
                severity: "error",
                vertical: "bottom",
                horizontal: "right",
            });
        }
        setSnackState({
            isOpen: true,
            message: "データ追加成功",
            severity: "success",
            vertical: "bottom",
            horizontal: "right",
        });
        setAddTaskTitle("");
        await getTodos();
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

    const deleteTodo = async (id: number) => {
        const { data, error } = await supabase
            .from("todos")
            .delete()
            .eq("id", id)
            .select();
        console.log("削除ID:", id, error);
        if (error) {
            setSnackState({
                isOpen: true,
                message: "データ削除失敗:" + error.message,
                severity: "error",
                vertical: "bottom",
                horizontal: "right",
            });
            return;
        }
        if (data.length === 0) {
            setSnackState({
                isOpen: true,
                message: "対象のデータが見つかりません",
                severity: "error",
                vertical: "bottom",
                horizontal: "right",
            });
            return;
        }
        setSnackState({
            isOpen: true,
            message: "データ削除成功",
            severity: "success",
            vertical: "bottom",
            horizontal: "right",
        });
        await getTodos();
    };

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

    useEffect(() => {
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
                addTaskTitle={addTaskTitle}
                setAddTaskTitle={setAddTaskTitle}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
            ></UserDataView>
        </>
    );
};
