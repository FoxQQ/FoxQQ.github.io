import { Component, Fragment } from 'react';
import { XYPlot, HorizontalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

export default class HorizontalBarSeriesComponent extends Component{
    state = {
        displayMouseOver: false
    }

    render() {

        const chartProps = {
            onNearestXY: (value, { index }) => this.setState({ displayMouseOver: value })
        }

        return (
            <Fragment>
                <div className="SeriesContainer"> 
                    <XYPlot width={300} height={300}  yType="ordinal" onMouseLeave={() => this.setState({ displayMouseOver: false })} >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <HorizontalBarSeries data={this.props.data} {...chartProps} />
                        <XAxis />
                        <YAxis />
                    </XYPlot>
                    {this.state.displayMouseOver ? <p className="DisplayMouseOver">{JSON.stringify(this.state.displayMouseOver)}</p> : ''}
                </div>
            </Fragment>
        );
    }
} 