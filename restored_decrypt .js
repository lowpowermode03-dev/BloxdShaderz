const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;

// 1. 設定你的來源資料夾與輸出資料夾路徑
const inputDir = '/Users/Rafer/Downloads/Bloxd js/New JS';
const outputDir = path.join(inputDir, 'restored_files');

// 如果輸出資料夾不存在，就自動建立一個
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// 2. 讀取資料夾內的所有檔案
const files = fs.readdirSync(inputDir);
files.forEach(file => {
  // 只處理 .js 檔案，並跳過我們自己寫的還原腳本（假設本腳本叫 decode.js）
  if (path.extname(file) === '.js' && file !== 'decode.js' && !file.includes('tempCodeRunnerFile')) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, `restored_${file}`);
    console.log(`正在解析: ${file} ...`);
    try {
      // 3. 讀取單一混淆檔案
      const code = fs.readFileSync(inputFilePath, 'utf-8');

      // 4. 解析為 AST
      const ast = parser.parse(code, {
        sourceType: "module",
        plugins: ["jsx", "typescript"] // 順便加入常用插件，防止因為特殊語法噴錯
      });

      // 5. AST 還原邏輯（在這裡放入你的解密邏輯）
      traverse(ast, {
        // 你的解密程式碼寫在這裡
      });

      // 6. 產生新程式碼並寫入輸出資料夾
      const output = generator(ast, {}, code);
      fs.writeFileSync(outputFilePath, output.code);
      console.log(`✅ 成功還原: ${file} -> restored_${file}`);
    } catch (error) {
      console.error(`❌ 解析檔案 ${file} 失敗，錯誤原因:`, error.message);
    }
  }
});
console.log('\n🎉 所有檔案處理完畢！請至 restored_files 資料夾查看。');