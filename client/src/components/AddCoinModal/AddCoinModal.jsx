import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCoinModal extends React.Component {

  renderModal() {
    return (
      <div>
        <Button color="danger" onClick={this.props.toggleFn}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.props.show} toggle={this.props.toggleFn} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleFn}>Add a Coin</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="exampleEmail">Coin</Label>
          <Input type="text" name="email" id="coin" placeholder="e.g. BTC" />
          <Label for="exampleEmail">Holdings</Label>
          <Input type="number" name="email" id="amount" placeholder="e.g. 5" />
        </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleFn}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleFn}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  render() {
    return (
      <div>
      {this.props.show && (this.renderModal())}
      </div>
    );
  }
}

export default AddCoinModal;