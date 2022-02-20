const AnimationUrl = ({ animationUrl }) => {
  if (!animationUrl) {
    return null
  }

  if (animationUrl.substring(0, 7) === "ipfs://") {
    animationUrl = `https://ipfs.io/ipfs/${animationUrl.slice(7)}`
  }

  return (
    <div className="flex flex-col">
      <video
        onLoadStart="video.volume=0.01"
        className="w-1/2 place-self-center py-12"
        controls
      >
        <source src={animationUrl} />
      </video>
    </div>
  )
}

export default AnimationUrl
