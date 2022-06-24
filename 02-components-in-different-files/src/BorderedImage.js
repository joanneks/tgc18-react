function BorderedImage() {
    return (
      <img src={require('./ramen.jpg')} style={
        {
          "border":"4px solid red"
        }
      }/>
    ) 
  }

  export default BorderedImage;