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
        }

        // リクエストのdetailsの中にDBに登録されているデータが無いか
        const detailsData = await prisma.detail.findMany({
            where: {
                category: classificationData.category,
                title: { in: body.details.map((detail) => detail.title) }, // 同じcategory内で既存のtitleをチェック
            },
        });

        if (detailsData.length > 0) {
            // 重複するタスクがあればエラーを返す
            return NextResponse.json(
                { error: "既に存在するタスクが含まれています" },
                { status: 400 }
            );
        }

        // detailデータを定義
        const details = body.details.map((detail) => ({
            title: detail.title,
            category: classificationData.category, // 作成したプロジェクトに紐づけ
        }));

        // detailデータを登録
        await prisma.detail.createMany({
            data: details,
            skipDuplicates: true, // 重複するタスクはスキップ
        });

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
