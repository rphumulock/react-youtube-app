import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    render() {
        return (
            <div className="search-bar col-md-6">
                <input
                    value={this.state.input}
                    onChange={
                        (event) => {
                            this.setState({ input: event.target.value });
                            this.props.onInputChange(event.target.value);
                        }
                    } />
            </div>
        );
    };
};

export default SearchBar;