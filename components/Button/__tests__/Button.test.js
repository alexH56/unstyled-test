import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button.js';

  test('Primary Button Snapshot', () => {
    const tree = renderer
      .create(<Button primary>Primary Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Primary Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="primary" ghost>Primary Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Secondary Button Snapshot', () => {
    const tree = renderer
      .create(<Button secondary>Secondary Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Secondary Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="secondary" ghost>Secondary Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Tertiary Button Snapshot', () => {
    const tree = renderer
      .create(<Button tertiary>Tertiary Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Tertiary Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="tertiary" ghost>Tertiary Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Dark Button Snapshot', () => {
    const tree = renderer
      .create(<Button dark>Dark Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Dark Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="dark" ghost>Dark Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Light Button Snapshot', () => {
    const tree = renderer
      .create(<Button light>Light Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Light Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="light" ghost>Light Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Success Button Snapshot', () => {
    const tree = renderer
      .create(<Button success>Success Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Success Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="success" ghost>Success Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Warning Button Snapshot', () => {
    const tree = renderer
      .create(<Button warning>Warning Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Warning Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="warning" ghost>Warning Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Danger Button Snapshot', () => {
    const tree = renderer
      .create(<Button danger>Danger Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Danger Ghost Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="danger" ghost>Danger Ghost Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Text Button Snapshot', () => {
    const tree = renderer
      .create(<Button text>Text Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Small Button Snapshot', () => {
    const tree = renderer
      .create(<Button size="sm">Small Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Large Button Snapshot', () => {
    const tree = renderer
      .create(<Button lg>Large Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Xtra Large Button Snapshot', () => {
    const tree = renderer
      .create(<Button size="xl">Xtra Large Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Disabled Button Snapshot', () => {
    const tree = renderer
      .create(<Button disabled>Disabled Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Icon Left Button Snapshot', () => {
    const tree = renderer
      .create(<Button iconLeft="ICON">Left Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Icon Right Button Snapshot', () => {
    const tree = renderer
      .create(<Button iconRight="ICON">Right Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Processing Button Snapshot', () => {
    const tree = renderer
      .create(<Button type="primary" processing>Processing Button</Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Default Props Button Snapshot', () => {
    const tree = renderer
      .create(<Button></Button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
