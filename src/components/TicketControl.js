import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [],
      selectedTicket: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    this.setState({
      mainTicketList: editedMainTicketList,
      editing: false,
      selectedTicket: null
    });
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  render(){
    let theme = this.props.theme;

    const buttonStyles = { 
      backgroundColor: theme.buttonBackground, 
      color: theme.textColor, 
    }

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = (
        <EditTicketForm>
          <ReusableForm 
            handleFormSubmission={this.handleEditingTicketInList}
            buttonText="Update Ticket" 
            theme={theme}/>
        </EditTicketForm>
      );
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail 
      ticket={this.state.selectedTicket} 
      onClickingDelete={this.handleDeletingTicket}
      onClickingEdit = {this.handleEditClick} 
      theme={theme} />
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewTicketForm>
          <ReusableForm 
            handleFormSubmission={this.handleAddingNewTicketToList}
            buttonText="Help!" 
            theme={theme}/>
        </NewTicketForm>
      );
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState = <TicketList 
      onTicketSelection={this.handleChangingSelectedTicket} 
      ticketList={this.state.mainTicketList} />;
      buttonText = "Add Ticket"; 
    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button style={buttonStyles}  onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  theme: PropTypes.object
};

export default TicketControl;