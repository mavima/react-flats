import React from 'react';
import Flat from './flat';


const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={index}
          index={index}
          selected={flat.name === props.selectedFlat.name}
          selectFlat={props.selectFlat}
          updateMarker={props.updateMarker}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {renderList()}
    </div>
  );
};


export default FlatList;
