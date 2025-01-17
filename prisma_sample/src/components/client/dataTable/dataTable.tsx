"use client";

import React, { useEffect, useState } from "react";
import { usePrismaOperation } from "@/hooks/prisma/prisma";
import { CategoryData, DetailsData } from "@/interface/category";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    // propsが更新されたときに状態を更新する
    useEffect(() => {
        setCategoryData(props.initCategoryData);
        setDetailData(props.initDetailData);
    }, [props.initCategoryData, props.initDetailData]);

    return (
        <div style={{ width: "50vw" }}>
            {categoryData && categoryData.length > 0 ? (
                <ul className="list-13">
                    リスト
                    {categoryData.map(
                        (category: CategoryData, index: number) => (
                            <li key={index}>
                                {category.category}
                                <button
                                    style={{
                                        marginLeft: "2%",
                                    }}
                                    onClick={async () => {
                                        await prismaOperation.deleteCategory(
                                            category.category
                                        );
                                        // ページをリフレッシュ
                                        router.push("/");
                                        router.refresh();
                                    }}
                                >
                                    削除
                                </button>
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
                                                    <button
                                                        style={{
                                                            marginLeft: "2%",
                                                        }}
                                                        onClick={async () => {
                                                            await prismaOperation.deleteDetails(
                                                                detail.title
                                                            );
                                                            // ページをリフレッシュ
                                                            router.push("/");
                                                            router.refresh();
                                                        }}
                                                    >
                                                        削除
                                                    </button>
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
