import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

export async function GET() {
    try {
        const projects = await prisma.detail.findMany({}); // プロジェクトを全て取得
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
