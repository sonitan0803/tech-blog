import fs from "fs";
import fetch from "node-fetch"; // Node.js 18未満なら npm i node-fetch
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const FIGMA_TOKEN: string = process.env.FIGMA_TOKEN
    ? process.env.FIGMA_TOKEN
    : "";
const FILE_KEY = process.env.FILE_KEY;

interface NodeType {
    id: string;
    frameName: string;
}

const nodeId: NodeType[] = [
    {
        id: "2:2",
        frameName: "Main",
    },
    {
        id: "5:2",
        frameName: "Sub",
    },
];
async function exportFrameAsPng() {
    nodeId.map(async (node) => {
        // 1️⃣ PNG画像のURLを取得
        const imageUrlResponse = await fetch(
            `https://api.figma.com/v1/images/${FILE_KEY}?ids=${encodeURIComponent(
                node.id
            )}&format=png&scale=2`,
            {
                headers: {
                    "X-Figma-Token": FIGMA_TOKEN,
                },
            }
        );
        const { images } = (await imageUrlResponse.json()) as {
            images: Record<string, string>;
        };

        const imageUrl = images[node.id];
        if (!imageUrl) {
            throw new Error("Failed to get image URL from Figma API");
        }

        // 2️⃣ 画像をダウンロード
        const imageResponse = await fetch(imageUrl);
        const arrayBuffer = await imageResponse.arrayBuffer();

        // 3️⃣ ローカルに保存
        fs.writeFileSync(
            `tests/screen_compare/img/figma/${node.frameName}.png`,
            Buffer.from(arrayBuffer)
        );

        console.log(
            `✅ PNG exported successfully: tests/screen_compare/img/figma/${node.frameName}.png`
        );
    });
}

exportFrameAsPng().catch(console.error);
