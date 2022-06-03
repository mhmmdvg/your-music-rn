import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SearchIcon = () => {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="m24.975 23.045-5.145-5.146a9.505 9.505 0 0 0 1.905-5.719c0-5.269-4.286-9.555-9.555-9.555S2.625 6.911 2.625 12.18s4.286 9.555 9.555 9.555a9.505 9.505 0 0 0 5.72-1.905l5.145 5.145a1.367 1.367 0 0 0 1.93-1.93ZM5.355 12.18a6.825 6.825 0 1 1 6.825 6.825 6.833 6.833 0 0 1-6.825-6.825Z"
        fill="#fdfdfd"
      />
    </Svg>
  );
};

export default SearchIcon;
