"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title4 = void 0;

var React = _interopRequireWildcard(require("react"));

var title4 = {
  name: 'title4',
  keyCommand: 'title4',
  shortcuts: 'ctrlcmd+4',
  buttonProps: {
    'aria-label': 'Insert title4',
    title: 'Insert title 4'
  },
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      textAlign: 'left'
    }
  }, "Title 4"),
  execute: function execute(state, api) {
    var modifyText = "#### ".concat(state.selectedText, "\n");

    if (!state.selectedText) {
      modifyText = "#### ";
    }

    api.replaceSelection(modifyText);
  }
};
exports.title4 = title4;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90aXRsZTQudHN4Il0sIm5hbWVzIjpbInRpdGxlNCIsIm5hbWUiLCJrZXlDb21tYW5kIiwic2hvcnRjdXRzIiwiYnV0dG9uUHJvcHMiLCJ0aXRsZSIsImljb24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImV4ZWN1dGUiLCJzdGF0ZSIsImFwaSIsIm1vZGlmeVRleHQiLCJzZWxlY3RlZFRleHQiLCJyZXBsYWNlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHTyxJQUFNQSxNQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxJQUFJLEVBQUUsUUFEd0I7QUFFOUJDLEVBQUFBLFVBQVUsRUFBRSxRQUZrQjtBQUc5QkMsRUFBQUEsU0FBUyxFQUFFLFdBSG1CO0FBSTlCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRSxrQkFBYyxlQUFoQjtBQUFpQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQXhDLEdBSmlCO0FBSzlCQyxFQUFBQSxJQUFJLGVBQUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkMsTUFBQUEsU0FBUyxFQUFFO0FBQTNCO0FBQVosZUFMd0I7QUFNOUJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFtQkMsR0FBbkIsRUFBb0M7QUFDM0MsUUFBSUMsVUFBVSxrQkFBV0YsS0FBSyxDQUFDRyxZQUFqQixPQUFkOztBQUNBLFFBQUksQ0FBQ0gsS0FBSyxDQUFDRyxZQUFYLEVBQXlCO0FBQ3ZCRCxNQUFBQSxVQUFVLFVBQVY7QUFDRDs7QUFDREQsSUFBQUEsR0FBRyxDQUFDRyxnQkFBSixDQUFxQkYsVUFBckI7QUFDRDtBQVo2QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSUNvbW1hbmQsIFRleHRTdGF0ZSwgVGV4dEFwaSB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aXRsZTQ6IElDb21tYW5kID0ge1xyXG4gIG5hbWU6ICd0aXRsZTQnLFxyXG4gIGtleUNvbW1hbmQ6ICd0aXRsZTQnLFxyXG4gIHNob3J0Y3V0czogJ2N0cmxjbWQrNCcsXHJcbiAgYnV0dG9uUHJvcHM6IHsgJ2FyaWEtbGFiZWwnOiAnSW5zZXJ0IHRpdGxlNCcsIHRpdGxlOiAnSW5zZXJ0IHRpdGxlIDQnIH0sXHJcbiAgaWNvbjogPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTQsIHRleHRBbGlnbjogJ2xlZnQnIH19PlRpdGxlIDQ8L2Rpdj4sXHJcbiAgZXhlY3V0ZTogKHN0YXRlOiBUZXh0U3RhdGUsIGFwaTogVGV4dEFwaSkgPT4ge1xyXG4gICAgbGV0IG1vZGlmeVRleHQgPSBgIyMjIyAke3N0YXRlLnNlbGVjdGVkVGV4dH1cXG5gO1xyXG4gICAgaWYgKCFzdGF0ZS5zZWxlY3RlZFRleHQpIHtcclxuICAgICAgbW9kaWZ5VGV4dCA9IGAjIyMjIGA7XHJcbiAgICB9XHJcbiAgICBhcGkucmVwbGFjZVNlbGVjdGlvbihtb2RpZnlUZXh0KTtcclxuICB9LFxyXG59O1xyXG4iXX0=