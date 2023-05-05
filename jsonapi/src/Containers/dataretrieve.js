import { connect } from "react-redux";

function DataRetrieve(props){

    return (

        <div>
         Lenght is   {props.details.length}
        </div>
    )
}

function mapStateToProps(appState){
    //console.log("appState", appState);
       return {details: appState.details}
   }

   export default connect(mapStateToProps, null)(DataRetrieve);