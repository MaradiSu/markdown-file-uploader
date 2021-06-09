"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TextArea;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Context = require("../../Context");

var _Markdown = _interopRequireDefault(require("./Markdown"));

var _Textarea = _interopRequireDefault(require("./Textarea"));

function TextArea(props) {
  var _ref = props || {},
      prefixCls = _ref.prefixCls,
      className = _ref.className,
      onScroll = _ref.onScroll,
      otherProps = (0, _objectWithoutProperties2.default)(_ref, ["prefixCls", "className", "onScroll"]);

  var _useContext = (0, _react.useContext)(_Context.EditorContext),
      scrollTop = _useContext.scrollTop,
      dispatch = _useContext.dispatch;

  var warp = /*#__PURE__*/_react.default.createRef();

  (0, _react.useEffect)(function () {
    var state = {};

    if (warp.current) {
      state.textareaWarp = warp.current || undefined;
      warp.current.scrollTop = scrollTop || 0;
    }

    if (dispatch) {
      dispatch((0, _objectSpread2.default)({}, state));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement("div", {
      ref: warp,
      className: "".concat(prefixCls, "-aree ").concat(className || ''),
      onScroll: onScroll
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-text")
    }, /*#__PURE__*/_react.default.createElement(_Markdown.default, {
      prefixCls: prefixCls
    }), /*#__PURE__*/_react.default.createElement(_Textarea.default, (0, _extends2.default)({
      prefixCls: prefixCls
    }, otherProps))));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsInByb3BzIiwicHJlZml4Q2xzIiwiY2xhc3NOYW1lIiwib25TY3JvbGwiLCJvdGhlclByb3BzIiwiRWRpdG9yQ29udGV4dCIsInNjcm9sbFRvcCIsImRpc3BhdGNoIiwid2FycCIsIlJlYWN0IiwiY3JlYXRlUmVmIiwic3RhdGUiLCJjdXJyZW50IiwidGV4dGFyZWFXYXJwIiwidW5kZWZpbmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUlBOztBQUNBOztBQWNlLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlDO0FBQ3RELGFBQTBEQSxLQUFLLElBQUksRUFBbkU7QUFBQSxNQUFRQyxTQUFSLFFBQVFBLFNBQVI7QUFBQSxNQUFtQkMsU0FBbkIsUUFBbUJBLFNBQW5CO0FBQUEsTUFBOEJDLFFBQTlCLFFBQThCQSxRQUE5QjtBQUFBLE1BQTJDQyxVQUEzQzs7QUFDQSxvQkFBZ0MsdUJBQVdDLHNCQUFYLENBQWhDO0FBQUEsTUFBUUMsU0FBUixlQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFFBQW5CLGVBQW1CQSxRQUFuQjs7QUFDQSxNQUFNQyxJQUFJLGdCQUFHQyxlQUFNQyxTQUFOLEVBQWI7O0FBQ0Esd0JBQVUsWUFBTTtBQUNkLFFBQU1DLEtBQW1CLEdBQUcsRUFBNUI7O0FBQ0EsUUFBSUgsSUFBSSxDQUFDSSxPQUFULEVBQWtCO0FBQ2hCRCxNQUFBQSxLQUFLLENBQUNFLFlBQU4sR0FBcUJMLElBQUksQ0FBQ0ksT0FBTCxJQUFnQkUsU0FBckM7QUFDQU4sTUFBQUEsSUFBSSxDQUFDSSxPQUFMLENBQWFOLFNBQWIsR0FBeUJBLFNBQVMsSUFBSSxDQUF0QztBQUNEOztBQUNELFFBQUlDLFFBQUosRUFBYztBQUNaQSxNQUFBQSxRQUFRLGlDQUFNSSxLQUFOLEVBQVI7QUFDRCxLQVJhLENBU2Q7O0FBQ0QsR0FWRCxFQVVHLEVBVkg7QUFXQSxTQUFPLG9CQUNMO0FBQUEsd0JBQ0U7QUFBSyxNQUFBLEdBQUcsRUFBRUgsSUFBVjtBQUFnQixNQUFBLFNBQVMsWUFBS1AsU0FBTCxtQkFBdUJDLFNBQVMsSUFBSSxFQUFwQyxDQUF6QjtBQUFtRSxNQUFBLFFBQVEsRUFBRUM7QUFBN0Usb0JBQ0U7QUFBSyxNQUFBLFNBQVMsWUFBS0YsU0FBTDtBQUFkLG9CQUNFLDZCQUFDLGlCQUFEO0FBQVUsTUFBQSxTQUFTLEVBQUVBO0FBQXJCLE1BREYsZUFFRSw2QkFBQyxpQkFBRDtBQUFVLE1BQUEsU0FBUyxFQUFFQTtBQUFyQixPQUFvQ0csVUFBcEMsRUFGRixDQURGLENBREY7QUFBQSxHQURLLEVBU0w7QUFDQSxJQVZLLENBQVA7QUFZRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEVkaXRvckNvbnRleHQsIENvbnRleHRTdG9yZSB9IGZyb20gJy4uLy4uL0NvbnRleHQnO1xyXG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcclxuXHJcbmltcG9ydCBNYXJrZG93biBmcm9tICcuL01hcmtkb3duJztcclxuaW1wb3J0IFRleHRhcmVhIGZyb20gJy4vVGV4dGFyZWEnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJVGV4dEFyZWFQcm9wc1xyXG4gIGV4dGVuZHMgT21pdDxSZWFjdC5UZXh0YXJlYUhUTUxBdHRyaWJ1dGVzPEhUTUxUZXh0QXJlYUVsZW1lbnQ+LCAndmFsdWUnIHwgJ29uQ2hhbmdlJyB8ICdvblNjcm9sbCc+LFxyXG4gICAgSVByb3BzIHtcclxuICBvblNjcm9sbD86IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4gdm9pZDtcclxuICB2YWx1ZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVGV4dEFyZWFSZWYgPSB7XHJcbiAgdGV4dD86IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgd2FycD86IEhUTUxEaXZFbGVtZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEFyZWEocHJvcHM6IElUZXh0QXJlYVByb3BzKSB7XHJcbiAgY29uc3QgeyBwcmVmaXhDbHMsIGNsYXNzTmFtZSwgb25TY3JvbGwsIC4uLm90aGVyUHJvcHMgfSA9IHByb3BzIHx8IHt9O1xyXG4gIGNvbnN0IHsgc2Nyb2xsVG9wLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChFZGl0b3JDb250ZXh0KTtcclxuICBjb25zdCB3YXJwID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdGF0ZTogQ29udGV4dFN0b3JlID0ge307XHJcbiAgICBpZiAod2FycC5jdXJyZW50KSB7XHJcbiAgICAgIHN0YXRlLnRleHRhcmVhV2FycCA9IHdhcnAuY3VycmVudCB8fCB1bmRlZmluZWQ7XHJcbiAgICAgIHdhcnAuY3VycmVudC5zY3JvbGxUb3AgPSBzY3JvbGxUb3AgfHwgMDtcclxuICAgIH1cclxuICAgIGlmIChkaXNwYXRjaCkge1xyXG4gICAgICBkaXNwYXRjaCh7IC4uLnN0YXRlIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gdXNlTWVtbyhcclxuICAgICgpID0+IChcclxuICAgICAgPGRpdiByZWY9e3dhcnB9IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1hcmVlICR7Y2xhc3NOYW1lIHx8ICcnfWB9IG9uU2Nyb2xsPXtvblNjcm9sbH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tdGV4dGB9PlxyXG4gICAgICAgICAgPE1hcmtkb3duIHByZWZpeENscz17cHJlZml4Q2xzfSAvPlxyXG4gICAgICAgICAgPFRleHRhcmVhIHByZWZpeENscz17cHJlZml4Q2xzfSB7Li4ub3RoZXJQcm9wc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW10sXHJcbiAgKTtcclxufVxyXG4iXX0=