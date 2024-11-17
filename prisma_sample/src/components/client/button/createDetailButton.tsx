"use client";

import { usePrismaOperation } from "@/hooks/prisma/prisma";

interface props {
    categoryName: string;
    detailName: string;
}

export const CreateDetailButton = (props: props) => {
    const prismaOperation = usePrismaOperation();

    return (
        <button
            style={{ width: "100%" }}
            onClick={() =>
                prismaOperation.createDetails(
                    props.categoryName,
                    props.detailName
                )
            }
        >
            作る
        </button>
    );
};
