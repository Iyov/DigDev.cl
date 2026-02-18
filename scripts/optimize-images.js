const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'img/external';
const outputDir = 'img/optimized';

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image configurations
const images = [
  { name: 'hero-bg.jpg', sizes: [1920, 1200, 800], quality: 80 },
  { name: 'caso-exito-1.jpg', sizes: [800, 600, 400], quality: 85 },
  { name: 'caso-exito-2.jpg', sizes: [800, 600, 400], quality: 85 },
  { name: 'caso-exito-3.jpg', sizes: [800, 600, 400], quality: 85 },
  { name: 'testimonial-francisca.jpg', sizes: [200, 100], quality: 80 },
  { name: 'testimonial-david.jpg', sizes: [200, 100], quality: 80 },
  { name: 'testimonial-emilia.jpg', sizes: [200, 100], quality: 80 },
  { name: 'blog-automatizacion.jpg', sizes: [800, 600, 400], quality: 85 },
  { name: 'blog-logistica.jpg', sizes: [800, 600, 400], quality: 85 },
  { name: 'blog-futuro.jpg', sizes: [800, 600, 400], quality: 85 }
];

async function processImage(config) {
  const inputPath = path.join(inputDir, config.name);
  const basename = path.basename(config.name, path.extname(config.name));
  
  console.log(`Processing ${config.name}...`);
  
  try {
    for (const size of config.sizes) {
      // WebP version
      const webpOutput = path.join(outputDir, `${basename}-${size}.webp`);
      await sharp(inputPath)
        .resize(size, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ 
          quality: config.quality,
          effort: 6
        })
        .toFile(webpOutput);
      
      // JPEG fallback
      const jpegOutput = path.join(outputDir, `${basename}-${size}.jpg`);
      await sharp(inputPath)
        .resize(size, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ 
          quality: config.quality,
          progressive: true,
          mozjpeg: true
        })
        .toFile(jpegOutput);
      
      console.log(`  ✓ Created ${basename}-${size}.webp and .jpg`);
    }
    
    console.log(`  ✓ Completed ${config.name}\n`);
  } catch (error) {
    console.error(`  ✗ Error processing ${config.name}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Optimization Started\n');
  
  for (const image of images) {
    await processImage(image);
  }
  
  console.log('✅ Image Optimization Complete!\n');
  console.log('📁 Optimized images saved to:', outputDir);
}

main().catch(console.error);
