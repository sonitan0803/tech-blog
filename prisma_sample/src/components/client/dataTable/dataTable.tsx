"use client";

import React, { useLayoutEffect, useState } from "react";
import { usePrismaOperation } from "@/hooks/prisma/prisma";
import { CategoryData, DetailsData } from "@/interface/category";

export function DataTable() {
    const prismaOperation = usePrismaOperation();
    const [categoryData, setCategoryData] = useState<CategoryData[] | null>(
        null
    ); // 初期値を null に設定
    const [detailData, setDetailData] = useState<DetailsData[] | null>(null);

    useLayoutEffect(() => {
        const fetchData = async () => {
            try {
                setCategoryData(await prismaOperation.getCategory());
                setDetailData(await prismaOperation.getDetails());
            } catch (error) {
                console.error("エラーが発生しました:", error);
            }
        };

        fetchData();
    }, []);

    // データがない場合にローディングメッセージを表示する
    if (categoryData === null || detailData === null) {
        return <div>Loading...</div>;
    }

    console.log(
        "detailData",
        detailData.filter((x) => x.category === "哺乳類")
    );
    return (
        <div>
            {categoryData && categoryData.length > 0 ? (
                <ul>
                    {categoryData.map(
                        (category: CategoryData, index: number) => (
                            <li key={index}>
                                {category.category}
                                <ul>
                                    {detailData && detailData.length > 0 ? (
                                        detailData
                                            .filter(
                                                (data) =>
                                                    data.category ===
                                                    category.category
                                            )
                                            .map((detail: DetailsData) => (
                                                <li key={detail.title}>
                                                    {detail.title}
                                                </li>
                                            ))
                                    ) : (
                                        <li>データがありません</li>
                                    )}
                                </ul>
                            </li>
                        )
                    )}
                </ul>
            ) : (
                <div>データがありません</div>
            )}
        </div>
    );
}

export default DataTable;
