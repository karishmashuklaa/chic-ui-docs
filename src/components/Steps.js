import React from 'react'
import { Steps } from 'chic-ui'

export function Example() {
    return (
        <Steps active={1} type="primary" direction="horizontal">
            <Steps.Step title="Step One" subTitle="Step one details" />
            <Steps.Step title="Step Two" subTitle="Step two details" />
            <Steps.Step title="Step Three" subTitle="Step three details" />
            <Steps.Step title="Step Four" subTitle="Step four details" />
        </Steps>
    );
}