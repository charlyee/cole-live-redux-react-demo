import * as React from 'react';
import { Fragment } from 'react';
import { Grid, Button } from 'semantic-ui-react';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
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