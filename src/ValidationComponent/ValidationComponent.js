import React, {Component} from 'react';

class ValidationComponent extends Component {
    render() {
        let length = this.props.len;
        let message = 'Text is too short';

        if (length >= 5 && length <=15) {
            message = 'Text is perfect';
        } else if ( length > 15 ) {
            message = 'Text is too long';
        }

        return (
            <p>{message}</p>
        )
    }
}

export default ValidationComponent;
