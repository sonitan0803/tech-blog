"use client";

import { usePrismaOperation } from "@/hooks/prisma/prisma";

interface props {
    categoryName: string;
}

export const CreateCategoryButton = (props: props) => {
    const prismaOperation = usePrismaOperation();

    return (
        <button
            style={{ width: "100%" }}
            onClick={() => prismaOperation.createCategory(props.categoryName)}
        >
            作る
        </button>
    );
};
