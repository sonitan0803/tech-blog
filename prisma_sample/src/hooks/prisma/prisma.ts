import axios from "axios";

import { CategoryData, DetailsData } from "@/interface/category";

export const usePrismaOperation = () => {
    // カテゴリを追加する
    const createCategory = async (category: string) => {
        try {
            const response = await axios.post("/api/createCategory", {
                category: category,
            });
            alert("成功" + response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data?.error);
                return;
            }
            // それ以外のエラーの場合
            alert("予期しないエラーが発生しました");
        }
    };

    const createDetails = async (category: string, details: string) => {
        try {
            const response = await axios.post("/api/createDetails", {
                category: category,
                details: [
                    {
                        title: details,
                    },
                ],
            });
            alert("成功" + response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                alert(error.response?.data?.error);
                return;
            }
            // それ以外のエラーの場合
            alert("予期しないエラーが発生しました");
        }
    };

    const getCategory = async (): Promise<CategoryData[]> => {
        try {
            const response = await axios.get("/api/getCategory", {});
            return response.data as CategoryData[];
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("APIエラー:", error.response?.data?.error);
                throw new Error(
                    error.response?.data?.error || "APIエラーが発生しました"
                );
            }
            // それ以外のエラーの場合
            throw new Error("予期しないエラーが発生しました");
        }
    };

    const getDetails = async (): Promise<DetailsData[]> => {
        try {
            const response = await axios.get("/api/getDetails", {});
            return response.data as DetailsData[];
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("APIエラー:", error.response?.data?.error);
                throw new Error(
                    error.response?.data?.error || "APIエラーが発生しました"
                );
            }
            // それ以外のエラーの場合
            throw new Error("予期しないエラーが発生しました");
        }
    };

    const deleteDetails = async (title: string) => {
        console.log("0:title=", title);
        try {
            await axios.delete(
                `/api/deleteDetails?title=${encodeURIComponent(title)}`
            );
            alert("成功");
            return;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("APIエラー:", error.response?.data?.error);
                throw new Error(
                    error.response?.data?.error || "APIエラーが発生しました"
                );
            }
            // それ以外のエラーの場合
            throw new Error("予期しないエラーが発生しました");
        }
    };
    return {
        createCategory,
        createDetails,
        getCategory,
        getDetails,
        deleteDetails,
    };
};
