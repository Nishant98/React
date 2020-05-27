import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12">
            {/* fa-pulse to rotate the spinner, fa-3x is 3 times the speed, fa-fw for forward spinning */}
            <span className="fa fa-spinner fa-pulse fa-3x text-primary"></span>
            <p>Loading . . .</p>
        </div>
    );
};