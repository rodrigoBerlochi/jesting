import React from 'react';
import renderer from 'react-test-renderer';

const Link = (url, text) => { 
    return <a href={url}>text</a>; 
}

describe.only('Snapshot', () => {
    test('Basic snap', () => {
        const tree = renderer.create(
            <Link url="http://google1.com.es" text="hello!" />
        ).toJSON();

        expect(tree).toMatchSnapshot();
        // recall INTERACTIVE update mode in watch
    });

    test('Basic snap 2', () => {

        const lemonTree = renderer.create(
            <p>A yellow submarine!</p>
        ).toJSON();

        expect(lemonTree).toMatchSnapshot();
    });

    test('Asymmetric matchers', () => {
        const v = {
            createdAt: new Date(),
            id: Math.floor(Math.random() * 100),
            name: 'John'
        };

        // createdAt and Id will change on each run, so
        // tell Jest how to test them

        expect(v).toMatchSnapshot({
            createdAt: expect.any(Date),
            id: expect.any(Number)
        });
    });

    /**
     * Good practices
     * - snapshots are code. Commits, review. 
     * - be deterministic, mock what isn't so
     * - names describe expected result
     */
})