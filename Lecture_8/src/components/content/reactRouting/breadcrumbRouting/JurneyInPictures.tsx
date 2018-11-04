import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Chart} from 'react-google-charts';

interface JurneyInPicturesProps {
  readonly pageNumbers: number[];
}

const createGraphData = (pageNumbers: number[]) => [
  ['Page turn', 'Page'],
  ...pageNumbers.map((pageNumber, index) => [index + 1, pageNumber])
];

export const JurneyInPictures: React.StatelessComponent<JurneyInPicturesProps> = ({pageNumbers}) => {
  const journeyGraphData = createGraphData(pageNumbers);

  return (
    <>
      <p>
        Your journey in pictures:
      </p>
      <Chart
        chartType="LineChart"
        data={journeyGraphData}
        width="100%"
        height="150px"
        options={{
          legend: 'none',
          curveType: 'function',
          vAxis: {viewWindow: {min: 0, max: 20}},
          hAxis: {viewWindow: {min: 1, max: journeyGraphData.length - 1}},
        }}
      />
    </>
  );
};

JurneyInPictures.displayName = 'JurneyInPictures';

JurneyInPictures.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
};
