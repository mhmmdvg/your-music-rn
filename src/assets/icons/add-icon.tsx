import React from 'react';
import Svg, {Path} from 'react-native-svg';

const AddIcon = () => {
  return (
    <Svg width={28} height={28} fill="none">
      <Path
        d="M24 13h-9V4a1 1 0 1 0-2 0v9H4a1 1 0 1 0 0 2h9v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2Z"
        fill="#fefefe"
      />
    </Svg>
  );
};

export default AddIcon;
