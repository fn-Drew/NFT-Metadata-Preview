const RawJsonInput = (props) => {
  return (
    <div class="py-12 mx-14 w-full h-full">
      <textarea class="w-5/6 h-5/6 resize-y" rows="20" placeholder="Input Metadata..." onInput={props.handleUserInput} />
    </div>
  )
}

export default RawJsonInput 