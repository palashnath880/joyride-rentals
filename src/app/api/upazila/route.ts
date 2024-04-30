import { promises as fs } from "fs";

interface Upazila {
  id: string;
  district_id: string;
  name: string;
}

export async function GET() {
  try {
    const filePath = process.cwd() + "/public/data/bd-upazilas.json";
    const fileContent = await fs.readFile(filePath, "utf-8");
    const data: Upazila[] = JSON.parse(fileContent);
    const beautifyData = data.map((item) => ({
      ...item,
      district_id: parseInt(item.district_id),
      id: parseInt(item.id),
    }));
    return Response.json(beautifyData);
  } catch (err) {
    return Response.json(err, { status: 400 });
  }
}
