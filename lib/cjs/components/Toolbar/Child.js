"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Child;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = _interopRequireDefault(require("./"));

var _Context = require("../../Context");

function Child(props) {
  var _ref = props || {},
      prefixCls = _ref.prefixCls,
      groupName = _ref.groupName,
      commands = _ref.commands,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_Context.EditorContext),
      _useContext$barPopup = _useContext.barPopup,
      barPopup = _useContext$barPopup === void 0 ? {} : _useContext$barPopup;

  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(prefixCls, "-toolbar-child ").concat(groupName && barPopup[groupName] ? 'active' : ''),
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, Array.isArray(commands) ? /*#__PURE__*/_react.default.createElement(_.default, (0, _extends2.default)({
      commands: commands
    }, props, {
      height: ""
    })) : children);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [commands, barPopup, groupName, prefixCls]);
}

module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rvb2xiYXIvQ2hpbGQudHN4Il0sIm5hbWVzIjpbIkNoaWxkIiwicHJvcHMiLCJwcmVmaXhDbHMiLCJncm91cE5hbWUiLCJjb21tYW5kcyIsImNoaWxkcmVuIiwiRWRpdG9yQ29udGV4dCIsImJhclBvcHVwIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQU9lLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFrQztBQUMvQyxhQUFxREEsS0FBSyxJQUFJLEVBQTlEO0FBQUEsTUFBUUMsU0FBUixRQUFRQSxTQUFSO0FBQUEsTUFBbUJDLFNBQW5CLFFBQW1CQSxTQUFuQjtBQUFBLE1BQThCQyxRQUE5QixRQUE4QkEsUUFBOUI7QUFBQSxNQUF3Q0MsUUFBeEMsUUFBd0NBLFFBQXhDOztBQUNBLG9CQUEwQix1QkFBV0Msc0JBQVgsQ0FBMUI7QUFBQSx5Q0FBUUMsUUFBUjtBQUFBLE1BQVFBLFFBQVIscUNBQW1CLEVBQW5COztBQUNBLFNBQU8sb0JBQ0w7QUFBQSx3QkFDRTtBQUNFLE1BQUEsU0FBUyxZQUFLTCxTQUFMLDRCQUFnQ0MsU0FBUyxJQUFJSSxRQUFRLENBQUNKLFNBQUQsQ0FBckIsR0FBbUMsUUFBbkMsR0FBOEMsRUFBOUUsQ0FEWDtBQUVFLE1BQUEsT0FBTyxFQUFFLGlCQUFDSyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxlQUFGLEVBQVA7QUFBQTtBQUZYLE9BSUdDLEtBQUssQ0FBQ0MsT0FBTixDQUFjUCxRQUFkLGlCQUEwQiw2QkFBQyxTQUFEO0FBQVMsTUFBQSxRQUFRLEVBQUVBO0FBQW5CLE9BQWlDSCxLQUFqQztBQUF3QyxNQUFBLE1BQU0sRUFBQztBQUEvQyxPQUExQixHQUFpRkksUUFKcEYsQ0FERjtBQUFBLEdBREssRUFTTDtBQUNBLEdBQUNELFFBQUQsRUFBV0csUUFBWCxFQUFxQkosU0FBckIsRUFBZ0NELFNBQWhDLENBVkssQ0FBUDtBQVlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9DaGlsZC5sZXNzJztcclxuaW1wb3J0IFRvb2xiYXIsIHsgSVRvb2xiYXJQcm9wcyB9IGZyb20gJy4vJztcclxuaW1wb3J0IHsgRWRpdG9yQ29udGV4dCB9IGZyb20gJy4uLy4uL0NvbnRleHQnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2hpbGRQcm9wcyA9IElUb29sYmFyUHJvcHMgJiB7XHJcbiAgY2hpbGRyZW4/OiBKU1guRWxlbWVudDtcclxuICBncm91cE5hbWU/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGlsZChwcm9wczogQ2hpbGRQcm9wcykge1xyXG4gIGNvbnN0IHsgcHJlZml4Q2xzLCBncm91cE5hbWUsIGNvbW1hbmRzLCBjaGlsZHJlbiB9ID0gcHJvcHMgfHwge307XHJcbiAgY29uc3QgeyBiYXJQb3B1cCA9IHt9IH0gPSB1c2VDb250ZXh0KEVkaXRvckNvbnRleHQpO1xyXG4gIHJldHVybiB1c2VNZW1vKFxyXG4gICAgKCkgPT4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXRvb2xiYXItY2hpbGQgJHtncm91cE5hbWUgJiYgYmFyUG9wdXBbZ3JvdXBOYW1lXSA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtBcnJheS5pc0FycmF5KGNvbW1hbmRzKSA/IDxUb29sYmFyIGNvbW1hbmRzPXtjb21tYW5kc30gey4uLnByb3BzfSBoZWlnaHQ9XCJcIiAvPiA6IGNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgICBbY29tbWFuZHMsIGJhclBvcHVwLCBncm91cE5hbWUsIHByZWZpeENsc10sXHJcbiAgKTtcclxufVxyXG4iXX0=