import { connect } from "react-redux";

import { latestIndiaNews } from "../../actions";

let Button = ({getIndiaNews}) =>(
    <div>
        <button onClick={getIndiaNews}>Get Latest India News</button>
    </div>
)

const mapDispatchToProps = {
    getIndiaNews: latestIndiaNews
}

Button = connect(null,mapDispatchToProps)(Button)


export default Button