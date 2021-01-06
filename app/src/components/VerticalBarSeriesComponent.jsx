import { Component, Fragment } from 'react';
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

export default class VerticalBarSeriesComponent extends Component{
    state = {
        displayMouseOver: false
    }

    render() {

        const chartProps = {
            onNearestX: (value, { index }) => this.setState({ displayMouseOver: value })
        }

        return (
            <Fragment>
                <div className="SeriesContainer"> 
                    <XYPlot width={300} height={300} onMouseLeave={() => this.setState({ displayMouseOver: false })} >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <VerticalBarSeries data={this.props.data} {...chartProps} />
                        <XAxis />
                        <YAxis />
                    </XYPlot>
                    {this.state.displayMouseOver ? <p className="DisplayMouseOver">{JSON.stringify(this.state.displayMouseOver)}</p> : ''}
                </div>
            </Fragment>
        );
    }
} 