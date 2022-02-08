const SchemaUI = ({ userInput }) => {

  const properties = {
    "image": {
      "value": userInput.image,
      "used": false,
      "necessity": "recommended",
      "description": "This is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image."
    },
    "image_data": {
      "value": userInput.image_data,
      "used": false,
      "necessity": "none",
      "description": "Raw SVG image data, if you want to generate images on the fly (not recommended). Only use this if you're not including the image parameter."
    },
    "external_url": {
      "value": userInput.external_url,
      "used": false,
      "necessity": "none",
      "description": "This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site."
    },
    "description": {
      "value": userInput.description,
      "used": false,
      "necessity": "recommended",
      "description": "A human readable description of the item. Markdown is supported."
    },
    "name": {
      "value": userInput.name,
      "used": false,
      "necessity": "required",
      "description": "Name of the item."
    },
    "background_color": {
      "value": userInput.background_color,
      "used": false,
      "necessity": "none",
      "description": "Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #."
    },
    "animation_url": {
      "value": userInput.animation_url,
      "used": false,
      "necessity": "none",
      "description": "A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA."
    },
    "youtube_url": {
      "value": userInput.youtube_url,
      "used": false,
      "necessity": "none",
      "description": "Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported. youtube_url. A URL to a YouTube video."
    },
  }

  return (
    <div>
      {Object.entries(properties).map(([propertyName, propertyInfo]) => {
        // if (!propertyInfo.value) return null
        return (
          <div>
            <div class="text-3xl">{propertyName}</div>
            {/* <textarea class="border-none bg-[#fbfdff] my-2 leading-relaxed font-body text-left w-4/5 resize-none" value={propertyInfo.value} readOnly /> */}
            <textarea class="w-5/6 h-5/6 resize-y" placeholder="Input Metadata..." value={propertyInfo.value} />
          </div>
        )
      })}
    </div>
  )
}

export default SchemaUI