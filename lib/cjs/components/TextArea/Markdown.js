"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Markdown;

var _react = _interopRequireWildcard(require("react"));

var _rehype = _interopRequireDefault(require("rehype"));

var _rehypePrism = _interopRequireDefault(require("@mapbox/rehype-prism"));

var _Context = require("../../Context");

// @ts-ignore
function Markdown(props) {
  var prefixCls = props.prefixCls;

  var _useContext = (0, _react.useContext)(_Context.EditorContext),
      _useContext$markdown = _useContext.markdown,
      markdown = _useContext$markdown === void 0 ? '' : _useContext$markdown,
      highlightEnable = _useContext.highlightEnable,
      dispatch = _useContext.dispatch;

  var preRef = /*#__PURE__*/_react.default.createRef();

  (0, _react.useEffect)(function () {
    if (preRef.current && dispatch) {
      dispatch({
        textareaPre: preRef.current
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  function html2Escape(sHtml) {
    return sHtml.replace(/[<>&"]/g, function (c) {
      return {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;'
      }[c];
    });
  }

  return (0, _react.useMemo)(function () {
    if (!highlightEnable || !markdown) return /*#__PURE__*/_react.default.createElement("pre", {
      children: markdown || '',
      ref: preRef,
      className: "".concat(prefixCls, "-text-pre wmde-markdown-color")
    });
    var str = (0, _rehype.default)().data('settings', {
      fragment: false
    }).use(_rehypePrism.default, {
      ignoreMissing: true
    }).processSync("<pre class=\"language-markdown ".concat(prefixCls, "-text-pre wmde-markdown-color\"><code class=\"language-markdown\">").concat(html2Escape(markdown || ''), "</code></pre>"));
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "wmde-markdown-color",
      dangerouslySetInnerHTML: {
        __html: str.contents
      }
    });
  }, [highlightEnable, markdown, preRef, prefixCls]);
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL01hcmtkb3duLnRzeCJdLCJuYW1lcyI6WyJNYXJrZG93biIsInByb3BzIiwicHJlZml4Q2xzIiwiRWRpdG9yQ29udGV4dCIsIm1hcmtkb3duIiwiaGlnaGxpZ2h0RW5hYmxlIiwiZGlzcGF0Y2giLCJwcmVSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJ0ZXh0YXJlYVByZSIsImh0bWwyRXNjYXBlIiwic0h0bWwiLCJyZXBsYWNlIiwiYyIsInN0ciIsImRhdGEiLCJmcmFnbWVudCIsInVzZSIsInJlaHlwZVByaXNtIiwiaWdub3JlTWlzc2luZyIsInByb2Nlc3NTeW5jIiwiX19odG1sIiwiY29udGVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBSEE7QUFPZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF3QztBQUNyRCxNQUFRQyxTQUFSLEdBQXNCRCxLQUF0QixDQUFRQyxTQUFSOztBQUNBLG9CQUFxRCx1QkFBV0Msc0JBQVgsQ0FBckQ7QUFBQSx5Q0FBUUMsUUFBUjtBQUFBLE1BQVFBLFFBQVIscUNBQW1CLEVBQW5CO0FBQUEsTUFBdUJDLGVBQXZCLGVBQXVCQSxlQUF2QjtBQUFBLE1BQXdDQyxRQUF4QyxlQUF3Q0EsUUFBeEM7O0FBQ0EsTUFBTUMsTUFBTSxnQkFBR0MsZUFBTUMsU0FBTixFQUFmOztBQUNBLHdCQUFVLFlBQU07QUFDZCxRQUFJRixNQUFNLENBQUNHLE9BQVAsSUFBa0JKLFFBQXRCLEVBQWdDO0FBQzlCQSxNQUFBQSxRQUFRLENBQUM7QUFBRUssUUFBQUEsV0FBVyxFQUFFSixNQUFNLENBQUNHO0FBQXRCLE9BQUQsQ0FBUjtBQUNELEtBSGEsQ0FJZDs7QUFDRCxHQUxELEVBS0csRUFMSDs7QUFNQSxXQUFTRSxXQUFULENBQXFCQyxLQUFyQixFQUFpQztBQUMvQixXQUFPQSxLQUFLLENBQUNDLE9BQU4sQ0FDTCxTQURLLEVBRUwsVUFBQ0MsQ0FBRDtBQUFBLGFBQWlCO0FBQUUsYUFBSyxNQUFQO0FBQWUsYUFBSyxNQUFwQjtBQUE0QixhQUFLLE9BQWpDO0FBQTBDLGFBQUs7QUFBL0MsT0FBRCxDQUFtRUEsQ0FBbkUsQ0FBaEI7QUFBQSxLQUZLLENBQVA7QUFJRDs7QUFFRCxTQUFPLG9CQUFRLFlBQU07QUFDbkIsUUFBSSxDQUFDVixlQUFELElBQW9CLENBQUNELFFBQXpCLEVBQ0Usb0JBQU87QUFBSyxNQUFBLFFBQVEsRUFBRUEsUUFBUSxJQUFJLEVBQTNCO0FBQStCLE1BQUEsR0FBRyxFQUFFRyxNQUFwQztBQUE0QyxNQUFBLFNBQVMsWUFBS0wsU0FBTDtBQUFyRCxNQUFQO0FBQ0YsUUFBTWMsR0FBRyxHQUFHLHVCQUNUQyxJQURTLENBQ0osVUFESSxFQUNRO0FBQUVDLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBRFIsRUFFVEMsR0FGUyxDQUVMQyxvQkFGSyxFQUVRO0FBQUVDLE1BQUFBLGFBQWEsRUFBRTtBQUFqQixLQUZSLEVBR1RDLFdBSFMsMENBSXlCcEIsU0FKekIsK0VBSW9HVSxXQUFXLENBQ3JIUixRQUFRLElBQUksRUFEeUcsQ0FKL0csbUJBQVo7QUFRQSx3QkFBTztBQUFLLE1BQUEsU0FBUyxFQUFDLHFCQUFmO0FBQXFDLE1BQUEsdUJBQXVCLEVBQUU7QUFBRW1CLFFBQUFBLE1BQU0sRUFBRVAsR0FBRyxDQUFDUTtBQUFkO0FBQTlELE1BQVA7QUFDRCxHQVpNLEVBWUosQ0FBQ25CLGVBQUQsRUFBa0JELFFBQWxCLEVBQTRCRyxNQUE1QixFQUFvQ0wsU0FBcEMsQ0FaSSxDQUFQO0FBYUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcmVoeXBlIGZyb20gJ3JlaHlwZSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gJ0BtYXBib3gvcmVoeXBlLXByaXNtJztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb250ZXh0IH0gZnJvbSAnLi4vLi4vQ29udGV4dCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtkb3duUHJvcHMgZXh0ZW5kcyBJUHJvcHMsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQcmVFbGVtZW50PiB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2Rvd24ocHJvcHM6IE1hcmtkb3duUHJvcHMpIHtcclxuICBjb25zdCB7IHByZWZpeENscyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBtYXJrZG93biA9ICcnLCBoaWdobGlnaHRFbmFibGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEVkaXRvckNvbnRleHQpO1xyXG4gIGNvbnN0IHByZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MUHJlRWxlbWVudD4oKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByZVJlZi5jdXJyZW50ICYmIGRpc3BhdGNoKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdGV4dGFyZWFQcmU6IHByZVJlZi5jdXJyZW50IH0pO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKTtcclxuICBmdW5jdGlvbiBodG1sMkVzY2FwZShzSHRtbDogYW55KSB7XHJcbiAgICByZXR1cm4gc0h0bWwucmVwbGFjZShcclxuICAgICAgL1s8PiZcIl0vZyxcclxuICAgICAgKGM6IHN0cmluZykgPT4gKCh7ICc8JzogJyZsdDsnLCAnPic6ICcmZ3Q7JywgJyYnOiAnJmFtcDsnLCAnXCInOiAnJnF1b3Q7JyB9IGFzIGFueSlbY10pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghaGlnaGxpZ2h0RW5hYmxlIHx8ICFtYXJrZG93bilcclxuICAgICAgcmV0dXJuIDxwcmUgY2hpbGRyZW49e21hcmtkb3duIHx8ICcnfSByZWY9e3ByZVJlZn0gY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXRleHQtcHJlIHdtZGUtbWFya2Rvd24tY29sb3JgfSAvPjtcclxuICAgIGNvbnN0IHN0ciA9IHJlaHlwZSgpXHJcbiAgICAgIC5kYXRhKCdzZXR0aW5ncycsIHsgZnJhZ21lbnQ6IGZhbHNlIH0pXHJcbiAgICAgIC51c2UocmVoeXBlUHJpc20sIHsgaWdub3JlTWlzc2luZzogdHJ1ZSB9KVxyXG4gICAgICAucHJvY2Vzc1N5bmMoXHJcbiAgICAgICAgYDxwcmUgY2xhc3M9XCJsYW5ndWFnZS1tYXJrZG93biAke3ByZWZpeENsc30tdGV4dC1wcmUgd21kZS1tYXJrZG93bi1jb2xvclwiPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtbWFya2Rvd25cIj4ke2h0bWwyRXNjYXBlKFxyXG4gICAgICAgICAgbWFya2Rvd24gfHwgJycsXHJcbiAgICAgICAgKX08L2NvZGU+PC9wcmU+YCxcclxuICAgICAgKTtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndtZGUtbWFya2Rvd24tY29sb3JcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0ci5jb250ZW50cyBhcyBhbnkgfX0gLz47XHJcbiAgfSwgW2hpZ2hsaWdodEVuYWJsZSwgbWFya2Rvd24sIHByZVJlZiwgcHJlZml4Q2xzXSk7XHJcbn1cclxuIl19