function restaurantDetails(props) {
    function FindYear(TopTen){
        return TopTen.split(' ')[0];
    }

    function FindRank(TopTen){
        var a= TopTen.split(' ')[1];
        if(a!==undefined && a!==null){
            return a.substring(1,a.length);
        }
        return undefined;
    }

    return (
      <tr>
          <td>{FindRank(props["TopTen"])}</td>
          <td>{props.Brand}</td>
          <td>{props.Variety}</td>
          <td>{props.Style}</td>
          <td>{props.Country}</td>
          <td>{props.Stars}</td>
          <td>{FindYear(props["TopTen"])}</td>
      </tr> 
    );
  }
  
  export default restaurantDetails;