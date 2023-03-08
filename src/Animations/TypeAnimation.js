import React from "react";

class TypeAnimation extends React.Component {
  render() {
    const { text } = this.props;
    console.log(text);
    return (
      <TypeAnimation
        sequence={[
          0,
          { text },
          () => {
            console.log("Done typing!");
          },
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
    );
  }
}

export default TypeAnimation;
