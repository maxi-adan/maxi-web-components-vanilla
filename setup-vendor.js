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

// Verificar que el directorio fuente existe
if (!fs.existsSync(source)) {
  console.error(`❌ Error: El directorio fuente no existe: ${source}`);
  console.error("   Asegúrate de ejecutar 'npm install' primero.");
  process.exit(1);
}

// Eliminar symlink/carpeta anterior si existe
if (fs.existsSync(target)) {
  try {
    // En Windows, verificar si es un junction/symlink
    if (process.platform === "win32") {
      try {
        const stats = fs.lstatSync(target);
        if (stats.isSymbolicLink()) {
          // Es un symlink/junction, usar unlinkSync
          fs.unlinkSync(target);
        } else {
          // Es un directorio normal, usar rmSync
          fs.rmSync(target, { recursive: true, force: true });
        }
      } catch (e) {
        // Si lstatSync falla, intentar eliminar de todas formas
        try {
          fs.unlinkSync(target);
        } catch (e2) {
          fs.rmSync(target, { recursive: true, force: true });
        }
      }
    } else {
      // Unix/Mac: intentar unlink primero (para symlinks), luego rmSync
      try {
        const stats = fs.lstatSync(target);
        if (stats.isSymbolicLink()) {
          fs.unlinkSync(target);
        } else {
          fs.rmSync(target, { recursive: true, force: true });
        }
      } catch (e) {
        fs.rmSync(target, { recursive: true, force: true });
      }
    }
    
    // Verificar que realmente se eliminó (con reintentos en Windows)
    let retries = 0;
    while (fs.existsSync(target) && retries < 5) {
      if (process.platform === "win32") {
        const start = Date.now();
        while (Date.now() - start < 200) {
          // Esperar 200ms
        }
        try {
          fs.unlinkSync(target);
        } catch (e) {
          fs.rmSync(target, { recursive: true, force: true });
        }
      }
      retries++;
    }
    
    if (fs.existsSync(target)) {
      throw new Error(`No se pudo eliminar ${target} después de ${retries} intentos`);
    }
  } catch (err) {
    console.error(`❌ Error al eliminar ${target}: ${err.message}`);
    console.error(`   Por favor, elimínalo manualmente y vuelve a intentar.`);
    process.exit(1);
  }
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
    try {
      if (!fs.existsSync(src)) {
        throw new Error(`El directorio fuente no existe: ${src}`);
      }
      
      // Asegurarse de que el directorio padre existe
      const destParent = path.dirname(dest);
      if (!fs.existsSync(destParent)) {
        fs.mkdirSync(destParent, { recursive: true });
      }
      
      // Verificar si dest existe y es un symlink/junction roto
      try {
        if (fs.existsSync(dest)) {
          const stats = fs.lstatSync(dest);
          if (stats.isSymbolicLink()) {
            // Es un symlink, intentar eliminarlo
            fs.unlinkSync(dest);
          }
        }
      } catch (e) {
        // Ignorar errores al verificar
      }
      
      // Crear el directorio destino si no existe
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
    } catch (err) {
      console.error(`❌ Error al copiar archivos: ${err.message}`);
      throw err;
    }
  }
  
  try {
    copyDir(source, target);
    console.log("✅ Archivos copiados a vendor/maxi-web-components");
  } catch (err) {
    console.error(`❌ Error fatal durante la copia: ${err.message}`);
    process.exit(1);
  }
}

console.log("\n✨ Setup completado! Ahora puedes ejecutar 'npm run dev'");

