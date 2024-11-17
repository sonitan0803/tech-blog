"use client";

import React, { useState, useLayoutEffect } from "react";
import { CategoryData } from "@/interface/category";
import { usePrismaOperation } from "@/hooks/prisma/prisma";

import { CreateDetailButton } from "../button/createDetailButton";

export function DetailsForm() {
    const prismaOperation = usePrismaOperation();

    const [categoryList, setCategoryList] = useState<CategoryData[]>([
        { category: "" },
    ]);
    const [categoryName, setCategoryName] = useState("哺乳類");
    const [detailName, setDetailName] = useState("");

    useLayoutEffect(() => {
        const fetchData = async () => {
            try {
                const aaa: CategoryData[] = await prismaOperation.getCategory();
                setCategoryList(aaa);
                console.log("CategoryData オブジェクト:", aaa);

                // 例えば、aaa が { id: 1, name: "Sample Category" } というデータを返す場合
                console.log("category:", aaa[0].category); // IDの値を出力
            } catch (error) {
                console.error("エラーが発生しました:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "10vw",
                height: "10vw",
            }}
        >
            <div>追加するカテゴリ</div>
            <select onChange={(e) => setCategoryName(e.target.value)}>
                {categoryList.map((category) => {
                    return (
                        <option
                            key={category.category}
                            value={category.category}
                        >
                            {category.category}
                        </option>
                    );
                })}
            </select>

            <div>追加する生物</div>
            <form>
                <label>
                    <input
                        value={detailName}
                        onChange={(e) => setDetailName(e.target.value)}
                    />
                </label>
            </form>
            <CreateDetailButton
                categoryName={categoryName}
                detailName={detailName}
            />
        </div>
    );
}

export default DetailsForm;
