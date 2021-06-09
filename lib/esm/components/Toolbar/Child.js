import _extends from "@babel/runtime/helpers/extends";
import React, { useContext, useMemo } from 'react';
import "./Child.css";
import Toolbar from './';
import { EditorContext } from '../../Context';
export default function Child(props) {
  var _ref = props || {},
      prefixCls = _ref.prefixCls,
      groupName = _ref.groupName,
      commands = _ref.commands,
      children = _ref.children;

  var _useContext = useContext(EditorContext),
      _useContext$barPopup = _useContext.barPopup,
      barPopup = _useContext$barPopup === void 0 ? {} : _useContext$barPopup;

  return useMemo(function () {
    return /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-toolbar-child ").concat(groupName && barPopup[groupName] ? 'active' : ''),
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, Array.isArray(commands) ? /*#__PURE__*/React.createElement(Toolbar, _extends({
      commands: commands
    }, props, {
      height: ""
    })) : children);
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  [commands, barPopup, groupName, prefixCls]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Rvb2xiYXIvQ2hpbGQudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZU1lbW8iLCJUb29sYmFyIiwiRWRpdG9yQ29udGV4dCIsIkNoaWxkIiwicHJvcHMiLCJwcmVmaXhDbHMiLCJncm91cE5hbWUiLCJjb21tYW5kcyIsImNoaWxkcmVuIiwiYmFyUG9wdXAiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiQXJyYXkiLCJpc0FycmF5Il0sIm1hcHBpbmdzIjoiO0FBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLE9BQTVCLFFBQTJDLE9BQTNDO0FBQ0E7QUFDQSxPQUFPQyxPQUFQLE1BQXVDLElBQXZDO0FBQ0EsU0FBU0MsYUFBVCxRQUE4QixlQUE5QjtBQU9BLGVBQWUsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQWtDO0FBQy9DLGFBQXFEQSxLQUFLLElBQUksRUFBOUQ7QUFBQSxNQUFRQyxTQUFSLFFBQVFBLFNBQVI7QUFBQSxNQUFtQkMsU0FBbkIsUUFBbUJBLFNBQW5CO0FBQUEsTUFBOEJDLFFBQTlCLFFBQThCQSxRQUE5QjtBQUFBLE1BQXdDQyxRQUF4QyxRQUF3Q0EsUUFBeEM7O0FBQ0Esb0JBQTBCVCxVQUFVLENBQUNHLGFBQUQsQ0FBcEM7QUFBQSx5Q0FBUU8sUUFBUjtBQUFBLE1BQVFBLFFBQVIscUNBQW1CLEVBQW5COztBQUNBLFNBQU9ULE9BQU8sQ0FDWjtBQUFBLHdCQUNFO0FBQ0UsTUFBQSxTQUFTLFlBQUtLLFNBQUwsNEJBQWdDQyxTQUFTLElBQUlHLFFBQVEsQ0FBQ0gsU0FBRCxDQUFyQixHQUFtQyxRQUFuQyxHQUE4QyxFQUE5RSxDQURYO0FBRUUsTUFBQSxPQUFPLEVBQUUsaUJBQUNJLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLGVBQUYsRUFBUDtBQUFBO0FBRlgsT0FJR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNOLFFBQWQsaUJBQTBCLG9CQUFDLE9BQUQ7QUFBUyxNQUFBLFFBQVEsRUFBRUE7QUFBbkIsT0FBaUNILEtBQWpDO0FBQXdDLE1BQUEsTUFBTSxFQUFDO0FBQS9DLE9BQTFCLEdBQWlGSSxRQUpwRixDQURGO0FBQUEsR0FEWSxFQVNaO0FBQ0EsR0FBQ0QsUUFBRCxFQUFXRSxRQUFYLEVBQXFCSCxTQUFyQixFQUFnQ0QsU0FBaEMsQ0FWWSxDQUFkO0FBWUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0NoaWxkLmxlc3MnO1xyXG5pbXBvcnQgVG9vbGJhciwgeyBJVG9vbGJhclByb3BzIH0gZnJvbSAnLi8nO1xyXG5pbXBvcnQgeyBFZGl0b3JDb250ZXh0IH0gZnJvbSAnLi4vLi4vQ29udGV4dCc7XHJcblxyXG5leHBvcnQgdHlwZSBDaGlsZFByb3BzID0gSVRvb2xiYXJQcm9wcyAmIHtcclxuICBjaGlsZHJlbj86IEpTWC5FbGVtZW50O1xyXG4gIGdyb3VwTmFtZT86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoaWxkKHByb3BzOiBDaGlsZFByb3BzKSB7XHJcbiAgY29uc3QgeyBwcmVmaXhDbHMsIGdyb3VwTmFtZSwgY29tbWFuZHMsIGNoaWxkcmVuIH0gPSBwcm9wcyB8fCB7fTtcclxuICBjb25zdCB7IGJhclBvcHVwID0ge30gfSA9IHVzZUNvbnRleHQoRWRpdG9yQ29udGV4dCk7XHJcbiAgcmV0dXJuIHVzZU1lbW8oXHJcbiAgICAoKSA9PiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tdG9vbGJhci1jaGlsZCAke2dyb3VwTmFtZSAmJiBiYXJQb3B1cFtncm91cE5hbWVdID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICA+XHJcbiAgICAgICAge0FycmF5LmlzQXJyYXkoY29tbWFuZHMpID8gPFRvb2xiYXIgY29tbWFuZHM9e2NvbW1hbmRzfSB7Li4ucHJvcHN9IGhlaWdodD1cIlwiIC8+IDogY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIFtjb21tYW5kcywgYmFyUG9wdXAsIGdyb3VwTmFtZSwgcHJlZml4Q2xzXSxcclxuICApO1xyXG59XHJcbiJdfQ==