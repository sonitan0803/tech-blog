"use client";

import React, { useLayoutEffect, useState } from "react";
import { usePrismaOperation } from "@/hooks/prisma/prisma";
import { CategoryData, DetailsData } from "@/interface/category";

interface props {
    initCategoryData: CategoryData[];
    initDetailData: DetailsData[];
}

export function DataTable(props: props) {
    const prismaOperation = usePrismaOperation();
    const [categoryData, setCategoryData] = useState<CategoryData[]>(
        props.initCategoryData
    ); // 初期値を null に設定
    const [detailData, setDetailData] = useState<DetailsData[]>(
        props.initDetailData
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
