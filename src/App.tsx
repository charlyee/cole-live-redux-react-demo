import * as React from 'react';
import { Fragment } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { RootState } from './store';

import { incrementCounterValue, decrementCounterValue, changeButtonColor } from './store/counterButtonColor/actions';
import { connect } from 'react-redux';

export interface IAppProps {
  changeButtonColor: typeof changeButtonColor;
  decrementCounterValue: typeof decrementCounterValue;
  incrementCounterValue: typeof incrementCounterValue;
  countedNumber: number;
  buttonColor: string;
}

export class App extends React.Component<IAppProps> {
  private incrementValueButtonClicked(): void {
    console.log("increment called");
    //this.props.actionCreatorForButtonIncrementValue
  }

  private decrementValueButtonClicked(): void {
    console.log("decrement called");
  }

  private buttonTextColorChange(): void {
    console.log("button text color change called");
  }

  public render() {
    let { countedNumber, buttonColor } = this.props;

    //Change color of a button using redux.
    return (
      <Fragment>
        <Grid>
          <Grid.Row centered>
            <h1>Live Redux Counting App! (With Button Color Change)</h1>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Row centered>
              <Button
                content="This Buttons Text Color Will Change!"
                onClick={() => this.buttonTextColorChange()}
              />
            </Grid.Row>
            <Grid.Row centered>
              <h3>Current Count Value: 0</h3>
            </Grid.Row>
          </Grid.Row>
          <Grid.Row centered>
            <Button
              content="Increment Value"
              onClick={() => this.incrementValueButtonClicked()}
              color="facebook"
            />
            <Button
              content="Decrement Value"
              onClick={() => this.decrementValueButtonClicked()}
              color="linkedin"
            />
          </Grid.Row>
        </Grid>

      </Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    countedNumber: state.counterButton.countedNumber,
    buttonColor: state.counterButton.buttonColor
  }
}

export default connect(
  mapStateToProps,
  { changeButtonColor, decrementCounterValue, incrementCounterValue }
)(App);