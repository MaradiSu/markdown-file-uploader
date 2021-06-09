"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title1 = void 0;

var _react = _interopRequireDefault(require("react"));

var title1 = {
  name: 'title1',
  keyCommand: 'title1',
  shortcuts: 'ctrlcmd+1',
  buttonProps: {
    'aria-label': 'Insert title 1',
    title: 'Insert title 1'
  },
  icon: /*#__PURE__*/_react.default.createElement("div", {
    style: {
      fontSize: 18,
      textAlign: 'left'
    }
  }, "Title 1"),
  execute: function execute(state, api) {
    var modifyText = "# ".concat(state.selectedText, "\n");

    if (!state.selectedText) {
      modifyText = "# ";
    }

    api.replaceSelection(modifyText);
  }
};
exports.title1 = title1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90aXRsZTEudHN4Il0sIm5hbWVzIjpbInRpdGxlMSIsIm5hbWUiLCJrZXlDb21tYW5kIiwic2hvcnRjdXRzIiwiYnV0dG9uUHJvcHMiLCJ0aXRsZSIsImljb24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImV4ZWN1dGUiLCJzdGF0ZSIsImFwaSIsIm1vZGlmeVRleHQiLCJzZWxlY3RlZFRleHQiLCJyZXBsYWNlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHTyxJQUFNQSxNQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxJQUFJLEVBQUUsUUFEd0I7QUFFOUJDLEVBQUFBLFVBQVUsRUFBRSxRQUZrQjtBQUc5QkMsRUFBQUEsU0FBUyxFQUFFLFdBSG1CO0FBSTlCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRSxrQkFBYyxnQkFBaEI7QUFBa0NDLElBQUFBLEtBQUssRUFBRTtBQUF6QyxHQUppQjtBQUs5QkMsRUFBQUEsSUFBSSxlQUFFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFLEVBQVo7QUFBZ0JDLE1BQUFBLFNBQVMsRUFBRTtBQUEzQjtBQUFaLGVBTHdCO0FBTTlCQyxFQUFBQSxPQUFPLEVBQUUsaUJBQUNDLEtBQUQsRUFBbUJDLEdBQW5CLEVBQW9DO0FBQzNDLFFBQUlDLFVBQVUsZUFBUUYsS0FBSyxDQUFDRyxZQUFkLE9BQWQ7O0FBQ0EsUUFBSSxDQUFDSCxLQUFLLENBQUNHLFlBQVgsRUFBeUI7QUFDdkJELE1BQUFBLFVBQVUsT0FBVjtBQUNEOztBQUNERCxJQUFBQSxHQUFHLENBQUNHLGdCQUFKLENBQXFCRixVQUFyQjtBQUNEO0FBWjZCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSUNvbW1hbmQsIFRleHRTdGF0ZSwgVGV4dEFwaSB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aXRsZTE6IElDb21tYW5kID0ge1xyXG4gIG5hbWU6ICd0aXRsZTEnLFxyXG4gIGtleUNvbW1hbmQ6ICd0aXRsZTEnLFxyXG4gIHNob3J0Y3V0czogJ2N0cmxjbWQrMScsXHJcbiAgYnV0dG9uUHJvcHM6IHsgJ2FyaWEtbGFiZWwnOiAnSW5zZXJ0IHRpdGxlIDEnLCB0aXRsZTogJ0luc2VydCB0aXRsZSAxJyB9LFxyXG4gIGljb246IDxkaXYgc3R5bGU9e3sgZm9udFNpemU6IDE4LCB0ZXh0QWxpZ246ICdsZWZ0JyB9fT5UaXRsZSAxPC9kaXY+LFxyXG4gIGV4ZWN1dGU6IChzdGF0ZTogVGV4dFN0YXRlLCBhcGk6IFRleHRBcGkpID0+IHtcclxuICAgIGxldCBtb2RpZnlUZXh0ID0gYCMgJHtzdGF0ZS5zZWxlY3RlZFRleHR9XFxuYDtcclxuICAgIGlmICghc3RhdGUuc2VsZWN0ZWRUZXh0KSB7XHJcbiAgICAgIG1vZGlmeVRleHQgPSBgIyBgO1xyXG4gICAgfVxyXG4gICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24obW9kaWZ5VGV4dCk7XHJcbiAgfSxcclxufTtcclxuIl19