import React, { Component } from 'react'
import HeaderText from '../../components/HeaderText';
import { H2, Text, Content, Button, Label, Form, Item, Input } from 'native-base'


export default class NewDeck extends Component {
  state = {
    name: '',
  }
  // !WARNING this is breaking the app
  // componentDidMount() {
  //   console.log(this.nameInput)
  //   this.nameInput.focus()
  // }
  onNameChange = function (e, r) {
    const { name, value } = r;
    this.setState({ name: value });
  }
  onSubmit = () => {
    if (this.state === '') {
      this.nameInput.shake()
    }
  }
  render() {
    return (
      <Content padder style={{paddingTop: 40}}>  
        {/* <H2 style={{textAlign: 'center'}}>Create Deck</H2>       */}
        <Form>                    
          <Item stackedLabel last>
            <Label>Deck Name</Label>
            <Input style={{textAlign: 'center'}} ref={c => this.nameInput = c} />
          </Item>          
        </Form>
        <Button block bordered style={{marginTop: 20}}>
          <Text>Create New Deck </Text>
        </Button>        
      </Content>
    )
  }
}