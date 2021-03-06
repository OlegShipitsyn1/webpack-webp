import imagemin from "imagemin"
import webp from "imagemin-webp"

imagemin( ['images/*.png'], {
    destination: 'images',
    plugins: [
        webp( { quality: 60 } )
    ]
} )