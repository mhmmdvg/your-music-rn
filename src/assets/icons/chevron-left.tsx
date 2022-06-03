import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ChevronLeft = () => {
  return (
    <Svg width={24} height={24}>
      <Path
        d="M14.414 5.586a2 2 0 0 0-2.828 0L5.171 12l6.415 6.414c.39.391.902.586 1.414.586s1.024-.195 1.414-.586a2 2 0 0 0 0-2.828L10.829 12l3.585-3.586a2 2 0 0 0 0-2.828z"
        fill="white"
      />
    </Svg>
  );
};

export default ChevronLeft;
