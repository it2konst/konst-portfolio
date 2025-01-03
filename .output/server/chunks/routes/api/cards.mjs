import { readFile } from 'fs/promises';
import { join } from 'path';
import { c as defineEventHandler } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'node:path';

const cards = defineEventHandler(async (event) => {
  const jsonPath = join(process.cwd(), "public", "project-cards.json");
  const fileContent = await readFile(jsonPath, "utf-8");
  const jsonData = JSON.parse(fileContent);
  return jsonData.cards;
});

export { cards as default };
//# sourceMappingURL=cards.mjs.map
