import React from 'react';

const CarbonopsLogo = ({ darkMode }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 947.44 587.89">
            <path
                fill={`${darkMode ? "#959695" : "#00446a"}`}
                d="M653.51,0c-126.48,0-234.26,79.87-275.74,191.94h107.67l44.13,181.54h.86l44.15-181.54h135.44v306.53h-89.28v-196.42h-.86l-53.2,196.42h-70.41l-53.22-196.42h-.87v196.15c61.13,63.2,150.29,99.14,247.52,87.52,134.34-16.05,240.89-123.53,255.85-258C965.31,150.27,826.98,0,653.51,0Z"
            />
            <path
                fill={`${darkMode ? "#959695" : "#00446a"}`}
                d="M302.42,498.47h-83.2l-30.06-187.49h-.79l-29.29,187.49h-83.6L0,191.94h83.89l34.03,190.46h.79l33.66-190.46h75.05l32.93,193.44h.8l34.9-193.44h84.19l-77.83,306.53Z"
            />
        </svg>
    )
};

export default CarbonopsLogo;
