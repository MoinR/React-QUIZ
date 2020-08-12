import React from 'react';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { updateList } from '../redux/actions';

class Home extends React.Component {

    constructor() {
        super();
        // Bind all the methods to the current object 
        // this.updateMessage = this.updateMessage.bind(this);
        this.addTech = this.addTech.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    addTech() {
        const val = this.state.val;
        this.props.updateList(val);
    }

    handleInput(e) {
        this.setState({
            val: e.target.value,
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <div className="input-group w-25 w-sm-75 mb-3">
                        <input type="text" className="form-control" onKeyUp={this.handleInput} placeholder="Technology" aria-label="New technology " aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-light" onClick={this.addTech} type="button"> Add technology </button>
                        </div>
                    </div>

                    <div className="MyTech">
                        <h4> My favorite technologies </h4>
                        <ul>
                            { this.props.arr.map((ele, i) => <li key={i}> {ele}</li>) }
                        </ul>
                    </div>
                    {/* <DataTable />  */}

                </header>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    arr: state.listReducer
})

export default connect(mapStateToProps, { updateList: updateList })(Home);
// export default connect(state=> state.arr, {updateList: updateList})(Home);