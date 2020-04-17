import * as React from 'react';
import { Grid, Input, Button } from 'semantic-ui-react';
import { changeCounterValue } from '../counterButtonColor/actions';
import { connect } from 'react-redux';
import { RootState } from '..';

export interface IBottomSectionProps {
    changeCounterValue: typeof changeCounterValue;
    countedNumber: number;
}

export interface IBottopmSectionState {
    inputCounterValue: any;
}

export class BottomSection extends React.Component<IBottomSectionProps, IBottopmSectionState> {
    constructor(props: IBottomSectionProps) {
        super(props);

        this.state = {
            inputCounterValue: ""
        }
    }

    private onInputFieldChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ inputCounterValue: e.currentTarget.value })
    }

    private handleSubmit = () => {
        let { inputCounterValue } = this.state;
        let { changeCounterValue } = this.props;

        changeCounterValue(inputCounterValue);
    }


    public render() {
        let { countedNumber } = this.props;

        return (
            <React.Fragment>
                <Grid>
                    <Grid.Row>
                        <h3>Count Value {countedNumber}</h3>
                    </Grid.Row>
                    <Grid.Row>

                        <Input placeholder='Enter Text Here...' onChange={this.onInputFieldChange} />
                        <Button
                            content="Submit New Username"
                            color="green"
                            onClick={() => this.handleSubmit()} />
                    </Grid.Row>
                </Grid>
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        countedNumber: state.counterButton.countedNumber
    }
}

export default connect(
    mapStateToProps,
    { changeCounterValue }
)(BottomSection);