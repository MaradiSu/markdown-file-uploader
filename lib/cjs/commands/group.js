"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.group = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = _interopRequireDefault(require("react"));

var group = function group(arr, options) {
  var data = (0, _objectSpread2.default)((0, _objectSpread2.default)({
    children: arr,
    icon: /*#__PURE__*/_react.default.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520"
    }, /*#__PURE__*/_react.default.createElement("path", {
      fill: "currentColor",
      d: "M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
    })),
    execute: function execute() {}
  }, options), {}, {
    keyCommand: 'group'
  });

  if (Array.isArray(data.children)) {
    data.children = data.children.map(function (_ref) {
      var item = (0, _extends2.default)({}, _ref);
      item.parent = data;
      return (0, _objectSpread2.default)({}, item);
    });
  }

  return data;
};

exports.group = group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9ncm91cC50c3giXSwibmFtZXMiOlsiZ3JvdXAiLCJhcnIiLCJvcHRpb25zIiwiZGF0YSIsImNoaWxkcmVuIiwiaWNvbiIsImV4ZWN1dGUiLCJrZXlDb21tYW5kIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsInBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQU9PLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBeUNDLE9BQXpDLEVBQXNGO0FBQ3pHLE1BQUlDLElBQUk7QUFDTkMsSUFBQUEsUUFBUSxFQUFFSCxHQURKO0FBRU5JLElBQUFBLElBQUksZUFDRjtBQUFLLE1BQUEsS0FBSyxFQUFDLElBQVg7QUFBZ0IsTUFBQSxNQUFNLEVBQUMsSUFBdkI7QUFBNEIsTUFBQSxPQUFPLEVBQUM7QUFBcEMsb0JBQ0U7QUFDRSxNQUFBLElBQUksRUFBQyxjQURQO0FBRUUsTUFBQSxDQUFDLEVBQUM7QUFGSixNQURGLENBSEk7QUFVTkMsSUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUU7QUFWWCxLQVdISixPQVhHO0FBWU5LLElBQUFBLFVBQVUsRUFBRTtBQVpOLElBQVI7O0FBY0EsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNOLElBQUksQ0FBQ0MsUUFBbkIsQ0FBSixFQUFrQztBQUNoQ0QsSUFBQUEsSUFBSSxDQUFDQyxRQUFMLEdBQWdCRCxJQUFJLENBQUNDLFFBQUwsQ0FBY00sR0FBZCxDQUFrQixnQkFBMkI7QUFBQSxVQUFyQkMsSUFBcUI7QUFDM0RBLE1BQUFBLElBQUksQ0FBQ0MsTUFBTCxHQUFjVCxJQUFkO0FBQ0EsNkNBQVlRLElBQVo7QUFDRCxLQUhlLENBQWhCO0FBSUQ7O0FBQ0QsU0FBT1IsSUFBUDtBQUNELENBdEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSUNvbW1hbmQsIElDb21tYW5kQ2hpbGRDb21tYW5kcywgSUNvbW1hbmRDaGlsZEhhbmRsZSB9IGZyb20gJy4vJztcclxuXHJcbmV4cG9ydCB0eXBlIEdyb3VwT3B0aW9ucyA9IE9taXQ8SUNvbW1hbmQ8c3RyaW5nPiwgJ2NoaWxkcmVuJz4gJiB7XHJcbiAgY2hpbGRyZW4/OiBJQ29tbWFuZENoaWxkSGFuZGxlWydjaGlsZHJlbiddO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyb3VwID0gKGFycjogSUNvbW1hbmRDaGlsZENvbW1hbmRzWydjaGlsZHJlbiddLCBvcHRpb25zPzogR3JvdXBPcHRpb25zKTogSUNvbW1hbmQ8c3RyaW5nPiA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7XHJcbiAgICBjaGlsZHJlbjogYXJyIGFzIGFueSxcclxuICAgIGljb246IChcclxuICAgICAgPHN2ZyB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTJcIiB2aWV3Qm94PVwiMCAwIDUyMCA1MjBcIj5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICBkPVwiTTE1LjcwODMzMzMsNDY4IEM3LjAzMjQyNDQ4LDQ2OCAwLDQ2Mi4wMzA4MzMgMCw0NTQuNjY2NjY3IEwwLDQyMS4zMzMzMzMgQzAsNDEzLjk2OTE2NyA3LjAzMjQyNDQ4LDQwOCAxNS43MDgzMzMzLDQwOCBMMzYxLjI5MTY2Nyw0MDggQzM2OS45Njc1NzYsNDA4IDM3Nyw0MTMuOTY5MTY3IDM3Nyw0MjEuMzMzMzMzIEwzNzcsNDU0LjY2NjY2NyBDMzc3LDQ2Mi4wMzA4MzMgMzY5Ljk2NzU3Niw0NjggMzYxLjI5MTY2Nyw0NjggTDE1LjcwODMzMzMsNDY4IFogTTIxLjY2NjY2NjcsMzY2IEM5LjY5OTg5NTgzLDM2NiAwLDM1OS44MzE4NjEgMCwzNTIuMjIyMjIyIEwwLDMxNy43Nzc3NzggQzAsMzEwLjE2ODEzOSA5LjY5OTg5NTgzLDMwNCAyMS42NjY2NjY3LDMwNCBMNDk4LjMzMzMzMywzMDQgQzUxMC4zMDAxMDQsMzA0IDUyMCwzMTAuMTY4MTM5IDUyMCwzMTcuNzc3Nzc4IEw1MjAsMzUyLjIyMjIyMiBDNTIwLDM1OS44MzE4NjEgNTEwLjMwMDEwNCwzNjYgNDk4LjMzMzMzMywzNjYgTDIxLjY2NjY2NjcsMzY2IFogTTEzNi44MzU5MzgsNjQgTDEzNi44MzU5MzcsMTI2IEwxMDcuMjUsMTI2IEwxMDcuMjUsMjUxIEw0MC43NSwyNTEgTDQwLjc1LDEyNiBMLTUuNjg0MzQxODllLTE0LDEyNiBMLTUuNjg0MzQxODllLTE0LDY0IEwxMzYuODM1OTM4LDY0IFogTTIxMiw2NCBMMjEyLDI1MSBMMTYxLjY0ODQzOCwyNTEgTDE2MS42NDg0MzgsNjQgTDIxMiw2NCBaIE0zNzgsNjQgTDM3OCwxMjYgTDM0My4yNSwxMjYgTDM0My4yNSwyNTEgTDI4MS43NSwyNTEgTDI4MS43NSwxMjYgTDIzOCwxMjYgTDIzOCw2NCBMMzc4LDY0IFogTTQ0OS4wNDc2MTksMTg5LjU1MDc4MSBMNTIwLDE4OS41NTA3ODEgTDUyMCwyNTEgTDQwNSwyNTEgTDQwNSw2NCBMNDQ5LjA0NzYxOSw2NCBMNDQ5LjA0NzYxOSwxODkuNTUwNzgxIFpcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIGV4ZWN1dGU6ICgpID0+IHt9LFxyXG4gICAgLi4ub3B0aW9ucyxcclxuICAgIGtleUNvbW1hbmQ6ICdncm91cCcsXHJcbiAgfTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmNoaWxkcmVuKSkge1xyXG4gICAgZGF0YS5jaGlsZHJlbiA9IGRhdGEuY2hpbGRyZW4ubWFwKCh7IC4uLml0ZW0gfTogSUNvbW1hbmQpID0+IHtcclxuICAgICAgaXRlbS5wYXJlbnQgPSBkYXRhO1xyXG4gICAgICByZXR1cm4geyAuLi5pdGVtIH07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcbiJdfQ==