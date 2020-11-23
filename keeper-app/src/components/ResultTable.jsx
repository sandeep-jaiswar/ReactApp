import RestaurantDetails from "./restaurantDetails";
import restaurants from "../restaurants";

function ResultTable(props) {
    return(
        <div className="well table-responsive" style={{margin: "auto",width: "fit-content"}}>
        <table className="table table-bordered table-hover table-sm">
          <thead className="ivory">
            <tr>
              <th>#</th>
              <th>Brand</th>
              <th>Variety</th>
              <th>Style</th>
              <th>Country</th>
              <th>Stars</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody> 
            {restaurants.map( 
              (restaurants,index) =>
                <RestaurantDetails key={index} Brand={restaurants.Brand} Variety={restaurants.Variety} Style={restaurants.Style} Country={restaurants.Country} Stars={restaurants.Stars} TopTen={restaurants['Top Ten']}></RestaurantDetails>
            )}
          </tbody>
        </table>
      </div>
    );
}

export default ResultTable;