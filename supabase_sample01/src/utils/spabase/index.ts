import { createClient } from "@supabase/supabase-js";
import type { User } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const login = async (username: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: username,
        password: password,
    });
    if (error) {
        throw error;
    }
    return data;
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        throw error;
    }
};

export const getSession = async (): Promise<User> => {
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (session) {
        // ログイン済み
        const user: User = session.user;
        return user;
    } else {
        // 未ログイン
        throw new Error("Not logged in");
    }
};
