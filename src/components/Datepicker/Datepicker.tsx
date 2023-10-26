import React from "react";

interface DatepickerProps {
    name: string;
}

const Datepicker = (props: DatepickerProps) => {
    return (
        <div>Hello {props.name}</div>
    )
};

export default Datepicker;