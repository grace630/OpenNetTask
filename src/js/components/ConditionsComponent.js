import React, { Component } from 'react';

class ConditionsComponent extends Component {
    render() {
        return (
            <div>
                <hr />
                Age: <select id='selAge'>
                    <option value=">"> > </option>
                    <option value=">="> >= </option>
                    <option value="==" >= </option>
                    <option value="<=">&lt;=</option>
                    <option value="<">&lt;</option>
                </select>
                <input id='ageNum' type="number"></input><br />
                Length of full name: <select id='selNameLength'>
                    <option value=">"> > </option>
                    <option value=">="> >= </option>
                    <option value="==" >= </option>
                    <option value="<=">&lt;=</option>
                    <option value="<">&lt;</option>
                </select>
                <input id='nameLength' type="number"></input><br />
                <button type="button" onClick={() => this.props.filterUserLists()}>Search</button>
            </div>
        );
    }
}

export default ConditionsComponent;