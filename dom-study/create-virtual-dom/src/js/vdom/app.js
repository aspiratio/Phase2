import { patch } from "./patch";

export const app = ({ root, initialState, view, actions }) => {
  const $el = document.querySelector(root);
  let newNode;

  let oldNode;

  let state = initialState;

  const dispatcher = function (actions) {
    const dispatchedActions = {};

    for (const key in actions) {
      const action = actions[key];

      dispatchedActions[key] = (option) => {
        setState(action(state, option));
        renderDOM();
      };
    }
    return dispatchedActions;
  };

  const setState = function (newState) {
    if (state !== newState) {
      state = newState;
    }
  };

  const updateNode = function () {
    newNode = view(state, dispatcher(actions));
  };

  const renderDOM = function () {
    updateNode();
    patch($el, newNode, oldNode);
    oldNode = newNode;
  };
};
