import React, {Component} from 'react'

class AddDate extends Component{

    petNameRef = React.createRef();
    ownerNameRef = React.createRef();
    dateRef = React.createRef();
    hourRef = React.createRef();
    symptomsRef = React.createRef();

    createNewDate = (e) => {
        e.preventDefault();
        
        
       const newDate = {
           pet: this.petNameRef.current.value,
           owner: this.ownerNameRef.current.value,
           date: this.dateRef.current.value,
           hour: this.hourRef.current.value,
           symptoms: this.symptomsRef.current.value
       }
       this.props.createDate(newDate);
    }

    render(){
        return(
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Add your dates Here:</h2>
                    <form onSubmit = {this.createNewDate}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Pet Name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Pet Name" ref = {this.petNameRef} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">owner name</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control"  placeholder="Pet owner name" ref = {this.ownerNameRef}/>
                            </div>
                        </div>

                         <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Date</label>
                            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
                                <input type="date" className="form-control" ref = {this.dateRef}/>
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hour</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" ref = {this.hourRef}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Symptoms</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea  className="form-control" ref = {this.symptomsRef}></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddDate