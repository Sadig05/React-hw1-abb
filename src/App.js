import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends React.Component {
  state = {
    firstModalOpen: false,
    secondModalOpen: false,
  };

  handleFirstModalOpen = () => {
    this.setState({ firstModalOpen: true });
  };

  handleFirstModalClose = () => {
    this.setState({ firstModalOpen: false });
  };

  handleSecondModalOpen = () => {
    this.setState({ secondModalOpen: true });
  };

  handleSecondModalClose = () => {
    this.setState({ secondModalOpen: false });
  };

  render() {
    return (
      <div className="App">
        <Button
          backgroundColor="blue"
          text="Open first modal"
          onClick={this.handleFirstModalOpen}
        />
        <Button
          backgroundColor="green"
          text="Open second modal"
          onClick={this.handleSecondModalOpen}
        />

        {this.state.firstModalOpen && (
          <Modal
            header="Delete File"
            closeButton={true}
            text="Do you want to delete this file? Once you have deleted it, it will not be possible to recover."
            actions={
              <>
                <Button backgroundColor="red" text="OK" onClick={this.handleFirstModalClose} />
                <Button backgroundColor="gray" text="Cancel" onClick={this.handleFirstModalClose} />
              </>
            }
            showBackground={true}
            onClose={this.handleFirstModalClose}
          />
        )}

        {this.state.secondModalOpen && (
          <Modal
            header="Custom Modal"
            closeButton={true}
            text="This is a custom modal window with different text and buttons."
            actions={
              <>
                <Button backgroundColor="green" text="Confirm" onClick={this.handleSecondModalClose} />
                <Button backgroundColor="blue" text="Close" onClick={this.handleSecondModalClose} />
              </>
            }
            showBackground={true}
            onClose={this.handleSecondModalClose}
          />
        )}
      </div>
    );
  }
}

export default App;
