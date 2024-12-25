import React from 'react';
import { forwardRef } from 'react';
import { Whisper, Popover } from 'rsuite';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const DefaultPopover = forwardRef(({ content, className, ...props }, ref) => {
  return (
    <Popover ref={ref} {...props} className={className} arrow={false}>
      <p>{content}</p>
    </Popover>
  );
});
const AppTooltip = ({ placement, data, className, name, tooltipClass }) => (
  <Whisper trigger="click" placement={placement} controlId={`control-id-${placement}`} speaker={<DefaultPopover content={data} className={tooltipClass} />}>
    <div className={className}>{name}</div>
  </Whisper>
);
AppTooltip.propTypes = {
  placement: PropTypes.string,
  data: PropTypes.any,
  className: PropTypes.string,
  name: PropTypes.string,
  tooltipClass: PropTypes.string,
};

DefaultPopover.propTypes = {
  content: PropTypes.any,
  className: PropTypes.string,
};

export default AppTooltip;
