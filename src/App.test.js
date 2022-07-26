import React from 'react'
import { mount } from "enzyme";
import { render, screen } from '@testing-library/react';

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

import App from './App'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new Adapter()})

describe("When App renders", () => {
  it("renders", () => {
    mount(<App />)
  })
})