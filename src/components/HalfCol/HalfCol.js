import React from "react"

const Col = props => {
  const side = props.side

  const styleObj = {
    width: props.width ? props.width : "50%",
    height: props.height ? props.height : "100%",
    display: props.display ? props.display : "flex",
    position: props.position ? props.position : "absolute",
    top: props.top ? props.top : "0",
    left: props.left ? "0" : null,
    right: props.right ? "0" : null,
    paddingLeft: props.left ? "7%" : null,
    paddingRight: props.right ? "7%" : null,
    paddingTop: props.padTop ? props.padTop : null,
    paddingBott: props.padBott ? props.padBott : null,
    justifyContent: props.justCont ? props.justCont : "center",
    flexDirection: props.flexDir ? props.flexDir : null,
    alignItems: props.alignItems ? props.alignItems : null,
    marginLeft: props.marginLeft ? props.marginLeft : null,
    marginTop: props.marginTop ? props.marginTop : null,
    marginBottom: props.marginBottom ? props.marginBottom : null,
  }
  return <div style={styleObj}>{props.children}</div>
}

export default Col
