import React from 'react';
import { Loader } from "rsuite";
import PropTypes from 'prop-types';

const Apploader = ({ className }) => {
    return (
        <>
            <div className={className}>
                <Loader size="md" content="Loading..." />
            </div>
        </>
    )
}

Apploader.propTypes = {
    className: PropTypes.string
}
export default Apploader;