import React, {HTMLAttributes, useCallback} from "react";
import RequestAccessForm from "../../components/RequestAccessForm";

const RequestAccessContainer: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
    const onSubmit = useCallback((data) => {
        alert('The email has been sent successfully!');
    }, []);

    return (
        <div {...props}>
            <RequestAccessForm onSubmit={onSubmit} />
        </div>
    );
};

export default RequestAccessContainer;
