import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';

import Button from './button';

describe('Button', () => {
    it('should change color on click', () => {
        const component = renderer.create(
            <Button show={()=>{}}>Test</Button>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        tree.props.onClick();
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});