import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useEffect, useReducer, useMemo, useRef, useImperativeHandle } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import TextArea from './components/TextArea';
import Toolbar from './components/Toolbar';
import DragBar from './components/DragBar';
import { getCommands } from './commands';
import { reducer, EditorContext } from './Context';
import "./index.css";

function setGroupPopFalse() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.keys(data).forEach(function (keyname) {
    data[keyname] = false;
  });
  return data;
}

var InternalMDEditor = function InternalMDEditor(props, ref) {
  var _ref = props || {},
      _ref$prefixCls = _ref.prefixCls,
      prefixCls = _ref$prefixCls === void 0 ? 'w-md-editor' : _ref$prefixCls,
      className = _ref.className,
      propsValue = _ref.value,
      _ref$commands = _ref.commands,
      commands = _ref$commands === void 0 ? getCommands() : _ref$commands,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 200 : _ref$height,
      _ref$toolbarHeight = _ref.toolbarHeight,
      toolbarHeight = _ref$toolbarHeight === void 0 ? 29 : _ref$toolbarHeight,
      _ref$enableScroll = _ref.enableScroll,
      enableScroll = _ref$enableScroll === void 0 ? true : _ref$enableScroll,
      _ref$visiableDragbar = _ref.visiableDragbar,
      visiableDragbar = _ref$visiableDragbar === void 0 ? true : _ref$visiableDragbar,
      _ref$highlightEnable = _ref.highlightEnable,
      highlightEnable = _ref$highlightEnable === void 0 ? true : _ref$highlightEnable,
      _ref$preview = _ref.preview,
      previewType = _ref$preview === void 0 ? 'live' : _ref$preview,
      _ref$fullscreen = _ref.fullscreen,
      fullscreen = _ref$fullscreen === void 0 ? false : _ref$fullscreen,
      _ref$previewOptions = _ref.previewOptions,
      previewOptions = _ref$previewOptions === void 0 ? {} : _ref$previewOptions,
      textareaProps = _ref.textareaProps,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 1200 : _ref$maxHeight,
      _ref$minHeight = _ref.minHeight,
      minHeight = _ref$minHeight === void 0 ? 100 : _ref$minHeight,
      autoFocus = _ref.autoFocus,
      _ref$tabSize = _ref.tabSize,
      tabSize = _ref$tabSize === void 0 ? 2 : _ref$tabSize,
      onChange = _ref.onChange,
      hideToolbar = _ref.hideToolbar,
      other = _objectWithoutProperties(_ref, ["prefixCls", "className", "value", "commands", "height", "toolbarHeight", "enableScroll", "visiableDragbar", "highlightEnable", "preview", "fullscreen", "previewOptions", "textareaProps", "maxHeight", "minHeight", "autoFocus", "tabSize", "onChange", "hideToolbar"]);

  var _useReducer = useReducer(reducer, {
    markdown: propsValue,
    preview: previewType,
    height: height,
    highlightEnable: highlightEnable,
    tabSize: tabSize,
    scrollTop: 0,
    scrollTopPreview: 0,
    commands: commands,
    fullscreen: fullscreen,
    onChange: onChange,
    barPopup: {}
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var container = useRef(null);
  var previewRef = useRef(null);
  var enableScrollRef = useRef(enableScroll);
  useImperativeHandle(ref, function () {
    return _objectSpread({}, state);
  });
  useMemo(function () {
    return enableScrollRef.current = enableScroll;
  }, [enableScroll]);
  useEffect(function () {
    var stateInit = {};

    if (container.current) {
      stateInit.container = container.current || undefined;
    }

    stateInit.markdown = propsValue || '';
    stateInit.barPopup = {};

    if (dispatch) {
      dispatch(_objectSpread(_objectSpread({}, state), stateInit));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  var cls = [className, prefixCls, state.preview ? "".concat(prefixCls, "-show-").concat(state.preview) : null, state.fullscreen ? "".concat(prefixCls, "-fullscreen") : null].filter(Boolean).join(' ').trim();
  useMemo(function () {
    return propsValue !== state.markdown && dispatch({
      markdown: propsValue
    });
  }, [propsValue]);
  useMemo(function () {
    return previewType !== state.preview && dispatch({
      preview: previewType
    });
  }, [previewType]);
  useMemo(function () {
    return height !== state.height && dispatch({
      height: height
    });
  }, [height]);
  useMemo(function () {
    return tabSize !== state.tabSize && dispatch({
      tabSize: tabSize
    });
  }, [tabSize]);
  useMemo(function () {
    return highlightEnable !== state.highlightEnable && dispatch({
      highlightEnable: highlightEnable
    });
  }, [highlightEnable]);
  useMemo(function () {
    return autoFocus !== state.autoFocus && dispatch({
      autoFocus: autoFocus
    });
  }, [autoFocus]);
  useMemo(function () {
    return fullscreen !== state.fullscreen && dispatch({
      fullscreen: fullscreen
    });
  }, [fullscreen]);
  var textareaDomRef = useRef();
  var active = useRef();
  useMemo(function () {
    textareaDomRef.current = state.textareaWarp;

    if (state.textareaWarp) {
      state.textareaWarp.addEventListener('mouseover', function () {
        active.current = 'text';
      });
      state.textareaWarp.addEventListener('mouseleave', function () {
        active.current = 'preview';
      });
    }
  }, [state.textareaWarp]);

  var handleScroll = function handleScroll(e) {
    if (!enableScrollRef.current) return;
    var textareaDom = textareaDomRef.current;
    var previewDom = previewRef.current ? previewRef.current.mdp.current : undefined;

    if (textareaDom && previewDom) {
      var scale = (textareaDom.scrollHeight - textareaDom.offsetHeight) / (previewDom.scrollHeight - previewDom.offsetHeight);

      if (e.target === textareaDom && active.current === 'text') {
        previewDom.scrollTop = textareaDom.scrollTop / scale;
      }

      if (e.target === previewDom && active.current === 'preview') {
        textareaDom.scrollTop = previewDom.scrollTop * scale;
      }

      var scrollTop = 0;

      if (active.current === 'text') {
        scrollTop = textareaDom.scrollTop || 0;
      } else if (active.current === 'preview') {
        scrollTop = previewDom.scrollTop || 0;
      }

      dispatch({
        scrollTop: scrollTop
      });
    }
  };

  return /*#__PURE__*/React.createElement(EditorContext.Provider, {
    value: _objectSpread(_objectSpread({}, state), {}, {
      dispatch: dispatch
    })
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: container,
    className: cls,
    onClick: function onClick() {
      dispatch({
        barPopup: _objectSpread({}, setGroupPopFalse(state.barPopup))
      });
    },
    style: {
      height: state.fullscreen ? '100%' : hideToolbar ? Number(state.height) - toolbarHeight : state.height
    }
  }, other), !hideToolbar && /*#__PURE__*/React.createElement(Toolbar, {
    prefixCls: prefixCls,
    height: toolbarHeight
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(prefixCls, "-content"),
    style: {
      height: state.fullscreen ? "calc(100% - ".concat(toolbarHeight, "px)") : Number(state.height) - toolbarHeight
    }
  }, /(edit|live)/.test(state.preview || '') && /*#__PURE__*/React.createElement(TextArea, _extends({
    className: "".concat(prefixCls, "-input"),
    prefixCls: prefixCls,
    autoFocus: autoFocus
  }, textareaProps, {
    onScroll: handleScroll
  })), /(live|preview)/.test(state.preview || '') && /*#__PURE__*/React.createElement(MarkdownPreview, _extends({}, previewOptions, {
    onScroll: handleScroll,
    ref: previewRef,
    source: state.markdown || '',
    className: "".concat(prefixCls, "-preview")
  }))), visiableDragbar && !state.fullscreen && /*#__PURE__*/React.createElement(DragBar, {
    prefixCls: prefixCls,
    height: state.height,
    maxHeight: maxHeight,
    minHeight: minHeight,
    onChange: function onChange(newHeight) {
      dispatch({
        height: newHeight
      });
    }
  })));
};

var mdEditor = /*#__PURE__*/React.forwardRef(InternalMDEditor);
mdEditor.Markdown = MarkdownPreview;
export default mdEditor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FZGl0b3IudHN4Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiTWFya2Rvd25QcmV2aWV3IiwiVGV4dEFyZWEiLCJUb29sYmFyIiwiRHJhZ0JhciIsImdldENvbW1hbmRzIiwicmVkdWNlciIsIkVkaXRvckNvbnRleHQiLCJzZXRHcm91cFBvcEZhbHNlIiwiZGF0YSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5bmFtZSIsIkludGVybmFsTURFZGl0b3IiLCJwcm9wcyIsInJlZiIsInByZWZpeENscyIsImNsYXNzTmFtZSIsInByb3BzVmFsdWUiLCJ2YWx1ZSIsImNvbW1hbmRzIiwiaGVpZ2h0IiwidG9vbGJhckhlaWdodCIsImVuYWJsZVNjcm9sbCIsInZpc2lhYmxlRHJhZ2JhciIsImhpZ2hsaWdodEVuYWJsZSIsInByZXZpZXciLCJwcmV2aWV3VHlwZSIsImZ1bGxzY3JlZW4iLCJwcmV2aWV3T3B0aW9ucyIsInRleHRhcmVhUHJvcHMiLCJtYXhIZWlnaHQiLCJtaW5IZWlnaHQiLCJhdXRvRm9jdXMiLCJ0YWJTaXplIiwib25DaGFuZ2UiLCJoaWRlVG9vbGJhciIsIm90aGVyIiwibWFya2Rvd24iLCJzY3JvbGxUb3AiLCJzY3JvbGxUb3BQcmV2aWV3IiwiYmFyUG9wdXAiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29udGFpbmVyIiwicHJldmlld1JlZiIsImVuYWJsZVNjcm9sbFJlZiIsImN1cnJlbnQiLCJzdGF0ZUluaXQiLCJ1bmRlZmluZWQiLCJjbHMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInRyaW0iLCJ0ZXh0YXJlYURvbVJlZiIsImFjdGl2ZSIsInRleHRhcmVhV2FycCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJlIiwidGV4dGFyZWFEb20iLCJwcmV2aWV3RG9tIiwibWRwIiwic2NhbGUiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0YXJnZXQiLCJOdW1iZXIiLCJ0ZXN0IiwibmV3SGVpZ2h0IiwibWRFZGl0b3IiLCJmb3J3YXJkUmVmIiwiTWFya2Rvd24iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxTQUFoQixFQUEyQkMsVUFBM0IsRUFBdUNDLE9BQXZDLEVBQWdEQyxNQUFoRCxFQUF3REMsbUJBQXhELFFBQW1GLE9BQW5GO0FBQ0EsT0FBT0MsZUFBUCxNQUEwRSw2QkFBMUU7QUFFQSxPQUFPQyxRQUFQLE1BQXlDLHVCQUF6QztBQUNBLE9BQU9DLE9BQVAsTUFBb0Isc0JBQXBCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixzQkFBcEI7QUFDQSxTQUFTQyxXQUFULFFBQXNDLFlBQXRDO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsYUFBbEIsUUFBa0UsV0FBbEU7QUFDQTs7QUE0RUEsU0FBU0MsZ0JBQVQsR0FBOEQ7QUFBQSxNQUFwQ0MsSUFBb0MsdUVBQUosRUFBSTtBQUM1REMsRUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlGLElBQVosRUFBa0JHLE9BQWxCLENBQTBCLFVBQUNDLE9BQUQsRUFBYTtBQUNyQ0osSUFBQUEsSUFBSSxDQUFDSSxPQUFELENBQUosR0FBZ0IsS0FBaEI7QUFDRCxHQUZEO0FBR0EsU0FBT0osSUFBUDtBQUNEOztBQUVELElBQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDdkJDLEtBRHVCLEVBRXZCQyxHQUZ1QixFQUdwQjtBQUNILGFBcUJJRCxLQUFLLElBQUksRUFyQmI7QUFBQSw0QkFDRUUsU0FERjtBQUFBLE1BQ0VBLFNBREYsK0JBQ2MsYUFEZDtBQUFBLE1BRUVDLFNBRkYsUUFFRUEsU0FGRjtBQUFBLE1BR1NDLFVBSFQsUUFHRUMsS0FIRjtBQUFBLDJCQUlFQyxRQUpGO0FBQUEsTUFJRUEsUUFKRiw4QkFJYWhCLFdBQVcsRUFKeEI7QUFBQSx5QkFLRWlCLE1BTEY7QUFBQSxNQUtFQSxNQUxGLDRCQUtX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QSxTQUFTLEVBQUVpQjtBQUhiLEtBSU1ILGFBSk47QUFLRSxJQUFBLFFBQVEsRUFBRTZCO0FBTFosS0FQSixFQWVHLGlCQUFpQlUsSUFBakIsQ0FBc0IzQixLQUFLLENBQUNoQixPQUFOLElBQWlCLEVBQXZDLGtCQUNDLG9CQUFDLGVBQUQsZUFDT0csY0FEUDtBQUVFLElBQUEsUUFBUSxFQUFFOEIsWUFGWjtBQUdFLElBQUEsR0FBRyxFQUFFZCxVQUhQO0FBSUUsSUFBQSxNQUFNLEVBQUVILEtBQUssQ0FBQ0osUUFBTixJQUFrQixFQUo1QjtBQUtFLElBQUEsU0FBUyxZQUFLdEIsU0FBTDtBQUxYLEtBaEJKLENBWkYsRUFxQ0dRLGVBQWUsSUFBSSxDQUFDa0IsS0FBSyxDQUFDZCxVQUExQixpQkFDQyxvQkFBQyxPQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVaLFNBRGI7QUFFRSxJQUFBLE1BQU0sRUFBRTBCLEtBQUssQ0FBQ3JCLE1BRmhCO0FBR0UsSUFBQSxTQUFTLEVBQUVVLFNBSGI7QUFJRSxJQUFBLFNBQVMsRUFBRUMsU0FKYjtBQUtFLElBQUEsUUFBUSxFQUFFLGtCQUFDc0MsU0FBRCxFQUFlO0FBQ3ZCM0IsTUFBQUEsUUFBUSxDQUFDO0FBQUV0QixRQUFBQSxNQUFNLEVBQUVpRDtBQUFWLE9BQUQsQ0FBUjtBQUNEO0FBUEgsSUF0Q0osQ0FERixDQURGO0FBcURELENBdktEOztBQXlLQSxJQUFNQyxRQUFRLGdCQUFHN0UsS0FBSyxDQUFDOEUsVUFBTixDQUE4QzNELGdCQUE5QyxDQUFqQjtBQU1DMEQsUUFBRCxDQUF1QkUsUUFBdkIsR0FBa0N6RSxlQUFsQztBQUVBLGVBQWV1RSxRQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlTWVtbywgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWFya2Rvd25QcmV2aWV3LCB7IE1hcmtkb3duUHJldmlld1Byb3BzLCBNYXJrZG93blByZXZpZXdSZWYgfSBmcm9tICdAdWl3L3JlYWN0LW1hcmtkb3duLXByZXZpZXcnO1xyXG5pbXBvcnQgeyBJUHJvcHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IFRleHRBcmVhLCB7IElUZXh0QXJlYVByb3BzIH0gZnJvbSAnLi9jb21wb25lbnRzL1RleHRBcmVhJztcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi9jb21wb25lbnRzL1Rvb2xiYXInO1xyXG5pbXBvcnQgRHJhZ0JhciBmcm9tICcuL2NvbXBvbmVudHMvRHJhZ0Jhcic7XHJcbmltcG9ydCB7IGdldENvbW1hbmRzLCBJQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZHMnO1xyXG5pbXBvcnQgeyByZWR1Y2VyLCBFZGl0b3JDb250ZXh0LCBDb250ZXh0U3RvcmUsIFByZXZpZXdUeXBlIH0gZnJvbSAnLi9Db250ZXh0JztcclxuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNREVkaXRvclByb3BzIGV4dGVuZHMgT21pdDxSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4sICdvbkNoYW5nZSc+LCBJUHJvcHMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBNYXJrZG93biB2YWx1ZS5cclxuICAgKi9cclxuICB2YWx1ZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBFdmVudCBoYW5kbGVyIGZvciB0aGUgYG9uQ2hhbmdlYCBldmVudC5cclxuICAgKi9cclxuICBvbkNoYW5nZT86ICh2YWx1ZT86IHN0cmluZykgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBDYW4gYmUgdXNlZCB0byBtYWtlIGBNYXJrZG93biBFZGl0b3JgIGZvY3VzIGl0c2VsZiBvbiBpbml0aWFsaXphdGlvbi4gRGVmYXVsdHMgdG8gb24uXHJcbiAgICogaXQgd2lsbCBiZSBzZXQgdG8gdHJ1ZSB3aGVuIGVpdGhlciB0aGUgc291cmNlIGB0ZXh0YXJlYWAgaXMgZm9jdXNlZCxcclxuICAgKiBvciBpdCBoYXMgYW4gYGF1dG9mb2N1c2AgYXR0cmlidXRlIGFuZCBubyBvdGhlciBlbGVtZW50IGlzIGZvY3VzZWQuXHJcbiAgICovXHJcbiAgYXV0b0ZvY3VzPzogSVRleHRBcmVhUHJvcHNbJ2F1dG9Gb2N1cyddO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGVkaXRvci5cclxuICAgKi9cclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogQ3VzdG9tIHRvb2xiYXIgaGVpZ3RoXHJcbiAgICogQGRlZmF1bHQgMjlweFxyXG4gICAqL1xyXG4gIHRvb2xiYXJIZWlnaHQ/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogU2hvdyBkcmFnIGFuZCBkcm9wIHRvb2wuIFNldCB0aGUgaGVpZ2h0IG9mIHRoZSBlZGl0b3IuXHJcbiAgICovXHJcbiAgdmlzaWFibGVEcmFnYmFyPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTaG93IG1hcmtkb3duIHByZXZpZXcuXHJcbiAgICovXHJcbiAgcHJldmlldz86IFByZXZpZXdUeXBlO1xyXG4gIC8qKlxyXG4gICAqIEZ1bGwgc2NyZWVuIGRpc3BsYXkgZWRpdG9yLlxyXG4gICAqL1xyXG4gIGZ1bGxzY3JlZW4/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1heGltdW0gZHJhZyBoZWlnaHQuIGB2aXNpYWJsZURyYWdiYXI9dHJ1ZWBcclxuICAgKi9cclxuICBtYXhIZWlnaHQ/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogTWluaW11bSBkcmFnIGhlaWdodC4gYHZpc2lhYmxlRHJhZ2Jhcj10cnVlYFxyXG4gICAqL1xyXG4gIG1pbkhlaWdodD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIHJlc2V0IFtyZWFjdC1tYXJrZG93bl0oaHR0cHM6Ly9naXRodWIuY29tL3JleHhhcnMvcmVhY3QtbWFya2Rvd24pIHNldHRpbmdzLlxyXG4gICAqL1xyXG4gIHByZXZpZXdPcHRpb25zPzogT21pdDxNYXJrZG93blByZXZpZXdQcm9wcywgJ3NvdXJjZSc+O1xyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgYHRleHRhcmVhYCByZWxhdGVkIHByb3BzLlxyXG4gICAqL1xyXG4gIHRleHRhcmVhUHJvcHM/OiBJVGV4dEFyZWFQcm9wcztcclxuICAvKipcclxuICAgKiBEaXNhYmxlIGVkaXRpbmcgYXJlYSBjb2RlIGhpZ2hsaWdodGluZy4gVGhlIHZhbHVlIGlzIGBmYWxzZWAsIHdoaWNoIGluY3JlYXNlcyB0aGUgZWRpdGluZyBzcGVlZC5cclxuICAgKiBAZGVmYXVsdCB0cnVlXHJcbiAgICovXHJcbiAgaGlnaGxpZ2h0RW5hYmxlPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gaW5zZXJ0IHdoZW4gcHJlc3NpbmcgdGFiIGtleS5cclxuICAgKiBEZWZhdWx0IGAyYCBzcGFjZXMuXHJcbiAgICovXHJcbiAgdGFiU2l6ZT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBZb3UgY2FuIGNyZWF0ZSB5b3VyIG93biBjb21tYW5kcyBvciByZXVzZSBleGlzdGluZyBjb21tYW5kcy5cclxuICAgKi9cclxuICBjb21tYW5kcz86IElDb21tYW5kW107XHJcbiAgLyoqXHJcbiAgICogSGlkZSB0aGUgdG9vbCBiYXJcclxuICAgKi9cclxuICBoaWRlVG9vbGJhcj86IGJvb2xlYW47XHJcbiAgLyoqIFdoZXRoZXIgdG8gZW5hYmxlIHNjcm9sbGluZyAqL1xyXG4gIGVuYWJsZVNjcm9sbD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEdyb3VwUG9wRmFsc2UoZGF0YTogUmVjb3JkPHN0cmluZywgYm9vbGVhbj4gPSB7fSkge1xyXG4gIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goKGtleW5hbWUpID0+IHtcclxuICAgIGRhdGFba2V5bmFtZV0gPSBmYWxzZTtcclxuICB9KTtcclxuICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuY29uc3QgSW50ZXJuYWxNREVkaXRvciA9IChcclxuICBwcm9wczogTURFZGl0b3JQcm9wcyxcclxuICByZWY/OiAoKGluc3RhbmNlOiBDb250ZXh0U3RvcmUpID0+IHZvaWQpIHwgUmVhY3QuUmVmT2JqZWN0PENvbnRleHRTdG9yZT4gfCBudWxsLFxyXG4pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBwcmVmaXhDbHMgPSAndy1tZC1lZGl0b3InLFxyXG4gICAgY2xhc3NOYW1lLFxyXG4gICAgdmFsdWU6IHByb3BzVmFsdWUsXHJcbiAgICBjb21tYW5kcyA9IGdldENvbW1hbmRzKCksXHJcbiAgICBoZWlnaHQgPSAyMDAsXHJcbiAgICB0b29sYmFySGVpZ2h0ID0gMjksXHJcbiAgICBlbmFibGVTY3JvbGwgPSB0cnVlLFxyXG4gICAgdmlzaWFibGVEcmFnYmFyID0gdHJ1ZSxcclxuICAgIGhpZ2hsaWdodEVuYWJsZSA9IHRydWUsXHJcbiAgICBwcmV2aWV3OiBwcmV2aWV3VHlwZSA9ICdsaXZlJyxcclxuICAgIGZ1bGxzY3JlZW4gPSBmYWxzZSxcclxuICAgIHByZXZpZXdPcHRpb25zID0ge30sXHJcbiAgICB0ZXh0YXJlYVByb3BzLFxyXG4gICAgbWF4SGVpZ2h0ID0gMTIwMCxcclxuICAgIG1pbkhlaWdodCA9IDEwMCxcclxuICAgIGF1dG9Gb2N1cyxcclxuICAgIHRhYlNpemUgPSAyLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBoaWRlVG9vbGJhcixcclxuICAgIC4uLm90aGVyXHJcbiAgfSA9IHByb3BzIHx8IHt9O1xyXG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xyXG4gICAgbWFya2Rvd246IHByb3BzVmFsdWUsXHJcbiAgICBwcmV2aWV3OiBwcmV2aWV3VHlwZSxcclxuICAgIGhlaWdodCxcclxuICAgIGhpZ2hsaWdodEVuYWJsZSxcclxuICAgIHRhYlNpemUsXHJcbiAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICBzY3JvbGxUb3BQcmV2aWV3OiAwLFxyXG4gICAgY29tbWFuZHMsXHJcbiAgICBmdWxsc2NyZWVuLFxyXG4gICAgb25DaGFuZ2UsXHJcbiAgICBiYXJQb3B1cDoge30sXHJcbiAgfSk7XHJcbiAgY29uc3QgY29udGFpbmVyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBwcmV2aWV3UmVmID0gdXNlUmVmPE1hcmtkb3duUHJldmlld1JlZj4obnVsbCk7XHJcbiAgY29uc3QgZW5hYmxlU2Nyb2xsUmVmID0gdXNlUmVmKGVuYWJsZVNjcm9sbCk7XHJcblxyXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiAoeyAuLi5zdGF0ZSB9KSk7XHJcbiAgdXNlTWVtbygoKSA9PiAoZW5hYmxlU2Nyb2xsUmVmLmN1cnJlbnQgPSBlbmFibGVTY3JvbGwpLCBbZW5hYmxlU2Nyb2xsXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0YXRlSW5pdDogQ29udGV4dFN0b3JlID0ge307XHJcbiAgICBpZiAoY29udGFpbmVyLmN1cnJlbnQpIHtcclxuICAgICAgc3RhdGVJbml0LmNvbnRhaW5lciA9IGNvbnRhaW5lci5jdXJyZW50IHx8IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHN0YXRlSW5pdC5tYXJrZG93biA9IHByb3BzVmFsdWUgfHwgJyc7XHJcbiAgICBzdGF0ZUluaXQuYmFyUG9wdXAgPSB7fTtcclxuICAgIGlmIChkaXNwYXRjaCkge1xyXG4gICAgICBkaXNwYXRjaCh7IC4uLnN0YXRlLCAuLi5zdGF0ZUluaXQgfSk7XHJcbiAgICB9XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBjbHMgPSBbXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICBwcmVmaXhDbHMsXHJcbiAgICBzdGF0ZS5wcmV2aWV3ID8gYCR7cHJlZml4Q2xzfS1zaG93LSR7c3RhdGUucHJldmlld31gIDogbnVsbCxcclxuICAgIHN0YXRlLmZ1bGxzY3JlZW4gPyBgJHtwcmVmaXhDbHN9LWZ1bGxzY3JlZW5gIDogbnVsbCxcclxuICBdXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pXHJcbiAgICAuam9pbignICcpXHJcbiAgICAudHJpbSgpO1xyXG5cclxuICB1c2VNZW1vKCgpID0+IHByb3BzVmFsdWUgIT09IHN0YXRlLm1hcmtkb3duICYmIGRpc3BhdGNoKHsgbWFya2Rvd246IHByb3BzVmFsdWUgfSksIFtwcm9wc1ZhbHVlXSk7XHJcbiAgdXNlTWVtbygoKSA9PiBwcmV2aWV3VHlwZSAhPT0gc3RhdGUucHJldmlldyAmJiBkaXNwYXRjaCh7IHByZXZpZXc6IHByZXZpZXdUeXBlIH0pLCBbcHJldmlld1R5cGVdKTtcclxuICB1c2VNZW1vKCgpID0+IGhlaWdodCAhPT0gc3RhdGUuaGVpZ2h0ICYmIGRpc3BhdGNoKHsgaGVpZ2h0OiBoZWlnaHQgfSksIFtoZWlnaHRdKTtcclxuICB1c2VNZW1vKCgpID0+IHRhYlNpemUgIT09IHN0YXRlLnRhYlNpemUgJiYgZGlzcGF0Y2goeyB0YWJTaXplIH0pLCBbdGFiU2l6ZV0pO1xyXG4gIHVzZU1lbW8oKCkgPT4gaGlnaGxpZ2h0RW5hYmxlICE9PSBzdGF0ZS5oaWdobGlnaHRFbmFibGUgJiYgZGlzcGF0Y2goeyBoaWdobGlnaHRFbmFibGUgfSksIFtoaWdobGlnaHRFbmFibGVdKTtcclxuICB1c2VNZW1vKCgpID0+IGF1dG9Gb2N1cyAhPT0gc3RhdGUuYXV0b0ZvY3VzICYmIGRpc3BhdGNoKHsgYXV0b0ZvY3VzOiBhdXRvRm9jdXMgfSksIFthdXRvRm9jdXNdKTtcclxuICB1c2VNZW1vKCgpID0+IGZ1bGxzY3JlZW4gIT09IHN0YXRlLmZ1bGxzY3JlZW4gJiYgZGlzcGF0Y2goeyBmdWxsc2NyZWVuOiBmdWxsc2NyZWVuIH0pLCBbZnVsbHNjcmVlbl0pO1xyXG5cclxuICBjb25zdCB0ZXh0YXJlYURvbVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBjb25zdCBhY3RpdmUgPSB1c2VSZWY8J3RleHQnIHwgJ3ByZXZpZXcnPigpO1xyXG5cclxuICB1c2VNZW1vKCgpID0+IHtcclxuICAgIHRleHRhcmVhRG9tUmVmLmN1cnJlbnQgPSBzdGF0ZS50ZXh0YXJlYVdhcnA7XHJcbiAgICBpZiAoc3RhdGUudGV4dGFyZWFXYXJwKSB7XHJcbiAgICAgIHN0YXRlLnRleHRhcmVhV2FycC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgYWN0aXZlLmN1cnJlbnQgPSAndGV4dCc7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS50ZXh0YXJlYVdhcnAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcclxuICAgICAgICBhY3RpdmUuY3VycmVudCA9ICdwcmV2aWV3JztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3N0YXRlLnRleHRhcmVhV2FycF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZTogUmVhY3QuVUlFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGlmICghZW5hYmxlU2Nyb2xsUmVmLmN1cnJlbnQpIHJldHVybjtcclxuICAgIGNvbnN0IHRleHRhcmVhRG9tID0gdGV4dGFyZWFEb21SZWYuY3VycmVudDtcclxuICAgIGNvbnN0IHByZXZpZXdEb20gPSBwcmV2aWV3UmVmLmN1cnJlbnQgPyBwcmV2aWV3UmVmLmN1cnJlbnQubWRwLmN1cnJlbnQgOiB1bmRlZmluZWQ7XHJcbiAgICBpZiAodGV4dGFyZWFEb20gJiYgcHJldmlld0RvbSkge1xyXG4gICAgICBjb25zdCBzY2FsZSA9XHJcbiAgICAgICAgKHRleHRhcmVhRG9tLnNjcm9sbEhlaWdodCAtIHRleHRhcmVhRG9tLm9mZnNldEhlaWdodCkgLyAocHJldmlld0RvbS5zY3JvbGxIZWlnaHQgLSBwcmV2aWV3RG9tLm9mZnNldEhlaWdodCk7XHJcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gdGV4dGFyZWFEb20gJiYgYWN0aXZlLmN1cnJlbnQgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgIHByZXZpZXdEb20uc2Nyb2xsVG9wID0gdGV4dGFyZWFEb20uc2Nyb2xsVG9wIC8gc2NhbGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBwcmV2aWV3RG9tICYmIGFjdGl2ZS5jdXJyZW50ID09PSAncHJldmlldycpIHtcclxuICAgICAgICB0ZXh0YXJlYURvbS5zY3JvbGxUb3AgPSBwcmV2aWV3RG9tLnNjcm9sbFRvcCAqIHNjYWxlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzY3JvbGxUb3AgPSAwO1xyXG4gICAgICBpZiAoYWN0aXZlLmN1cnJlbnQgPT09ICd0ZXh0Jykge1xyXG4gICAgICAgIHNjcm9sbFRvcCA9IHRleHRhcmVhRG9tLnNjcm9sbFRvcCB8fCAwO1xyXG4gICAgICB9IGVsc2UgaWYgKGFjdGl2ZS5jdXJyZW50ID09PSAncHJldmlldycpIHtcclxuICAgICAgICBzY3JvbGxUb3AgPSBwcmV2aWV3RG9tLnNjcm9sbFRvcCB8fCAwO1xyXG4gICAgICB9XHJcbiAgICAgIGRpc3BhdGNoKHsgc2Nyb2xsVG9wIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RWRpdG9yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyAuLi5zdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2NvbnRhaW5lcn1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc31cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IGJhclBvcHVwOiB7IC4uLnNldEdyb3VwUG9wRmFsc2Uoc3RhdGUuYmFyUG9wdXApIH0gfSk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgaGVpZ2h0OiBzdGF0ZS5mdWxsc2NyZWVuID8gJzEwMCUnIDogaGlkZVRvb2xiYXIgPyBOdW1iZXIoc3RhdGUuaGVpZ2h0KSAtIHRvb2xiYXJIZWlnaHQgOiBzdGF0ZS5oZWlnaHQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ub3RoZXJ9XHJcbiAgICAgID5cclxuICAgICAgICB7IWhpZGVUb29sYmFyICYmIDxUb29sYmFyIHByZWZpeENscz17cHJlZml4Q2xzfSBoZWlnaHQ9e3Rvb2xiYXJIZWlnaHR9IC8+fVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1jb250ZW50YH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogc3RhdGUuZnVsbHNjcmVlbiA/IGBjYWxjKDEwMCUgLSAke3Rvb2xiYXJIZWlnaHR9cHgpYCA6IE51bWJlcihzdGF0ZS5oZWlnaHQpIC0gdG9vbGJhckhlaWdodCxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8oZWRpdHxsaXZlKS8udGVzdChzdGF0ZS5wcmV2aWV3IHx8ICcnKSAmJiAoXHJcbiAgICAgICAgICAgIDxUZXh0QXJlYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pbnB1dGB9XHJcbiAgICAgICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XHJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzPXthdXRvRm9jdXN9XHJcbiAgICAgICAgICAgICAgey4uLnRleHRhcmVhUHJvcHN9XHJcbiAgICAgICAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7LyhsaXZlfHByZXZpZXcpLy50ZXN0KHN0YXRlLnByZXZpZXcgfHwgJycpICYmIChcclxuICAgICAgICAgICAgPE1hcmtkb3duUHJldmlld1xyXG4gICAgICAgICAgICAgIHsuLi4ocHJldmlld09wdGlvbnMgYXMgdW5rbm93bil9XHJcbiAgICAgICAgICAgICAgb25TY3JvbGw9e2hhbmRsZVNjcm9sbH1cclxuICAgICAgICAgICAgICByZWY9e3ByZXZpZXdSZWZ9XHJcbiAgICAgICAgICAgICAgc291cmNlPXtzdGF0ZS5tYXJrZG93biB8fCAnJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tcHJldmlld2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHt2aXNpYWJsZURyYWdiYXIgJiYgIXN0YXRlLmZ1bGxzY3JlZW4gJiYgKFxyXG4gICAgICAgICAgPERyYWdCYXJcclxuICAgICAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XHJcbiAgICAgICAgICAgIGhlaWdodD17c3RhdGUuaGVpZ2h0IGFzIG51bWJlcn1cclxuICAgICAgICAgICAgbWF4SGVpZ2h0PXttYXhIZWlnaHQhfVxyXG4gICAgICAgICAgICBtaW5IZWlnaHQ9e21pbkhlaWdodCF9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsobmV3SGVpZ2h0KSA9PiB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2goeyBoZWlnaHQ6IG5ld0hlaWdodCB9KTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0VkaXRvckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1kRWRpdG9yID0gUmVhY3QuZm9yd2FyZFJlZjxDb250ZXh0U3RvcmUsIE1ERWRpdG9yUHJvcHM+KEludGVybmFsTURFZGl0b3IpO1xyXG5cclxudHlwZSBNREVkaXRvciA9IHR5cGVvZiBtZEVkaXRvciAmIHtcclxuICBNYXJrZG93bjogdHlwZW9mIE1hcmtkb3duUHJldmlldztcclxufTtcclxuXHJcbihtZEVkaXRvciBhcyBNREVkaXRvcikuTWFya2Rvd24gPSBNYXJrZG93blByZXZpZXc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZEVkaXRvciBhcyBNREVkaXRvcjtcclxuIl19