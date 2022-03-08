const Properties = ({ setRawJson, jsonMetadata, setJsonMetadata }) => {

  const properties = {
    image: {
      value: jsonMetadata.image,
      used: false,
      necessity: "recommended",
      description:
        "This is the URL to the image of the item. Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea), and can be IPFS URLs or paths. We recommend using a 350 x 350 image.",
    },
    image_data: {
      value: jsonMetadata.image_data,
      used: false,
      necessity: "none",
      description:
        "Raw SVG image data, if you want to generate images on the fly (not recommended). Only use this if you're not including the image parameter.",
    },
    external_url: {
      value: jsonMetadata.external_url,
      used: false,
      necessity: "none",
      description:
        "This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site.",
    },
    description: {
      value: jsonMetadata.description,
      used: false,
      necessity: "recommended",
      description:
        "A human readable description of the item. Markdown is supported.",
    },
    name: {
      value: jsonMetadata.name,
      used: false,
      necessity: "required",
      description: "Name of the item.",
    },
    background_color: {
      value: jsonMetadata.background_color,
      used: false,
      necessity: "none",
      description:
        "Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #.",
    },
    animation_url: {
      value: jsonMetadata.animation_url,
      used: false,
      necessity: "none",
      description:
        "A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.",
    },
    youtube_url: {
      value: jsonMetadata.youtube_url,
      used: false,
      necessity: "none",
      description:
        "Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported. youtube_url. A URL to a YouTube video.",
    },
  }

  const setPropertyValue = (event, propertyName) => {
    setJsonMetadata(prevState => ({
      ...prevState,
      [propertyName]: event.target.value
    }))
    setRawJson(JSON.stringify(jsonMetadata, null, 4))
    console.log(JSON.stringify(jsonMetadata, null, 4))
  }

  return (
    <div className="shadow-inner shadow-gray-300 bg-[#f8fafb] p-4 m-8 rounded-md">
      <div className="pb-4 pt-12 ml-6 text-center text-4xl"> Properties </div>
      <div className="flex w-full flex-col place-items-center">
        {Object.entries(properties).map(([propertyName, propertyInfo]) => {
          if (propertyInfo.value || propertyInfo.necessity === "none") {
            return (
              <div className="my-4 w-11/12">
                <textarea
                  className="property-input"
                  rows="1"
                  placeholder={propertyName}
                  value={propertyInfo.value}
                  onInput={(event) => setPropertyValue(event, propertyName)}
                />
              </div>
            )
          } else if (propertyInfo.necessity === "required") {
            return (
              <div className="my-4 w-11/12">
                <textarea
                  className="property-input"
                  rows="1"
                  placeholder={`${propertyName} is a required property!`}
                  value={propertyInfo.value}
                  onInput={(event) => setPropertyValue(event, propertyName)}
                />
              </div>
            )
          } else if (propertyInfo.necessity === "recommended") {
            return (
              <div className="my-4 w-11/12">
                <textarea
                  className="property-input"
                  rows="1"
                  placeholder={`${propertyName} is a recommended property.`}
                  value={propertyInfo.value}
                  onInput={(event) => setPropertyValue(event, propertyName)}
                />
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Properties