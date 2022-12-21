import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/luna-amber/theme.css'

interface Props {
    submit: boolean;
}

interface State {
    hasError: boolean;
}

class SubmitButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    render() {
        if (this.state.hasError) {
            return <Button disabled
                            label="Submit"
                            aria-label="Submit" />
        } else {
            return <Button label="Submit" />
        }
    }
}

export default SubmitButton;
