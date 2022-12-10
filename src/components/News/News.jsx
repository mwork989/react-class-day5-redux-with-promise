import { Component } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { latestIndiaNews } from "../../actions";


class News  extends Component{
    constructor(){
        super()
        // this.getLatestIndiaNews = this.getLatestIndiaNews.bind(this)
    }
    render(){
        let newsData;
        if(this.props && Object.keys(this.props).length>0 && this.props.news.latest){
            newsData = this.props.news.latest.articles.map((article,index)=>{
                return (
                    <div key={index}>
                        <p>{article.title}</p>
                        <p>{article.content}</p>
                        <p>{article.description}</p>
                        <p>{article.author}</p>
                        <img src={article.urlToImage}/>
                    </div>
                )
            })
        }

        return(
            <div>
                <h2>Top 10 India News Headlines</h2>
                {/* <button onClick={this.getLatestIndiaNews}>Get Latest News</button> */}
                {newsData}
            </div>
            
        )
    }

    getLatestIndiaNews(){
        this.props.latestIndiaNews();
    }
}

function mapStateToProps(state){
    return {
        news:state.news
    }
}

// function mapDispatchToProps(dispatch){
//     return bindActionCreators({latestIndiaNews},dispatch)
// }


export default connect(mapStateToProps,null)(News);