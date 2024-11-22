"use client";

import React, { useState, useEffect } from "react";
import { CategoryData } from "@/interface/category";

import { CreateDetailButton } from "../button/createDetailButton";

interface props {
    initCategoryData: CategoryData[];
}

export function DetailsForm(props: props) {
    const [categoryList, setCategoryList] = useState<CategoryData[]>(
        props.initCategoryData
    );
    const [categoryName, setCategoryName] = useState(
        props.initCategoryData[0].category
    );
    const [detailName, setDetailName] = useState("");

    useEffect(() => {
        setCategoryList(props.initCategoryData);
        setCategoryName(props.initCategoryData[0].category);
    }, [props.initCategoryData]);

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
                setDetailName={setDetailName}
            />
        </div>
    );
}

export default DetailsForm;
