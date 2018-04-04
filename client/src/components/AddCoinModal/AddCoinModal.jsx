import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class AddCoinModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.closeModalRefresh = this.closeModalRefresh.bind(this)
  }

  closeModalRefresh() {
    this.props.toggleFn()
    this.props.refreshData()
  }

  renderModal() {
    return (
      <div>
        <Button color="danger" onClick={this.props.toggleFn}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.props.show} toggle={this.props.toggleFn} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleFn}>Add a Coin</ModalHeader>
          
          <Form action="/coinpost" method ="post">
          <FormGroup>
          <Label for="coin-name">Coin</Label>
          <Input type="text" name="coinName" id="coin-name" placeholder="e.g. BTC" />
          <Label for="quantity">Holdings</Label>
          <Input type="number" name="quantity" id="holdings" placeholder="e.g. 5" />
          <Label for="price-bought">Price Bought</Label>
          <Input type="number" name="priceBought" id="price-bought" placeholder="e.g. 100$" />
           
            <Button type="submit" color="primary">Submit!</Button>{' '}
            <Button color="secondary" onClick={this.props.toggleFn}>Cancel</Button>
            <Button color="primary" onClick={this.closeModalRefresh}>DONE!</Button>{' '}
            </FormGroup>
            </Form>
          
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