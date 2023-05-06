import React from 'react';
import RentingService from '../services/RentingService';

class RentingComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            partyItems:[]
        }
    }

    componentDidMount(){
        RentingService.getPartySupplies().then(
            (response) => {
                this.setState({ partyItems: response.data})
            }
        )
    }

    render(){
        return(
            <div>
                <h1 className = "text-center">Available Item List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Quantity</td>
                            <td>Rental Status</td>
                        </tr>
                    </thead>

                    <tbody>
                    {
                        this.state.partyItems.map(
                            partyItem =>
                                <tr key={partyItem.id}>
                                    <td>{partyItem.id}</td>
                                    <td>{partyItem.itemName}</td>
                                    <td>{partyItem.quantity}</td>
                                    <td>{partyItem.status}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RentingComponent;