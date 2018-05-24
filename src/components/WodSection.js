import React from 'react';
import { Card } from 'semantic-ui-react';

const WodSection = ({steps}) => {

    const wodSteps = steps.map((step, index) => {

        return (
            <Card.Content key={index}>
                <Card.Description>
                    {step}
                </Card.Description>
            </Card.Content>
        )
    });

    return (
        <Card centered>
            {wodSteps}
        </Card>
    );
}

export default WodSection;