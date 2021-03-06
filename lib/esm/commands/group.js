import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import React from 'react';
export var group = function group(arr, options) {
  var data = _objectSpread(_objectSpread({
    children: arr,
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 520 520"
    }, /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: "M15.7083333,468 C7.03242448,468 0,462.030833 0,454.666667 L0,421.333333 C0,413.969167 7.03242448,408 15.7083333,408 L361.291667,408 C369.967576,408 377,413.969167 377,421.333333 L377,454.666667 C377,462.030833 369.967576,468 361.291667,468 L15.7083333,468 Z M21.6666667,366 C9.69989583,366 0,359.831861 0,352.222222 L0,317.777778 C0,310.168139 9.69989583,304 21.6666667,304 L498.333333,304 C510.300104,304 520,310.168139 520,317.777778 L520,352.222222 C520,359.831861 510.300104,366 498.333333,366 L21.6666667,366 Z M136.835938,64 L136.835937,126 L107.25,126 L107.25,251 L40.75,251 L40.75,126 L-5.68434189e-14,126 L-5.68434189e-14,64 L136.835938,64 Z M212,64 L212,251 L161.648438,251 L161.648438,64 L212,64 Z M378,64 L378,126 L343.25,126 L343.25,251 L281.75,251 L281.75,126 L238,126 L238,64 L378,64 Z M449.047619,189.550781 L520,189.550781 L520,251 L405,251 L405,64 L449.047619,64 L449.047619,189.550781 Z"
    })),
    execute: function execute() {}
  }, options), {}, {
    keyCommand: 'group'
  });

  if (Array.isArray(data.children)) {
    data.children = data.children.map(function (_ref) {
      var item = _extends({}, _ref);

      item.parent = data;
      return _objectSpread({}, item);
    });
  }

  return data;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9ncm91cC50c3giXSwibmFtZXMiOlsiUmVhY3QiLCJncm91cCIsImFyciIsIm9wdGlvbnMiLCJkYXRhIiwiY2hpbGRyZW4iLCJpY29uIiwiZXhlY3V0ZSIsImtleUNvbW1hbmQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJpdGVtIiwicGFyZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFPQSxPQUFPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEdBQUQsRUFBeUNDLE9BQXpDLEVBQXNGO0FBQ3pHLE1BQUlDLElBQUk7QUFDTkMsSUFBQUEsUUFBUSxFQUFFSCxHQURKO0FBRU5JLElBQUFBLElBQUksZUFDRjtBQUFLLE1BQUEsS0FBSyxFQUFDLElBQVg7QUFBZ0IsTUFBQSxNQUFNLEVBQUMsSUFBdkI7QUFBNEIsTUFBQSxPQUFPLEVBQUM7QUFBcEMsb0JBQ0U7QUFDRSxNQUFBLElBQUksRUFBQyxjQURQO0FBRUUsTUFBQSxDQUFDLEVBQUM7QUFGSixNQURGLENBSEk7QUFVTkMsSUFBQUEsT0FBTyxFQUFFLG1CQUFNLENBQUU7QUFWWCxLQVdISixPQVhHO0FBWU5LLElBQUFBLFVBQVUsRUFBRTtBQVpOLElBQVI7O0FBY0EsTUFBSUMsS0FBSyxDQUFDQyxPQUFOLENBQWNOLElBQUksQ0FBQ0MsUUFBbkIsQ0FBSixFQUFrQztBQUNoQ0QsSUFBQUEsSUFBSSxDQUFDQyxRQUFMLEdBQWdCRCxJQUFJLENBQUNDLFFBQUwsQ0FBY00sR0FBZCxDQUFrQixnQkFBMkI7QUFBQSxVQUFyQkMsSUFBcUI7O0FBQzNEQSxNQUFBQSxJQUFJLENBQUNDLE1BQUwsR0FBY1QsSUFBZDtBQUNBLCtCQUFZUSxJQUFaO0FBQ0QsS0FIZSxDQUFoQjtBQUlEOztBQUNELFNBQU9SLElBQVA7QUFDRCxDQXRCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IElDb21tYW5kLCBJQ29tbWFuZENoaWxkQ29tbWFuZHMsIElDb21tYW5kQ2hpbGRIYW5kbGUgfSBmcm9tICcuLyc7XHJcblxyXG5leHBvcnQgdHlwZSBHcm91cE9wdGlvbnMgPSBPbWl0PElDb21tYW5kPHN0cmluZz4sICdjaGlsZHJlbic+ICYge1xyXG4gIGNoaWxkcmVuPzogSUNvbW1hbmRDaGlsZEhhbmRsZVsnY2hpbGRyZW4nXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBncm91cCA9IChhcnI6IElDb21tYW5kQ2hpbGRDb21tYW5kc1snY2hpbGRyZW4nXSwgb3B0aW9ucz86IEdyb3VwT3B0aW9ucyk6IElDb21tYW5kPHN0cmluZz4gPT4ge1xyXG4gIGxldCBkYXRhID0ge1xyXG4gICAgY2hpbGRyZW46IGFyciBhcyBhbnksXHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmcgd2lkdGg9XCIxMlwiIGhlaWdodD1cIjEyXCIgdmlld0JveD1cIjAgMCA1MjAgNTIwXCI+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgZD1cIk0xNS43MDgzMzMzLDQ2OCBDNy4wMzI0MjQ0OCw0NjggMCw0NjIuMDMwODMzIDAsNDU0LjY2NjY2NyBMMCw0MjEuMzMzMzMzIEMwLDQxMy45NjkxNjcgNy4wMzI0MjQ0OCw0MDggMTUuNzA4MzMzMyw0MDggTDM2MS4yOTE2NjcsNDA4IEMzNjkuOTY3NTc2LDQwOCAzNzcsNDEzLjk2OTE2NyAzNzcsNDIxLjMzMzMzMyBMMzc3LDQ1NC42NjY2NjcgQzM3Nyw0NjIuMDMwODMzIDM2OS45Njc1NzYsNDY4IDM2MS4yOTE2NjcsNDY4IEwxNS43MDgzMzMzLDQ2OCBaIE0yMS42NjY2NjY3LDM2NiBDOS42OTk4OTU4MywzNjYgMCwzNTkuODMxODYxIDAsMzUyLjIyMjIyMiBMMCwzMTcuNzc3Nzc4IEMwLDMxMC4xNjgxMzkgOS42OTk4OTU4MywzMDQgMjEuNjY2NjY2NywzMDQgTDQ5OC4zMzMzMzMsMzA0IEM1MTAuMzAwMTA0LDMwNCA1MjAsMzEwLjE2ODEzOSA1MjAsMzE3Ljc3Nzc3OCBMNTIwLDM1Mi4yMjIyMjIgQzUyMCwzNTkuODMxODYxIDUxMC4zMDAxMDQsMzY2IDQ5OC4zMzMzMzMsMzY2IEwyMS42NjY2NjY3LDM2NiBaIE0xMzYuODM1OTM4LDY0IEwxMzYuODM1OTM3LDEyNiBMMTA3LjI1LDEyNiBMMTA3LjI1LDI1MSBMNDAuNzUsMjUxIEw0MC43NSwxMjYgTC01LjY4NDM0MTg5ZS0xNCwxMjYgTC01LjY4NDM0MTg5ZS0xNCw2NCBMMTM2LjgzNTkzOCw2NCBaIE0yMTIsNjQgTDIxMiwyNTEgTDE2MS42NDg0MzgsMjUxIEwxNjEuNjQ4NDM4LDY0IEwyMTIsNjQgWiBNMzc4LDY0IEwzNzgsMTI2IEwzNDMuMjUsMTI2IEwzNDMuMjUsMjUxIEwyODEuNzUsMjUxIEwyODEuNzUsMTI2IEwyMzgsMTI2IEwyMzgsNjQgTDM3OCw2NCBaIE00NDkuMDQ3NjE5LDE4OS41NTA3ODEgTDUyMCwxODkuNTUwNzgxIEw1MjAsMjUxIEw0MDUsMjUxIEw0MDUsNjQgTDQ0OS4wNDc2MTksNjQgTDQ0OS4wNDc2MTksMTg5LjU1MDc4MSBaXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICBleGVjdXRlOiAoKSA9PiB7fSxcclxuICAgIC4uLm9wdGlvbnMsXHJcbiAgICBrZXlDb21tYW5kOiAnZ3JvdXAnLFxyXG4gIH07XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5jaGlsZHJlbikpIHtcclxuICAgIGRhdGEuY2hpbGRyZW4gPSBkYXRhLmNoaWxkcmVuLm1hcCgoeyAuLi5pdGVtIH06IElDb21tYW5kKSA9PiB7XHJcbiAgICAgIGl0ZW0ucGFyZW50ID0gZGF0YTtcclxuICAgICAgcmV0dXJuIHsgLi4uaXRlbSB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iXX0=