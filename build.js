const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

const filesToCopy = ["index.html", "styles", "js", "assets"];

filesToCopy.forEach((file) => {
  const srcPath = file;
  const destPath = path.join("dist", file);

  if (fs.existsSync(srcPath)) {
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
    console.log(`✅ Copiado: ${file}`);
  } else {
    console.log(`❌ No encontrado: ${file}`);
  }
});

const maxiComponentsPath =
  "node_modules/maxi-web-components/dist/maxi-web-components";
const distMaxiPath =
  "dist/node_modules/maxi-web-components/dist/maxi-web-components";

if (fs.existsSync(maxiComponentsPath)) {
  copyDir(maxiComponentsPath, distMaxiPath);
  console.log("✅ Copiado: maxi-web-components JS");
} else {
  console.log("❌ No encontrado: maxi-web-components");
}

const globalCssPath = "node_modules/maxi-web-components/dist/global.css";
const distGlobalCssPath =
  "dist/node_modules/maxi-web-components/dist/global.css";

if (fs.existsSync(globalCssPath)) {
  const distDir = "dist/node_modules/maxi-web-components/dist";
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.copyFileSync(globalCssPath, distGlobalCssPath);
  console.log("✅ Copiado: global.css");
} else {
  console.log("❌ No encontrado: global.css");
}

const maxiAssetsPath = "node_modules/maxi-web-components/dist/assets";
const distAssetsPath = "dist/assets";

if (fs.existsSync(maxiAssetsPath)) {
  copyDir(maxiAssetsPath, distAssetsPath);
  console.log("✅ Copiado: assets/fonts");
} else {
  console.log("ℹ️ No se encontraron assets locales");
}

console.log('\n🚀 Build completado! Usa la carpeta "dist" para deployar.');
