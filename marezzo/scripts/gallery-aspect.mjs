import sharp from "sharp";
import path from "path";

const files = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-table-detail.jpg",
  "gallery-4.jpg",
  "gallery-3.jpg",
  "gallery-5.jpg",
  "gallery-whiskey-alt.jpg",
  "gallery-embers.jpg",
];

for (const file of files) {
  const p = path.join(process.cwd(), "public", "images", file);
  const meta = await sharp(p).metadata();
  console.log(`${file}: ${meta.width}x${meta.height} aspect=${(meta.width / meta.height).toFixed(3)}`);
}
