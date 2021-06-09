"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.title2 = void 0;

var React = _interopRequireWildcard(require("react"));

var title2 = {
  name: 'title2',
  keyCommand: 'title2',
  shortcuts: 'ctrlcmd+2',
  buttonProps: {
    'aria-label': 'Insert title2',
    title: 'Insert title 2'
  },
  icon: /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      textAlign: 'left'
    }
  }, "Title 2"),
  execute: function execute(state, api) {
    var modifyText = "## ".concat(state.selectedText, "\n");

    if (!state.selectedText) {
      modifyText = "## ";
    }

    api.replaceSelection(modifyText);
  }
};
exports.title2 = title2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy90aXRsZTIudHN4Il0sIm5hbWVzIjpbInRpdGxlMiIsIm5hbWUiLCJrZXlDb21tYW5kIiwic2hvcnRjdXRzIiwiYnV0dG9uUHJvcHMiLCJ0aXRsZSIsImljb24iLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImV4ZWN1dGUiLCJzdGF0ZSIsImFwaSIsIm1vZGlmeVRleHQiLCJzZWxlY3RlZFRleHQiLCJyZXBsYWNlU2VsZWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFHTyxJQUFNQSxNQUFnQixHQUFHO0FBQzlCQyxFQUFBQSxJQUFJLEVBQUUsUUFEd0I7QUFFOUJDLEVBQUFBLFVBQVUsRUFBRSxRQUZrQjtBQUc5QkMsRUFBQUEsU0FBUyxFQUFFLFdBSG1CO0FBSTlCQyxFQUFBQSxXQUFXLEVBQUU7QUFBRSxrQkFBYyxlQUFoQjtBQUFpQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQXhDLEdBSmlCO0FBSzlCQyxFQUFBQSxJQUFJLGVBQUU7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUUsRUFBWjtBQUFnQkMsTUFBQUEsU0FBUyxFQUFFO0FBQTNCO0FBQVosZUFMd0I7QUFNOUJDLEVBQUFBLE9BQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFtQkMsR0FBbkIsRUFBb0M7QUFDM0MsUUFBSUMsVUFBVSxnQkFBU0YsS0FBSyxDQUFDRyxZQUFmLE9BQWQ7O0FBQ0EsUUFBSSxDQUFDSCxLQUFLLENBQUNHLFlBQVgsRUFBeUI7QUFDdkJELE1BQUFBLFVBQVUsUUFBVjtBQUNEOztBQUNERCxJQUFBQSxHQUFHLENBQUNHLGdCQUFKLENBQXFCRixVQUFyQjtBQUNEO0FBWjZCLENBQXpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJQ29tbWFuZCwgVGV4dFN0YXRlLCBUZXh0QXBpIH0gZnJvbSAnLi8nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRpdGxlMjogSUNvbW1hbmQgPSB7XHJcbiAgbmFtZTogJ3RpdGxlMicsXHJcbiAga2V5Q29tbWFuZDogJ3RpdGxlMicsXHJcbiAgc2hvcnRjdXRzOiAnY3RybGNtZCsyJyxcclxuICBidXR0b25Qcm9wczogeyAnYXJpYS1sYWJlbCc6ICdJbnNlcnQgdGl0bGUyJywgdGl0bGU6ICdJbnNlcnQgdGl0bGUgMicgfSxcclxuICBpY29uOiA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAxNiwgdGV4dEFsaWduOiAnbGVmdCcgfX0+VGl0bGUgMjwvZGl2PixcclxuICBleGVjdXRlOiAoc3RhdGU6IFRleHRTdGF0ZSwgYXBpOiBUZXh0QXBpKSA9PiB7XHJcbiAgICBsZXQgbW9kaWZ5VGV4dCA9IGAjIyAke3N0YXRlLnNlbGVjdGVkVGV4dH1cXG5gO1xyXG4gICAgaWYgKCFzdGF0ZS5zZWxlY3RlZFRleHQpIHtcclxuICAgICAgbW9kaWZ5VGV4dCA9IGAjIyBgO1xyXG4gICAgfVxyXG4gICAgYXBpLnJlcGxhY2VTZWxlY3Rpb24obW9kaWZ5VGV4dCk7XHJcbiAgfSxcclxufTtcclxuIl19