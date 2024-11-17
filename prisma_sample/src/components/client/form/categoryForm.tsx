"use client";

import React, { useState } from "react";
import { CreateCategoryButton } from "@/components/client/button/createCategoryButton";

export function CategoryForm() {
    const [categoryName, setCategoryName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        // フォーム送信のデフォルト動作を防ぐ
        e.preventDefault();
    };

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
            <form onSubmit={handleSubmit}>
                <label>
                    <input
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                    />
                </label>
            </form>
            <CreateCategoryButton categoryName={categoryName} />
        </div>
    );
}
