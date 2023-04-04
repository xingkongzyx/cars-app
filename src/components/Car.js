import React from "react";

class Car extends React.Component {
  componentDidUpdate() {
    console.log(this.props.carData.make, "updated");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const { make, quantity, id } = this.props.carData;
  //   const {
  //     make: nextMake,
  //     quantity: nextQuantity,
  //     id: nextId,
  //   } = nextProps.carData;

  //   console.log(quantity, nextQuantity);
  //   if (this.props.carData === nextProps.carData) {
  //     return false;
  //   }
  //   // if (quantity === nextQuantity) {
  //   //   return false;
  //   // }
  //   return true;
  //   // return false;
  // }

  render() {
    const { make, quantity } = this.props.carData;
    return (
      <div
        style={{
          border: "1px solid black",
          display: "inline-block",
          width: "100px",
          height: "100px",
          margin: "20px",
        }}
      >
        <p>{make}</p>
        <p>{quantity}</p>
      </div>
    );
  }
}

export default React.memo(Car);
