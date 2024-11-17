import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

// PrismaClientのインスタンスを作成
const prisma = new PrismaClient();

// Detailモデルの定義
interface Detail {
    title: string;
}

// Classificationモデルの定義
interface Classification {
    category: string;
    details: Detail[];
}

// POSTリクエストの処理
export async function POST(req: Request) {
    // リクエストのボディをJSONとして取得
    const body: Classification = await req.json();
    try {
        if (body.category === "") {
            return NextResponse.json(
                { error: "値を入力してください" },
                { status: 400 }
            );
        }

        // カテゴリデータが既に存在するか確認
        let classificationData = await prisma.classification.findUnique({
            where: { category: body.category },
        });

        if (!classificationData) {
            // カテゴリデータがない場合はリクエストを元にDB２柄
            classificationData = await prisma.classification.create({
                data: {
                    category: body.category || "defaultProject", // プロジェクト名を取得
                },
            });
        } else {
            // 重複するタスクがあればエラーを返す
            return NextResponse.json(
                { error: "既に存在するカテゴリが含まれています" },
                { status: 400 }
            );
        }
        return NextResponse.json(classificationData);
    } catch (error) {
        // Error型の場合
        if (error instanceof Error) {
            return NextResponse.json(
                { error: `プロジェクトの作成に失敗しました: ${error.message}` },
                { status: 500 }
            );
        }

        // それ以外のエラーが発生した場合
        return NextResponse.json(
            { error: "予期しないエラーが発生しました" },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
}
