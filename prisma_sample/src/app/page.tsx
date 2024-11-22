import { DataTable } from "@/components/client/dataTable";
import { CategoryForm, DetailsForm } from "@/components/client/form/";
import { CategoryData, DetailsData } from "@/interface/category";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// カテゴリ取得
async function getCategory(): Promise<CategoryData[]> {
    try {
        const categoryData = await prisma.classification.findMany({
            select: { category: true },
        });
        return categoryData.map((item) => ({
            category: item.category,
        })); // 必要なら型を合わせて整形
    } catch (error) {
        console.error("エラーが発生しました:", error);
        return [];
    }
}

// 詳細取得
async function getDetails(): Promise<DetailsData[]> {
    try {
        const detailsData = await prisma.detail.findMany({}); // プロジェクトを全て取得
        return detailsData;
    } catch (error) {
        console.error("エラー:", error);
        return [];
    }
}

export default async function Home() {
    const categoryData = await getCategory();
    const detailData = await getDetails();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <DataTable
                initCategoryData={categoryData}
                initDetailData={detailData}
            ></DataTable>
            {/* 生物分類を増やすコンポーネント */}
            <CategoryForm></CategoryForm>
            {categoryData && categoryData.length > 0 && (
                <>
                    {/* 生物の名前を増やすコンポーネント */}
                    <DetailsForm initCategoryData={categoryData}></DetailsForm>
                </>
            )}
        </div>
    );
}
