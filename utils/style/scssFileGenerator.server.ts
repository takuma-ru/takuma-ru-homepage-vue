import fs from 'fs'

/**
 * scssFileGenerator
 */
export const scssFileGenerator = () => {
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
