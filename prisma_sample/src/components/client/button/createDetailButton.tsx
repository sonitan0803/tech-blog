"use client";

import { usePrismaOperation } from "@/hooks/prisma/prisma";
import { useRouter } from "next/navigation";

interface props {
    categoryName: string;
    detailName: string;
}

export const CreateDetailButton = (props: props) => {
    const prismaOperation = usePrismaOperation();
    const router = useRouter();

    return (
        <button
            style={{ width: "100%" }}
            onClick={async () => {
                try {
                    // 非同期処理で詳細を作成
                    await prismaOperation.createDetails(
                        props.categoryName,
                        props.detailName
                    );
                    // ページをリフレッシュ
                    router.push("/");
                    router.refresh(); // App Router では reload じゃなく refresh！
                } catch (error) {
                    console.error("Error creating details:", error);
                }
            }}
        >
            作る
        </button>
    );
};
