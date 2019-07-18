import React, { Component } from 'react';
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchData } from '../../action/Action';

class GroupData extends Component {

    componentDidMount() {
        this.props.fetchNewData('http://demo2250061.mockable.io/country.json');
    }
    render() {
        return (
             <div className="container">
                <h2 className="panel_card">Basic Panel</h2>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.props.items.map(function(name, index){
                                return <li className="list-group-item" key={index}>{name.name}</li>;
                            })}
                        </ul>
                    </div>
                </div>
             </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.customerDataHasErrored,
        isLoading: state.customerDataIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        //fetchNewData: bindActionCreators(fetchData,dispatch)
        fetchNewData: (url) => dispatch(fetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupData);