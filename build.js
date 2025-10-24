const fs = require("fs");
const path = require("path");

console.log("🔨 Iniciando build...\n");

// Verificar que node_modules existe
if (!fs.existsSync("node_modules")) {
  console.error("❌ ERROR: node_modules no existe. Ejecuta 'npm install' primero.");
  process.exit(1);
}

// Verificar que maxi-web-components existe
if (!fs.existsSync("node_modules/maxi-web-components")) {
  console.error("❌ ERROR: maxi-web-components no está instalado.");
  process.exit(1);
}

console.log("✅ Dependencias verificadas\n");

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

// Limpiar dist si existe
if (fs.existsSync("dist")) {
  console.log("🗑️  Limpiando carpeta dist anterior...");
  fs.rmSync("dist", { recursive: true, force: true });
}

console.log("📁 Creando carpeta dist...\n");
fs.mkdirSync("dist");

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

// Copiar maxi-web-components a vendor/ en lugar de node_modules/ 
// (Netlify ignora node_modules por defecto)
const maxiDistPath = "node_modules/maxi-web-components/dist";
const distVendorPath = "dist/vendor/maxi-web-components";

if (fs.existsSync(maxiDistPath)) {
  // Copiar todo el contenido de dist/ a vendor/
  copyDir(maxiDistPath, distVendorPath);
  console.log("✅ Copiado: vendor/maxi-web-components");
  
  // Verificar que global.css fue copiado
  const globalCssCheck = path.join(distVendorPath, "global.css");
  if (fs.existsSync(globalCssCheck)) {
    console.log("   ✓ global.css");
  } else {
    console.log("   ✗ global.css (NO ENCONTRADO)");
  }
  
  // Verificar que maxi-web-components fue copiado
  const maxiJsCheck = path.join(distVendorPath, "maxi-web-components");
  if (fs.existsSync(maxiJsCheck)) {
    console.log("   ✓ maxi-web-components/");
  } else {
    console.log("   ✗ maxi-web-components/ (NO ENCONTRADO)");
  }
  
  // Verificar assets
  const assetsCheck = path.join(distVendorPath, "assets");
  if (fs.existsSync(assetsCheck)) {
    console.log("   ✓ assets/");
  } else {
    console.log("   ℹ assets/ (no existe en source)");
  }
} else {
  console.log("❌ No encontrado: node_modules/maxi-web-components/dist");
}

console.log('\n🚀 Build completado! Usa la carpeta "dist" para deployar.');

// Verificar estructura completa de dist/
console.log('\n📂 Estructura completa de dist/:');
function listDir(dir, indent = '') {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir, { withFileTypes: true });
  items.forEach(item => {
    if (item.isDirectory()) {
      console.log(`${indent}📁 ${item.name}/`);
      // Solo listar subdirectorios importantes, no recursivo completo
      if (item.name === 'node_modules' || item.name === 'maxi-web-components' || item.name === 'dist') {
        listDir(path.join(dir, item.name), indent + '  ');
      }
    } else {
      console.log(`${indent}📄 ${item.name}`);
    }
  });
}
listDir('dist');

console.log('\n📊 Tamaño de archivos críticos:');
const criticalFiles = [
  'dist/vendor/maxi-web-components/global.css',
  'dist/vendor/maxi-web-components/maxi-web-components/maxi-web-components.esm.js'
];
criticalFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const stats = fs.statSync(file);
    console.log(`   ✓ ${file} (${stats.size} bytes)`);
  } else {
    console.log(`   ✗ ${file} (NO EXISTE)`);
  }
});
