import React, {Component} from 'react';
import SingleDate from './SingleDate'

class ListDates extends Component{
    render(){

        const dates = this.props.dates;
        const message = Object.keys(dates).length === 0 ? 'There are no dates' : 'Manage your dates'
        return(
            <div className = "card mt-5">
                <div className = "card-body">
                    <h2 className = "card-title text-center">
                        {message}
                    </h2>
                    <div className = "list-dates">
                        {Object.keys(this.props.dates).map(date =>(
                            <SingleDate 
                                key = {date}
                                idDate = {date}
                                info = {this.props.dates[date]}
                                removeDate = {this.props.removeDate}
                            />
                        ))}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default ListDates