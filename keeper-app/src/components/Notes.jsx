function Notes(props) {
    return (
      <div className="card notes" style={{width: "400px",margin : "3%"}}>
            <div className="card-body">
              <h4 className="card-title">Brand : {props.Brand}</h4>
              <p className="card-text">
              Variety: {props.Variety}, <br/>
              Style: {props.Style},<br/>
              Country: {props.Country},<br/>
              Stars: {props.Stars},<br/>
              Top Ten: {props.TopTen}
              </p>
            </div>
      </div>     
    );
  }
  
  export default Notes;