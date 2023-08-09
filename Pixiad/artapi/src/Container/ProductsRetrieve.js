import { connect } from "react-redux";

function ProductsRetrieve(props){

    return (

        <div>
         Lenght is   {props.products.length}
        </div>
    )
}

function mapStateToProps(appState){
    //console.log("appState", appState);
       return {products: appState.products}
   }

   export default connect(mapStateToProps, null)(ProductsRetrieve);