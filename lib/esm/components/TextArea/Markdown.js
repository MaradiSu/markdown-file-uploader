import React, { useContext, useEffect, useMemo } from 'react';
import rehype from 'rehype'; // @ts-ignore

import rehypePrism from '@mapbox/rehype-prism';
import { EditorContext } from '../../Context';
export default function Markdown(props) {
  var prefixCls = props.prefixCls;

  var _useContext = useContext(EditorContext),
      _useContext$markdown = _useContext.markdown,
      markdown = _useContext$markdown === void 0 ? '' : _useContext$markdown,
      highlightEnable = _useContext.highlightEnable,
      dispatch = _useContext.dispatch;

  var preRef = /*#__PURE__*/React.createRef();
  useEffect(function () {
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

  return useMemo(function () {
    if (!highlightEnable || !markdown) return /*#__PURE__*/React.createElement("pre", {
      children: markdown || '',
      ref: preRef,
      className: "".concat(prefixCls, "-text-pre wmde-markdown-color")
    });
    var str = rehype().data('settings', {
      fragment: false
    }).use(rehypePrism, {
      ignoreMissing: true
    }).processSync("<pre class=\"language-markdown ".concat(prefixCls, "-text-pre wmde-markdown-color\"><code class=\"language-markdown\">").concat(html2Escape(markdown || ''), "</code></pre>"));
    return /*#__PURE__*/React.createElement("div", {
      className: "wmde-markdown-color",
      dangerouslySetInnerHTML: {
        __html: str.contents
      }
    });
  }, [highlightEnable, markdown, preRef, prefixCls]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RleHRBcmVhL01hcmtkb3duLnRzeCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwicmVoeXBlIiwicmVoeXBlUHJpc20iLCJFZGl0b3JDb250ZXh0IiwiTWFya2Rvd24iLCJwcm9wcyIsInByZWZpeENscyIsIm1hcmtkb3duIiwiaGlnaGxpZ2h0RW5hYmxlIiwiZGlzcGF0Y2giLCJwcmVSZWYiLCJjcmVhdGVSZWYiLCJjdXJyZW50IiwidGV4dGFyZWFQcmUiLCJodG1sMkVzY2FwZSIsInNIdG1sIiwicmVwbGFjZSIsImMiLCJzdHIiLCJkYXRhIiwiZnJhZ21lbnQiLCJ1c2UiLCJpZ25vcmVNaXNzaW5nIiwicHJvY2Vzc1N5bmMiLCJfX2h0bWwiLCJjb250ZW50cyJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsS0FBUCxJQUFnQkMsVUFBaEIsRUFBNEJDLFNBQTVCLEVBQXVDQyxPQUF2QyxRQUFzRCxPQUF0RDtBQUNBLE9BQU9DLE1BQVAsTUFBbUIsUUFBbkIsQyxDQUNBOztBQUNBLE9BQU9DLFdBQVAsTUFBd0Isc0JBQXhCO0FBRUEsU0FBU0MsYUFBVCxRQUE4QixlQUE5QjtBQUlBLGVBQWUsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0M7QUFDckQsTUFBUUMsU0FBUixHQUFzQkQsS0FBdEIsQ0FBUUMsU0FBUjs7QUFDQSxvQkFBcURSLFVBQVUsQ0FBQ0ssYUFBRCxDQUEvRDtBQUFBLHlDQUFRSSxRQUFSO0FBQUEsTUFBUUEsUUFBUixxQ0FBbUIsRUFBbkI7QUFBQSxNQUF1QkMsZUFBdkIsZUFBdUJBLGVBQXZCO0FBQUEsTUFBd0NDLFFBQXhDLGVBQXdDQSxRQUF4Qzs7QUFDQSxNQUFNQyxNQUFNLGdCQUFHYixLQUFLLENBQUNjLFNBQU4sRUFBZjtBQUNBWixFQUFBQSxTQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlXLE1BQU0sQ0FBQ0UsT0FBUCxJQUFrQkgsUUFBdEIsRUFBZ0M7QUFDOUJBLE1BQUFBLFFBQVEsQ0FBQztBQUFFSSxRQUFBQSxXQUFXLEVBQUVILE1BQU0sQ0FBQ0U7QUFBdEIsT0FBRCxDQUFSO0FBQ0QsS0FIYSxDQUlkOztBQUNELEdBTFEsRUFLTixFQUxNLENBQVQ7O0FBTUEsV0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFBaUM7QUFDL0IsV0FBT0EsS0FBSyxDQUFDQyxPQUFOLENBQ0wsU0FESyxFQUVMLFVBQUNDLENBQUQ7QUFBQSxhQUFpQjtBQUFFLGFBQUssTUFBUDtBQUFlLGFBQUssTUFBcEI7QUFBNEIsYUFBSyxPQUFqQztBQUEwQyxhQUFLO0FBQS9DLE9BQUQsQ0FBbUVBLENBQW5FLENBQWhCO0FBQUEsS0FGSyxDQUFQO0FBSUQ7O0FBRUQsU0FBT2pCLE9BQU8sQ0FBQyxZQUFNO0FBQ25CLFFBQUksQ0FBQ1EsZUFBRCxJQUFvQixDQUFDRCxRQUF6QixFQUNFLG9CQUFPO0FBQUssTUFBQSxRQUFRLEVBQUVBLFFBQVEsSUFBSSxFQUEzQjtBQUErQixNQUFBLEdBQUcsRUFBRUcsTUFBcEM7QUFBNEMsTUFBQSxTQUFTLFlBQUtKLFNBQUw7QUFBckQsTUFBUDtBQUNGLFFBQU1ZLEdBQUcsR0FBR2pCLE1BQU0sR0FDZmtCLElBRFMsQ0FDSixVQURJLEVBQ1E7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FEUixFQUVUQyxHQUZTLENBRUxuQixXQUZLLEVBRVE7QUFBRW9CLE1BQUFBLGFBQWEsRUFBRTtBQUFqQixLQUZSLEVBR1RDLFdBSFMsMENBSXlCakIsU0FKekIsK0VBSW9HUSxXQUFXLENBQ3JIUCxRQUFRLElBQUksRUFEeUcsQ0FKL0csbUJBQVo7QUFRQSx3QkFBTztBQUFLLE1BQUEsU0FBUyxFQUFDLHFCQUFmO0FBQXFDLE1BQUEsdUJBQXVCLEVBQUU7QUFBRWlCLFFBQUFBLE1BQU0sRUFBRU4sR0FBRyxDQUFDTztBQUFkO0FBQTlELE1BQVA7QUFDRCxHQVphLEVBWVgsQ0FBQ2pCLGVBQUQsRUFBa0JELFFBQWxCLEVBQTRCRyxNQUE1QixFQUFvQ0osU0FBcEMsQ0FaVyxDQUFkO0FBYUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcmVoeXBlIGZyb20gJ3JlaHlwZSc7XHJcbi8vIEB0cy1pZ25vcmVcclxuaW1wb3J0IHJlaHlwZVByaXNtIGZyb20gJ0BtYXBib3gvcmVoeXBlLXByaXNtJztcclxuaW1wb3J0IHsgSVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBFZGl0b3JDb250ZXh0IH0gZnJvbSAnLi4vLi4vQ29udGV4dCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtkb3duUHJvcHMgZXh0ZW5kcyBJUHJvcHMsIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxQcmVFbGVtZW50PiB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2Rvd24ocHJvcHM6IE1hcmtkb3duUHJvcHMpIHtcclxuICBjb25zdCB7IHByZWZpeENscyB9ID0gcHJvcHM7XHJcbiAgY29uc3QgeyBtYXJrZG93biA9ICcnLCBoaWdobGlnaHRFbmFibGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KEVkaXRvckNvbnRleHQpO1xyXG4gIGNvbnN0IHByZVJlZiA9IFJlYWN0LmNyZWF0ZVJlZjxIVE1MUHJlRWxlbWVudD4oKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHByZVJlZi5jdXJyZW50ICYmIGRpc3BhdGNoKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdGV4dGFyZWFQcmU6IHByZVJlZi5jdXJyZW50IH0pO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xyXG4gIH0sIFtdKTtcclxuICBmdW5jdGlvbiBodG1sMkVzY2FwZShzSHRtbDogYW55KSB7XHJcbiAgICByZXR1cm4gc0h0bWwucmVwbGFjZShcclxuICAgICAgL1s8PiZcIl0vZyxcclxuICAgICAgKGM6IHN0cmluZykgPT4gKCh7ICc8JzogJyZsdDsnLCAnPic6ICcmZ3Q7JywgJyYnOiAnJmFtcDsnLCAnXCInOiAnJnF1b3Q7JyB9IGFzIGFueSlbY10pLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICghaGlnaGxpZ2h0RW5hYmxlIHx8ICFtYXJrZG93bilcclxuICAgICAgcmV0dXJuIDxwcmUgY2hpbGRyZW49e21hcmtkb3duIHx8ICcnfSByZWY9e3ByZVJlZn0gY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LXRleHQtcHJlIHdtZGUtbWFya2Rvd24tY29sb3JgfSAvPjtcclxuICAgIGNvbnN0IHN0ciA9IHJlaHlwZSgpXHJcbiAgICAgIC5kYXRhKCdzZXR0aW5ncycsIHsgZnJhZ21lbnQ6IGZhbHNlIH0pXHJcbiAgICAgIC51c2UocmVoeXBlUHJpc20sIHsgaWdub3JlTWlzc2luZzogdHJ1ZSB9KVxyXG4gICAgICAucHJvY2Vzc1N5bmMoXHJcbiAgICAgICAgYDxwcmUgY2xhc3M9XCJsYW5ndWFnZS1tYXJrZG93biAke3ByZWZpeENsc30tdGV4dC1wcmUgd21kZS1tYXJrZG93bi1jb2xvclwiPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtbWFya2Rvd25cIj4ke2h0bWwyRXNjYXBlKFxyXG4gICAgICAgICAgbWFya2Rvd24gfHwgJycsXHJcbiAgICAgICAgKX08L2NvZGU+PC9wcmU+YCxcclxuICAgICAgKTtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndtZGUtbWFya2Rvd24tY29sb3JcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHN0ci5jb250ZW50cyBhcyBhbnkgfX0gLz47XHJcbiAgfSwgW2hpZ2hsaWdodEVuYWJsZSwgbWFya2Rvd24sIHByZVJlZiwgcHJlZml4Q2xzXSk7XHJcbn1cclxuIl19