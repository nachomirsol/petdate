import React,{Component} from 'react'
class SingleDate extends Component{
    render(){
        const {date,hour,pet,owner,symptoms} = this.props.info;
        return(
            <div className = "media mt-3">
                <div className = "media-body">
                    <h3 className ="mt-0">{pet}</h3>
                    <p className="card-text"><span>Owner Name:</span>{owner}</p>
                    <p className="card-text"><span>Date:</span>{date}</p>
                    <p className="card-text"><span>hour:</span>{hour}</p>
                    <p className="card-text"><span>Symptoms:</span>{symptoms}</p>
                    <button 
                        onClick = {() => this.props.removeDate(this.props.idDate)}
                        className = "btn btn-danger">
                        Remove
                    </button>
                </div>
            </div>
        )
    }
}

export default SingleDate