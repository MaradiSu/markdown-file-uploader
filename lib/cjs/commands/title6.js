"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title6 = void 0;

var React = _interopRequireWildcard(require("react"));

var title6 = {
  name: 'title6',
  keyCommand: 'title6',
  shortcuts: 'ctrlcmd+6',
  buttonProps: {
    'aria-label': 'Insert title6',
    title: 'Insert title 6'
  },
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textAlign: 'left'
    }
  }, "Title 6"),
  execute: function execute(state, api) {
    var modifyText = "###### ".concat(state.selectedText, "\n");

    if (!state.selectedText) {
      modifyText = "###### ";
    }

    api.replaceSelection(modifyText);
  }
};
exports.title6 = title6;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90aXRsZTYudHN4Il0sIm5hbWVzIjpbInRpdGxlNiIsIm5hbWUiLCJrZXlDb21tYW5kIiwic2hvcnRjdXRzIiwiYnV0dG9uUHJvcHMiLCJ0aXRsZSIsImljb24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImV4ZWN1dGUiLCJzdGF0ZSIsImFwaSIsIm1vZGlmeVRleHQiLCJzZWxlY3RlZFRleHQiLCJyZXBsYWNlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHTyxJQUFNQSxNQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxJQUFJLEVBQUUsUUFEd0I7QUFFOUJDLEVBQUFBLFVBQVUsRUFBRSxRQUZrQjtBQUc5QkMsRUFBQUEsU0FBUyxFQUFFLFdBSG1CO0FBSTlCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRSxrQkFBYyxlQUFoQjtBQUFpQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQXhDLEdBSmlCO0FBSzlCQyxFQUFBQSxJQUFJLGVBQUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkMsTUFBQUEsU0FBUyxFQUFFO0FBQTNCO0FBQVosZUFMd0I7QUFNOUJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFtQkMsR0FBbkIsRUFBb0M7QUFDM0MsUUFBSUMsVUFBVSxvQkFBYUYsS0FBSyxDQUFDRyxZQUFuQixPQUFkOztBQUNBLFFBQUksQ0FBQ0gsS0FBSyxDQUFDRyxZQUFYLEVBQXlCO0FBQ3ZCRCxNQUFBQSxVQUFVLFlBQVY7QUFDRDs7QUFDREQsSUFBQUEsR0FBRyxDQUFDRyxnQkFBSixDQUFxQkYsVUFBckI7QUFDRDtBQVo2QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSUNvbW1hbmQsIFRleHRTdGF0ZSwgVGV4dEFwaSB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aXRsZTY6IElDb21tYW5kID0ge1xyXG4gIG5hbWU6ICd0aXRsZTYnLFxyXG4gIGtleUNvbW1hbmQ6ICd0aXRsZTYnLFxyXG4gIHNob3J0Y3V0czogJ2N0cmxjbWQrNicsXHJcbiAgYnV0dG9uUHJvcHM6IHsgJ2FyaWEtbGFiZWwnOiAnSW5zZXJ0IHRpdGxlNicsIHRpdGxlOiAnSW5zZXJ0IHRpdGxlIDYnIH0sXHJcbiAgaWNvbjogPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHRBbGlnbjogJ2xlZnQnIH19PlRpdGxlIDY8L2Rpdj4sXHJcbiAgZXhlY3V0ZTogKHN0YXRlOiBUZXh0U3RhdGUsIGFwaTogVGV4dEFwaSkgPT4ge1xyXG4gICAgbGV0IG1vZGlmeVRleHQgPSBgIyMjIyMjICR7c3RhdGUuc2VsZWN0ZWRUZXh0fVxcbmA7XHJcbiAgICBpZiAoIXN0YXRlLnNlbGVjdGVkVGV4dCkge1xyXG4gICAgICBtb2RpZnlUZXh0ID0gYCMjIyMjIyBgO1xyXG4gICAgfVxyXG4gICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24obW9kaWZ5VGV4dCk7XHJcbiAgfSxcclxufTtcclxuIl19