"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title5 = void 0;

var React = _interopRequireWildcard(require("react"));

var title5 = {
  name: 'title5',
  keyCommand: 'title5',
  shortcuts: 'ctrlcmd+5',
  buttonProps: {
    'aria-label': 'Insert title5',
    title: 'Insert title 5'
  },
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textAlign: 'left'
    }
  }, "Title 5"),
  execute: function execute(state, api) {
    var modifyText = "##### ".concat(state.selectedText, "\n");

    if (!state.selectedText) {
      modifyText = "##### ";
    }

    api.replaceSelection(modifyText);
  }
};
exports.title5 = title5;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90aXRsZTUudHN4Il0sIm5hbWVzIjpbInRpdGxlNSIsIm5hbWUiLCJrZXlDb21tYW5kIiwic2hvcnRjdXRzIiwiYnV0dG9uUHJvcHMiLCJ0aXRsZSIsImljb24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImV4ZWN1dGUiLCJzdGF0ZSIsImFwaSIsIm1vZGlmeVRleHQiLCJzZWxlY3RlZFRleHQiLCJyZXBsYWNlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHTyxJQUFNQSxNQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxJQUFJLEVBQUUsUUFEd0I7QUFFOUJDLEVBQUFBLFVBQVUsRUFBRSxRQUZrQjtBQUc5QkMsRUFBQUEsU0FBUyxFQUFFLFdBSG1CO0FBSTlCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRSxrQkFBYyxlQUFoQjtBQUFpQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQXhDLEdBSmlCO0FBSzlCQyxFQUFBQSxJQUFJLGVBQUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkMsTUFBQUEsU0FBUyxFQUFFO0FBQTNCO0FBQVosZUFMd0I7QUFNOUJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFtQkMsR0FBbkIsRUFBb0M7QUFDM0MsUUFBSUMsVUFBVSxtQkFBWUYsS0FBSyxDQUFDRyxZQUFsQixPQUFkOztBQUNBLFFBQUksQ0FBQ0gsS0FBSyxDQUFDRyxZQUFYLEVBQXlCO0FBQ3ZCRCxNQUFBQSxVQUFVLFdBQVY7QUFDRDs7QUFDREQsSUFBQUEsR0FBRyxDQUFDRyxnQkFBSixDQUFxQkYsVUFBckI7QUFDRDtBQVo2QixDQUF6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSUNvbW1hbmQsIFRleHRTdGF0ZSwgVGV4dEFwaSB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aXRsZTU6IElDb21tYW5kID0ge1xyXG4gIG5hbWU6ICd0aXRsZTUnLFxyXG4gIGtleUNvbW1hbmQ6ICd0aXRsZTUnLFxyXG4gIHNob3J0Y3V0czogJ2N0cmxjbWQrNScsXHJcbiAgYnV0dG9uUHJvcHM6IHsgJ2FyaWEtbGFiZWwnOiAnSW5zZXJ0IHRpdGxlNScsIHRpdGxlOiAnSW5zZXJ0IHRpdGxlIDUnIH0sXHJcbiAgaWNvbjogPGRpdiBzdHlsZT17eyBmb250U2l6ZTogMTIsIHRleHRBbGlnbjogJ2xlZnQnIH19PlRpdGxlIDU8L2Rpdj4sXHJcbiAgZXhlY3V0ZTogKHN0YXRlOiBUZXh0U3RhdGUsIGFwaTogVGV4dEFwaSkgPT4ge1xyXG4gICAgbGV0IG1vZGlmeVRleHQgPSBgIyMjIyMgJHtzdGF0ZS5zZWxlY3RlZFRleHR9XFxuYDtcclxuICAgIGlmICghc3RhdGUuc2VsZWN0ZWRUZXh0KSB7XHJcbiAgICAgIG1vZGlmeVRleHQgPSBgIyMjIyMgYDtcclxuICAgIH1cclxuICAgIGFwaS5yZXBsYWNlU2VsZWN0aW9uKG1vZGlmeVRleHQpO1xyXG4gIH0sXHJcbn07XHJcbiJdfQ==