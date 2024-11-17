import { DataTable } from "@/components/client/dataTable";
import { CategoryForm, DetailsForm } from "@/components/client/form/";

export default function Home() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <DataTable></DataTable>
            {/* 生物分類を増やすコンポーネント */}
            <CategoryForm></CategoryForm>
            {/* 生物の名前を増やすコンポーネント */}
            <DetailsForm></DetailsForm>
        </div>
    );
}
