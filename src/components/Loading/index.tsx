import React from 'react';
import './style/index.scss';

export const LoadingSpinner = () => {
  return (
    <div className='loading loading-spinner-wrapper'>
      <div className='loading-content'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const LoadingRoundSpinner = () => {
  return (
    <div className='loading loading-round-spinner-wrapper'>
      <div className='loading-content'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const LoadingZoomSpinner = () => {
  return (
    <div className='loading loading-zoom-spinner-wrapper'>
      <div className='loading-content'>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export const LoadingEllipsis = () => {
  return (
    <div className='loading loading-ellipsis'>
      <div className='loading-content'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export const LoadingEllipsisActive = () => {
  return (
    <div className='loading loading-ellipsis-active'>
      <div className='loading-content'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
