import RestaurantDetails from "./restaurantDetails";


function ResultTable(props) {
  if (props.error) {
    return <div>Error: {props.error.message}</div>;
  } else if (!props.isLoaded) {
    return <div>Loading...</div>;
  } else{
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
            {props.result.map( 
              (restaurants,index) =>
                <RestaurantDetails key={index} Brand={restaurants.Brand} Variety={restaurants.Variety} Style={restaurants.Style} Country={restaurants.Country} Stars={restaurants.Stars} TopTen={restaurants['Top Ten']}></RestaurantDetails>
            )}
          </tbody>
        </table>
      </div>
    );
  }
//for filter
  // .sort(
  //   (a, b) => a["Top Ten"].split(' ')[0] === b["Top Ten"].split(' ')[0] ?
  //   b["Top Ten"].split(' ')[1].substring(1,b["Top Ten"].split(' ')[0].length).toString().localeCompare(a["Top Ten"].split(' ')[1].substring(1,a["Top Ten"].split(' ')[0].length)) :
  //   b["Top Ten"].split(' ')[0].toString().localeCompare(a["Top Ten"].split(' ')[0]))

  
    
}

export default ResultTable;