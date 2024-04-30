import { promises as fs } from "fs";

interface District {
  id: string;
  name: string;
}

export async function GET() {
  try {
    const filePath = process.cwd() + "/public/data/bd-districts.json";
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data: District[] = JSON.parse(fileContent);
    const beautifyData = data.map((item) => ({
      ...item,
      id: parseInt(item.id),
    }));
    return Response.json(beautifyData);
  } catch (err) {
    return Response.json(err, { status: 400 });
  }
}
