import React from 'react'
import { render, getByTestId } from '@testing-library/react';
// import { render, fireEvent, getByTestId} from "react-testing-library"
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

import CluckIndex from "./CluckIndex";

Enzyme.configure({adapter: new Adapter()})
let wrapper
// const setState = jest.fn()
// const useStateSpy = jest.spyOn(React, "useState")
// useStateSpy.mockImplementation((initialState) => [initialState, setState])

beforeEach(() => {
  wrapper = Enzyme.shallow(<CluckIndex />);
})

describe("CluckIndex", () => {
  it("has a heading", () => {
    expect(wrapper.find("h1")).toHaveLength(1);
  })
})