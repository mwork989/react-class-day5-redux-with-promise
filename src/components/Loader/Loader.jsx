import { connect, Connect } from "react-redux";

let Loader = ({loading}) => (
       loading? <div>Loading.....</div> : null
)

const mapStateToProps = (state) => ({
    loading: state.news.isLoading

})

Loader = connect(mapStateToProps,null)(Loader)

export default Loader