"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Textarea;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Context = require("../../Context");

var _commands = require("../../commands");

var _handleKeyDown = _interopRequireDefault(require("./handleKeyDown"));

var _shortcuts = _interopRequireDefault(require("./shortcuts"));

function Textarea(props) {
  var prefixCls = props.prefixCls,
      other = (0, _objectWithoutProperties2.default)(props, ["prefixCls"]);

  var _useContext = (0, _react.useContext)(_Context.EditorContext),
      markdown = _useContext.markdown,
      commands = _useContext.commands,
      tabSize = _useContext.tabSize,
      _onChange = _useContext.onChange,
      dispatch = _useContext.dispatch;

  var textRef = /*#__PURE__*/_react.default.createRef();

  var executeRef = _react.default.useRef();

  (0, _react.useEffect)(function () {
    if (textRef.current && dispatch) {
      var commandOrchestrator = new _commands.TextAreaCommandOrchestrator(textRef.current);
      executeRef.current = commandOrchestrator;
      dispatch({
        textarea: textRef.current,
        commandOrchestrator: commandOrchestrator
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
      spellCheck: false
    }, other, {
      ref: textRef,
      className: "".concat(prefixCls, "-text-input ").concat(other.className ? other.className : ''),
      value: markdown,
      onScroll: props.onScroll,
      onKeyDown: function onKeyDown(e) {
        (0, _handleKeyDown.default)(e, tabSize);
        (0, _shortcuts.default)(e, commands, executeRef.current);
      },
      onChange: function onChange(e) {
        dispatch && dispatch({
          markdown: e.target.value
        });
        _onChange && _onChange(e.target.value);
      }
    }));
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [markdown]);
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL1RleHRhcmVhLnRzeCJdLCJuYW1lcyI6WyJUZXh0YXJlYSIsInByb3BzIiwicHJlZml4Q2xzIiwib3RoZXIiLCJFZGl0b3JDb250ZXh0IiwibWFya2Rvd24iLCJjb21tYW5kcyIsInRhYlNpemUiLCJvbkNoYW5nZSIsImRpc3BhdGNoIiwidGV4dFJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZXhlY3V0ZVJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJjb21tYW5kT3JjaGVzdHJhdG9yIiwiVGV4dEFyZWFDb21tYW5kT3JjaGVzdHJhdG9yIiwidGV4dGFyZWEiLCJjbGFzc05hbWUiLCJvblNjcm9sbCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBU2UsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0M7QUFDckQsTUFBUUMsU0FBUixHQUFnQ0QsS0FBaEMsQ0FBUUMsU0FBUjtBQUFBLE1BQXNCQyxLQUF0QiwwQ0FBZ0NGLEtBQWhDOztBQUNBLG9CQUE0RCx1QkFBV0csc0JBQVgsQ0FBNUQ7QUFBQSxNQUFRQyxRQUFSLGVBQVFBLFFBQVI7QUFBQSxNQUFrQkMsUUFBbEIsZUFBa0JBLFFBQWxCO0FBQUEsTUFBNEJDLE9BQTVCLGVBQTRCQSxPQUE1QjtBQUFBLE1BQXFDQyxTQUFyQyxlQUFxQ0EsUUFBckM7QUFBQSxNQUErQ0MsUUFBL0MsZUFBK0NBLFFBQS9DOztBQUNBLE1BQU1DLE9BQU8sZ0JBQUdDLGVBQU1DLFNBQU4sRUFBaEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHRixlQUFNRyxNQUFOLEVBQW5COztBQUNBLHdCQUFVLFlBQU07QUFDZCxRQUFJSixPQUFPLENBQUNLLE9BQVIsSUFBbUJOLFFBQXZCLEVBQWlDO0FBQy9CLFVBQU1PLG1CQUFtQixHQUFHLElBQUlDLHFDQUFKLENBQWdDUCxPQUFPLENBQUNLLE9BQXhDLENBQTVCO0FBQ0FGLE1BQUFBLFVBQVUsQ0FBQ0UsT0FBWCxHQUFxQkMsbUJBQXJCO0FBQ0FQLE1BQUFBLFFBQVEsQ0FBQztBQUFFUyxRQUFBQSxRQUFRLEVBQUVSLE9BQU8sQ0FBQ0ssT0FBcEI7QUFBNkJDLFFBQUFBLG1CQUFtQixFQUFuQkE7QUFBN0IsT0FBRCxDQUFSO0FBQ0QsS0FMYSxDQU1kOztBQUNELEdBUEQsRUFPRyxFQVBIO0FBUUEsU0FBTyxvQkFDTDtBQUFBLHdCQUNFO0FBQ0UsTUFBQSxVQUFVLEVBQUU7QUFEZCxPQUVNYixLQUZOO0FBR0UsTUFBQSxHQUFHLEVBQUVPLE9BSFA7QUFJRSxNQUFBLFNBQVMsWUFBS1IsU0FBTCx5QkFBNkJDLEtBQUssQ0FBQ2dCLFNBQU4sR0FBa0JoQixLQUFLLENBQUNnQixTQUF4QixHQUFvQyxFQUFqRSxDQUpYO0FBS0UsTUFBQSxLQUFLLEVBQUVkLFFBTFQ7QUFNRSxNQUFBLFFBQVEsRUFBRUosS0FBSyxDQUFDbUIsUUFObEI7QUFPRSxNQUFBLFNBQVMsRUFBRSxtQkFBQ0MsQ0FBRCxFQUFPO0FBQ2hCLG9DQUFjQSxDQUFkLEVBQWlCZCxPQUFqQjtBQUNBLGdDQUFVYyxDQUFWLEVBQWFmLFFBQWIsRUFBdUJPLFVBQVUsQ0FBQ0UsT0FBbEM7QUFDRCxPQVZIO0FBV0UsTUFBQSxRQUFRLEVBQUUsa0JBQUNNLENBQUQsRUFBTztBQUNmWixRQUFBQSxRQUFRLElBQUlBLFFBQVEsQ0FBQztBQUFFSixVQUFBQSxRQUFRLEVBQUVnQixDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFBckIsU0FBRCxDQUFwQjtBQUNBZixRQUFBQSxTQUFRLElBQUlBLFNBQVEsQ0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBcEI7QUFDRDtBQWRILE9BREY7QUFBQSxHQURLLEVBbUJMO0FBQ0EsR0FBQ2xCLFFBQUQsQ0FwQkssQ0FBUDtBQXNCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRWRpdG9yQ29udGV4dCB9IGZyb20gJy4uLy4uL0NvbnRleHQnO1xyXG5pbXBvcnQgeyBUZXh0QXJlYUNvbW1hbmRPcmNoZXN0cmF0b3IgfSBmcm9tICcuLi8uLi9jb21tYW5kcyc7XHJcbmltcG9ydCBoYW5kbGVLZXlEb3duIGZyb20gJy4vaGFuZGxlS2V5RG93bic7XHJcbmltcG9ydCBzaG9ydGN1dHMgZnJvbSAnLi9zaG9ydGN1dHMnO1xyXG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRBcmVhUHJvcHNcclxuICBleHRlbmRzIE9taXQ8UmVhY3QuVGV4dGFyZWFIVE1MQXR0cmlidXRlczxIVE1MVGV4dEFyZWFFbGVtZW50PiwgJ3ZhbHVlJyB8ICdvbkNoYW5nZSc+LFxyXG4gICAgSVByb3BzIHtcclxuICBvbkNoYW5nZT86IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRleHRhcmVhKHByb3BzOiBUZXh0QXJlYVByb3BzKSB7XHJcbiAgY29uc3QgeyBwcmVmaXhDbHMsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICBjb25zdCB7IG1hcmtkb3duLCBjb21tYW5kcywgdGFiU2l6ZSwgb25DaGFuZ2UsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEVkaXRvckNvbnRleHQpO1xyXG4gIGNvbnN0IHRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTFRleHRBcmVhRWxlbWVudD4oKTtcclxuICBjb25zdCBleGVjdXRlUmVmID0gUmVhY3QudXNlUmVmPFRleHRBcmVhQ29tbWFuZE9yY2hlc3RyYXRvcj4oKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRleHRSZWYuY3VycmVudCAmJiBkaXNwYXRjaCkge1xyXG4gICAgICBjb25zdCBjb21tYW5kT3JjaGVzdHJhdG9yID0gbmV3IFRleHRBcmVhQ29tbWFuZE9yY2hlc3RyYXRvcih0ZXh0UmVmLmN1cnJlbnQpO1xyXG4gICAgICBleGVjdXRlUmVmLmN1cnJlbnQgPSBjb21tYW5kT3JjaGVzdHJhdG9yO1xyXG4gICAgICBkaXNwYXRjaCh7IHRleHRhcmVhOiB0ZXh0UmVmLmN1cnJlbnQsIGNvbW1hbmRPcmNoZXN0cmF0b3IgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW10pO1xyXG4gIHJldHVybiB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKFxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICBzcGVsbENoZWNrPXtmYWxzZX1cclxuICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgICAgcmVmPXt0ZXh0UmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS10ZXh0LWlucHV0ICR7b3RoZXIuY2xhc3NOYW1lID8gb3RoZXIuY2xhc3NOYW1lIDogJyd9YH1cclxuICAgICAgICB2YWx1ZT17bWFya2Rvd259XHJcbiAgICAgICAgb25TY3JvbGw9e3Byb3BzLm9uU2Nyb2xsfVxyXG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IHtcclxuICAgICAgICAgIGhhbmRsZUtleURvd24oZSwgdGFiU2l6ZSk7XHJcbiAgICAgICAgICBzaG9ydGN1dHMoZSwgY29tbWFuZHMsIGV4ZWN1dGVSZWYuY3VycmVudCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoICYmIGRpc3BhdGNoKHsgbWFya2Rvd246IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICApLFxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gICAgW21hcmtkb3duXSxcclxuICApO1xyXG59XHJcbiJdfQ==