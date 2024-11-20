import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

export async function GET(req: Request) {
    try {
        const projects = await prisma.classification.findMany({
            // include: {
            //     tasks: true, // 関連するタスクを含める
            // },
            select: { category: true },
        }); // プロジェクトを全て取得
        return NextResponse.json(projects);
    } catch (error) {
        console.error("エラー:", error);
        return NextResponse.json(
            { error: "プロジェクトの取得に失敗しました" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
