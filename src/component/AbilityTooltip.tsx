import React from "react";

const AbilityTooltip: React.FC<{ name: string; url: string }> = (props) => {
    return (
        <div>
            {props.name}
        </div>
    );
};

export default AbilityTooltip;
