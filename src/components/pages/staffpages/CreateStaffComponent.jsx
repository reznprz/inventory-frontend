import React, { Component } from 'react';
import StaffService from '../../../services/StaffService';
import {withRouter} from '../../../services/WithRouter';


class CreateStaffComponent extends Component {
    constructor(props){
        super(props);
        var id = window.location.href.split('/')[4]
        if(id === "addstaff"){
            id = -1
        }
        this.state = {
            id: id,
            firstName: "",
            lastname: "",
            email: "",
            address: "",
            phone: ""
        };
        this.changeSubmit = this.changeSubmit.bind(this);
        this.saveStaff = this.saveStaff.bind(this);

    }

    componentDidMount() {

        if(this.state.id == -1){
            return
        }
        else{
            StaffService.getStaffById(this.state.id).then( (res) => {
                let staffRes = res.data;
                this.setState({firstName : staffRes.firstName,
                    lastname : staffRes.lastName,
                    email : staffRes.email,
                    address : staffRes.address,
                    phone : staffRes.phoneNumber
                });
            });

        }
       

      
    }

    saveStaff = (e) => {
        e.preventDefault();

        let staff = {firstName: this.state.firstName,
        lastName: this.state.lastname,
        email: this.state.email,
        address: this.state.address,
        phoneNumber: this.state.phone}

        console.log('staff => ' + JSON.stringify(staff));

        if(this.state.id == -1 ){
            StaffService.createStaff(staff).then(res => {
                this.props.navigate('/staff-info');
            });
        }else{
            StaffService.updateStaff(staff, this.state.id).then( res => {
                this.props.navigate('/staff-info');
            });
        }
    }

    changeSubmit(event){
        this.setState({[event.target.name ]: event.target.value})
    }

    cancel() {
        this.props.navigate('/staff-info');
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 className= "text-center"> Add Staff </h3>
        }else{
            return <h3 className= "text-center"> Update Staff </h3>
        }
    }


    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                                <div className= "card-body">
                                    <form>
                                        <div className= "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name ="firstName" className="form-control" 
                                            value={this.state.firstName} onChange= {this.changeSubmit} required/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name = "lastname" className="form-control" 
                                            value={this.state.lastname} onChange={this.changeSubmit} required/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name = "email" className="form-control" 
                                            value={this.state.email} onChange={this.changeSubmit}/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name = "address" className="form-control" 
                                            value={this.state.address} onChange={this.changeSubmit}/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone" name = "phone" className="form-control" 
                                            value={this.state.phone} onChange={this.changeSubmit}/>
                                        </div>
                                        <button className="btn btn-sucess" onClick={this.saveStaff}> Save </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Delete </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateStaffComponent);