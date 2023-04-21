import fs from "fs";

export default defineEventHandler(
  () => {
    try {
      const f = fs.readFileSync('/variables.scss', 'utf-8');
      console.log(f);
      return f
    } catch (err) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed scssFileGenerator',
      })
    }
  }
);