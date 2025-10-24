const fs = require("fs");
const path = require("path");

console.log("🔧 Configurando vendor/ para desarrollo local...\n");

// Crear carpeta vendor si no existe
if (!fs.existsSync("vendor")) {
  fs.mkdirSync("vendor", { recursive: true });
  console.log("✅ Creada carpeta vendor/");
}

// Crear symlink o copiar para desarrollo local
const source = path.resolve("node_modules/maxi-web-components/dist");
const target = path.resolve("vendor/maxi-web-components");

// Eliminar symlink/carpeta anterior si existe
if (fs.existsSync(target)) {
  fs.rmSync(target, { recursive: true, force: true });
}

// En Windows, crear una junction (similar a symlink pero no requiere permisos admin)
// En Unix/Mac, crear un symlink
try {
  if (process.platform === "win32") {
    // Windows: usar junction
    fs.symlinkSync(source, target, "junction");
    console.log("✅ Junction creado: vendor/maxi-web-components -> node_modules/maxi-web-components/dist");
  } else {
    // Unix/Mac: usar symlink
    fs.symlinkSync(source, target, "dir");
    console.log("✅ Symlink creado: vendor/maxi-web-components -> node_modules/maxi-web-components/dist");
  }
} catch (error) {
  // Si falla el symlink, copiar los archivos
  console.log("⚠️  No se pudo crear symlink, copiando archivos...");
  
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
  
  copyDir(source, target);
  console.log("✅ Archivos copiados a vendor/maxi-web-components");
}

console.log("\n✨ Setup completado! Ahora puedes ejecutar 'npm run dev'");

