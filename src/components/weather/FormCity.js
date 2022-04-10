import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

class FormCity extends React.Component {
    render() {
        return (
            <div>
             <InputGroup>
                <Form onSubmit={this.props.weatherMethod}>
                    <Form.Group>
                        <input type="text" name="cityName" placeholder="Город" />
                        <button>Запросить</button>
                    </Form.Group>
                </Form>
            </InputGroup>
            </div>
        );
    }
}

export default FormCity;