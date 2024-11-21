"use client";

import { usePrismaOperation } from "@/hooks/prisma/prisma";
import { useRouter } from "next/navigation";

interface props {
    categoryName: string;
}

export const CreateCategoryButton = (props: props) => {
    const prismaOperation = usePrismaOperation();
    const router = useRouter();

    return (
        <button
            style={{ width: "100%" }}
            onClick={async () => {
                await prismaOperation.createCategory(props.categoryName);
                // ページをリフレッシュ
                router.push("/");
                router.refresh(); // App Router では reload じゃなく refresh！
            }}
        >
            作る
        </button>
    );
};
