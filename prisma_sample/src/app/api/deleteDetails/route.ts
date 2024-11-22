import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

export async function DELETE(req: Request) {
    const { searchParams } = new URL(req.url);
    const encodedTitle = searchParams.get("title");

    // パラメータをデコード
    const title = encodedTitle ? decodeURIComponent(encodedTitle) : "";

    if (!title) {
        return NextResponse.json(
            { error: "削除に失敗しました" },
            { status: 500 }
        );
    }
    try {
        const projects = await prisma.detail.delete({
            where: {
                title: title,
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
