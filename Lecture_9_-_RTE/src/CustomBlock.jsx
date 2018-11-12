import React from 'react';

export const entityTypes = {
  image: 'image'
};

export const CustomBlock = props => {
  const {contentState, block} = props;
  const entity = contentState.getEntity(block.getEntityAt(0));
  const entityType = entity.getType();
  if (entityType === entityTypes.image) {
    return (<img src={entity.getData().src} alt="An"/>);
  }

  return null;
};

