import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Sidebar from "../Sidebar";
import Home from "../Home";
import AlbumsList from "../AlbumsList";
import PostsList from "../PostsList";
import Gallery from "../Gallery";
import Root from "../../Root";
let wrapped;

describe("App component shows", () => {
  beforeEach(() => {
    wrapped = mount(
      <Root>
        <App />
      </Root>
    );
  });
  afterEach(() => {
    wrapped.unmount();
  });

  it("shows a sidebar", () => {
    expect(wrapped.find(Sidebar).length).toEqual(1);
  });
  it("shows a Home component", () => {
    expect(wrapped.find(Home).length).toEqual(1);
  });
});
