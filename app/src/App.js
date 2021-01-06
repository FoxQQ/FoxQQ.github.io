import { Fragment } from 'react';
import './App.css';
import LineSeriesComponent from './components/LineSeriesComponent';
import HorizontalBarSeriesComponent from './components/HorizontalBarSeriesComponent';
import VerticalBarSeriesComponent from './components/VerticalBarSeriesComponent';
import RadialChartComponent from './components/RadialChartComponent';
import { Sankey } from 'react-vis';

const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 4},
  {x: 3, y: 9},
  {x: 4, y: 1},
  {x: 5, y: 7},
  {x: 6, y: 6},
  {x: 7, y: 3},
  {x: 8, y: 2},
  {x: 9, y: 0}
];

const links = [
  {source: 0, target: 1, value: 10},
  {source: 0, target: 2, value: 20},
  {source: 1, target: 2, value: 20}
  ];

const nodes = [{name: 'a'}, {name: 'b'}, {name: 'c'}];
const data2 = [{y: 'winter', x: Math.log(10)}, {y: 'spring', x: Math.log(100)}, {y: 'summer', x: Math.log(10000)}, {y: 'fall', x: Math.log(10)}];
function App() {
  return (
    <Fragment>
      {/* <link rel="stylesheet" href="https://unpkg.com/react-vis/dist/style.css"></link> */}
      <div className="App">
        <LineSeriesComponent data={data} />
        <HorizontalBarSeriesComponent data={data2} />
        <VerticalBarSeriesComponent data={data} />
        <RadialChartComponent data={data} />
        <Sankey
        nodes={nodes}
        links={links}
        width={200}
        height={200}
        />
      </div>
    </Fragment>
  );
}

export default App;
