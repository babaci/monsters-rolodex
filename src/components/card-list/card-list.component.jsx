// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

// implicit function return is between () 
// just like with a normal return statement 
// and not with curly brackets {}
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} key={monster.id} />;
    })}
  </div>
);

// *********************
// ** CLASS component **
// *********************

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
