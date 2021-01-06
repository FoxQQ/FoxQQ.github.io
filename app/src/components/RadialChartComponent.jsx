import { Component, Fragment } from 'react';
import { RadialChart } from 'react-vis';

export default class RadialChartComponent extends Component{
    state = {
        displayMouseOver: false
    }

    render() {
        const myData = [ {angle: 1, radius: 10}, {angle: 2, label: 'Super Custom label', subLabel: 'With annotation', radius: 20}, {angle: 5, radius: 5, label: 'Alt Label'}, {angle: 3, radius: 14}, {angle: 5, radius: 12, subLabel: 'Sub Label only', className: 'custom-class'} ];
        const nodes = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
        

        return (
            <Fragment>
                <div className="SeriesContainer"> 
                    <RadialChart data={myData}  
                        width={300} 
                        height={300} 
                        innerRadius={10}
                        radius={16} 
                        labelsAboveChildren={false}
                        label={(i) => i.label}
                        // subLabel={(i) => i.subLabel} 
                        showLabels={true} />
               
                    {this.state.displayMouseOver ? <p className="DisplayMouseOver">{JSON.stringify(this.state.displayMouseOver)}</p> : ''}
                </div>
            </Fragment>
        );
    }
} 