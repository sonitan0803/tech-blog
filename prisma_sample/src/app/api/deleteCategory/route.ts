import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const encodedTitle = searchParams.get("category");

    // パラメータをデコード
    const category = encodedTitle ? decodeURIComponent(encodedTitle) : "";

    if (!category) {
        return NextResponse.json(
            { error: "削除に失敗しました" },
            { status: 500 }
        );
    }
    try {
        const projects = await prisma.classification.delete({
            where: {
                category: category,
            },
        }); // プロジェクトを全て取得

        return NextResponse.json(projects);
    } catch (error) {
        console.error("エラー:", error);
        return NextResponse.json(
            { error: "削除に失敗しました" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
