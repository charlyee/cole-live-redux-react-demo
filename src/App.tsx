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

    let { incrementCounterValue } = this.props;
    incrementCounterValue();
  }

  private decrementValueButtonClicked(): void {
    console.log("decrement called");
    let { decrementCounterValue } = this.props;
    decrementCounterValue();
  }

  private buttonTextColorChange(): void {
    console.log("button text color change called");

    let { changeButtonColor, buttonColor } = this.props;
    changeButtonColor("blue");

    if (buttonColor == "orange") {
      changeButtonColor("blue");
    } else if (buttonColor == "blue") {
      changeButtonColor("red");
    } else if (buttonColor == "red") {
      changeButtonColor("green");
    } else {
      changeButtonColor("orange");
    }
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
              {/*
              * Please do not use in-line styles :)
              */}
              <button onClick={() => this.buttonTextColorChange()} style={{ color: buttonColor }}>This Buttons Text Color Will Change!</button>
            </Grid.Row>
            <Grid.Row centered>
              <h3>{`Current Count Value: ${countedNumber}`}</h3>
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