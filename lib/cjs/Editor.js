"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactMarkdownPreview = _interopRequireDefault(require("@uiw/react-markdown-preview"));

var _TextArea = _interopRequireDefault(require("./components/TextArea"));

var _Toolbar = _interopRequireDefault(require("./components/Toolbar"));

var _DragBar = _interopRequireDefault(require("./components/DragBar"));

var _commands = require("./commands");

var _Context = require("./Context");

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
      commands = _ref$commands === void 0 ? (0, _commands.getCommands)() : _ref$commands,
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
      other = (0, _objectWithoutProperties2.default)(_ref, ["prefixCls", "className", "value", "commands", "height", "toolbarHeight", "enableScroll", "visiableDragbar", "highlightEnable", "preview", "fullscreen", "previewOptions", "textareaProps", "maxHeight", "minHeight", "autoFocus", "tabSize", "onChange", "hideToolbar"]);

  var _useReducer = (0, _react.useReducer)(_Context.reducer, {
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
      _useReducer2 = (0, _slicedToArray2.default)(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var container = (0, _react.useRef)(null);
  var previewRef = (0, _react.useRef)(null);
  var enableScrollRef = (0, _react.useRef)(enableScroll);
  (0, _react.useImperativeHandle)(ref, function () {
    return (0, _objectSpread2.default)({}, state);
  });
  (0, _react.useMemo)(function () {
    return enableScrollRef.current = enableScroll;
  }, [enableScroll]);
  (0, _react.useEffect)(function () {
    var stateInit = {};

    if (container.current) {
      stateInit.container = container.current || undefined;
    }

    stateInit.markdown = propsValue || '';
    stateInit.barPopup = {};

    if (dispatch) {
      dispatch((0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), stateInit));
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  var cls = [className, prefixCls, state.preview ? "".concat(prefixCls, "-show-").concat(state.preview) : null, state.fullscreen ? "".concat(prefixCls, "-fullscreen") : null].filter(Boolean).join(' ').trim();
  (0, _react.useMemo)(function () {
    return propsValue !== state.markdown && dispatch({
      markdown: propsValue
    });
  }, [propsValue]);
  (0, _react.useMemo)(function () {
    return previewType !== state.preview && dispatch({
      preview: previewType
    });
  }, [previewType]);
  (0, _react.useMemo)(function () {
    return height !== state.height && dispatch({
      height: height
    });
  }, [height]);
  (0, _react.useMemo)(function () {
    return tabSize !== state.tabSize && dispatch({
      tabSize: tabSize
    });
  }, [tabSize]);
  (0, _react.useMemo)(function () {
    return highlightEnable !== state.highlightEnable && dispatch({
      highlightEnable: highlightEnable
    });
  }, [highlightEnable]);
  (0, _react.useMemo)(function () {
    return autoFocus !== state.autoFocus && dispatch({
      autoFocus: autoFocus
    });
  }, [autoFocus]);
  (0, _react.useMemo)(function () {
    return fullscreen !== state.fullscreen && dispatch({
      fullscreen: fullscreen
    });
  }, [fullscreen]);
  var textareaDomRef = (0, _react.useRef)();
  var active = (0, _react.useRef)();
  (0, _react.useMemo)(function () {
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

  return /*#__PURE__*/_react.default.createElement(_Context.EditorContext.Provider, {
    value: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, state), {}, {
      dispatch: dispatch
    })
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: container,
    className: cls,
    onClick: function onClick() {
      dispatch({
        barPopup: (0, _objectSpread2.default)({}, setGroupPopFalse(state.barPopup))
      });
    },
    style: {
      height: state.fullscreen ? '100%' : hideToolbar ? Number(state.height) - toolbarHeight : state.height
    }
  }, other), !hideToolbar && /*#__PURE__*/_react.default.createElement(_Toolbar.default, {
    prefixCls: prefixCls,
    height: toolbarHeight
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(prefixCls, "-content"),
    style: {
      height: state.fullscreen ? "calc(100% - ".concat(toolbarHeight, "px)") : Number(state.height) - toolbarHeight
    }
  }, /(edit|live)/.test(state.preview || '') && /*#__PURE__*/_react.default.createElement(_TextArea.default, (0, _extends2.default)({
    className: "".concat(prefixCls, "-input"),
    prefixCls: prefixCls,
    autoFocus: autoFocus
  }, textareaProps, {
    onScroll: handleScroll
  })), /(live|preview)/.test(state.preview || '') && /*#__PURE__*/_react.default.createElement(_reactMarkdownPreview.default, (0, _extends2.default)({}, previewOptions, {
    onScroll: handleScroll,
    ref: previewRef,
    source: state.markdown || '',
    className: "".concat(prefixCls, "-preview")
  }))), visiableDragbar && !state.fullscreen && /*#__PURE__*/_react.default.createElement(_DragBar.default, {
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

var mdEditor = /*#__PURE__*/_react.default.forwardRef(InternalMDEditor);

mdEditor.Markdown = _reactMarkdownPreview.default;
var _default = mdEditor;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FZGl0b3IudHN4Il0sIm5hbWVzIjpbInNldEdyb3VwUG9wRmFsc2UiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXluYW1lIiwiSW50ZXJuYWxNREVkaXRvciIsInByb3BzIiwicmVmIiwicHJlZml4Q2xzIiwiY2xhc3NOYW1lIiwicHJvcHNWYWx1ZSIsInZhbHVlIiwiY29tbWFuZHMiLCJoZWlnaHQiLCJ0b29sYmFySGVpZ2h0IiwiZW5hYmxlU2Nyb2xsIiwidmlzaWFibGVEcmFnYmFyIiwiaGlnaGxpZ2h0RW5hYmxlIiwicHJldmlldyIsInByZXZpZXdUeXBlIiwiZnVsbHNjcmVlbiIsInByZXZpZXdPcHRpb25zIiwidGV4dGFyZWFQcm9wcyIsIm1heEhlaWdodCIsIm1pbkhlaWdodCIsImF1dG9Gb2N1cyIsInRhYlNpemUiLCJvbkNoYW5nZSIsImhpZGVUb29sYmFyIiwib3RoZXIiLCJyZWR1Y2VyIiwibWFya2Rvd24iLCJzY3JvbGxUb3AiLCJzY3JvbGxUb3BQcmV2aWV3IiwiYmFyUG9wdXAiLCJzdGF0ZSIsImRpc3BhdGNoIiwiY29udGFpbmVyIiwicHJldmlld1JlZiIsImVuYWJsZVNjcm9sbFJlZiIsImN1cnJlbnQiLCJzdGF0ZUluaXQiLCJ1bmRlZmluZWQiLCJjbHMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsInRyaW0iLCJ0ZXh0YXJlYURvbVJlZiIsImFjdGl2ZSIsInRleHRhcmVhV2FycCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJlIiwidGV4dGFyZWFEb20iLCJwcmV2aWV3RG9tIiwibWRwIiwic2NhbGUiLCJzY3JvbGxIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJ0YXJnZXQiLCJOdW1iZXIiLCJ0ZXN0IiwibmV3SGVpZ2h0IiwibWRFZGl0b3IiLCJSZWFjdCIsImZvcndhcmRSZWYiLCJNYXJrZG93biIsIk1hcmtkb3duUHJldmlldyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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QURGLENBREY7QUFxREQsQ0F2S0Q7O0FBeUtBLElBQU1DLFFBQVEsZ0JBQUdDLGVBQU1DLFVBQU4sQ0FBOEM3RCxnQkFBOUMsQ0FBakI7O0FBTUMyRCxRQUFELENBQXVCRyxRQUF2QixHQUFrQ0MsNkJBQWxDO2VBRWVKLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VNZW1vLCB1c2VSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNYXJrZG93blByZXZpZXcsIHsgTWFya2Rvd25QcmV2aWV3UHJvcHMsIE1hcmtkb3duUHJldmlld1JlZiB9IGZyb20gJ0B1aXcvcmVhY3QtbWFya2Rvd24tcHJldmlldyc7XHJcbmltcG9ydCB7IElQcm9wcyB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgVGV4dEFyZWEsIHsgSVRleHRBcmVhUHJvcHMgfSBmcm9tICcuL2NvbXBvbmVudHMvVGV4dEFyZWEnO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL2NvbXBvbmVudHMvVG9vbGJhcic7XHJcbmltcG9ydCBEcmFnQmFyIGZyb20gJy4vY29tcG9uZW50cy9EcmFnQmFyJztcclxuaW1wb3J0IHsgZ2V0Q29tbWFuZHMsIElDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kcyc7XHJcbmltcG9ydCB7IHJlZHVjZXIsIEVkaXRvckNvbnRleHQsIENvbnRleHRTdG9yZSwgUHJldmlld1R5cGUgfSBmcm9tICcuL0NvbnRleHQnO1xyXG5pbXBvcnQgJy4vaW5kZXgubGVzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ERWRpdG9yUHJvcHMgZXh0ZW5kcyBPbWl0PFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiwgJ29uQ2hhbmdlJz4sIElQcm9wcyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIE1hcmtkb3duIHZhbHVlLlxyXG4gICAqL1xyXG4gIHZhbHVlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEV2ZW50IGhhbmRsZXIgZm9yIHRoZSBgb25DaGFuZ2VgIGV2ZW50LlxyXG4gICAqL1xyXG4gIG9uQ2hhbmdlPzogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIENhbiBiZSB1c2VkIHRvIG1ha2UgYE1hcmtkb3duIEVkaXRvcmAgZm9jdXMgaXRzZWxmIG9uIGluaXRpYWxpemF0aW9uLiBEZWZhdWx0cyB0byBvbi5cclxuICAgKiBpdCB3aWxsIGJlIHNldCB0byB0cnVlIHdoZW4gZWl0aGVyIHRoZSBzb3VyY2UgYHRleHRhcmVhYCBpcyBmb2N1c2VkLFxyXG4gICAqIG9yIGl0IGhhcyBhbiBgYXV0b2ZvY3VzYCBhdHRyaWJ1dGUgYW5kIG5vIG90aGVyIGVsZW1lbnQgaXMgZm9jdXNlZC5cclxuICAgKi9cclxuICBhdXRvRm9jdXM/OiBJVGV4dEFyZWFQcm9wc1snYXV0b0ZvY3VzJ107XHJcbiAgLyoqXHJcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgZWRpdG9yLlxyXG4gICAqL1xyXG4gIGhlaWdodD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBDdXN0b20gdG9vbGJhciBoZWlndGhcclxuICAgKiBAZGVmYXVsdCAyOXB4XHJcbiAgICovXHJcbiAgdG9vbGJhckhlaWdodD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBTaG93IGRyYWcgYW5kIGRyb3AgdG9vbC4gU2V0IHRoZSBoZWlnaHQgb2YgdGhlIGVkaXRvci5cclxuICAgKi9cclxuICB2aXNpYWJsZURyYWdiYXI/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFNob3cgbWFya2Rvd24gcHJldmlldy5cclxuICAgKi9cclxuICBwcmV2aWV3PzogUHJldmlld1R5cGU7XHJcbiAgLyoqXHJcbiAgICogRnVsbCBzY3JlZW4gZGlzcGxheSBlZGl0b3IuXHJcbiAgICovXHJcbiAgZnVsbHNjcmVlbj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBkcmFnIGhlaWdodC4gYHZpc2lhYmxlRHJhZ2Jhcj10cnVlYFxyXG4gICAqL1xyXG4gIG1heEhlaWdodD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBNaW5pbXVtIGRyYWcgaGVpZ2h0LiBgdmlzaWFibGVEcmFnYmFyPXRydWVgXHJcbiAgICovXHJcbiAgbWluSGVpZ2h0PzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgaXMgcmVzZXQgW3JlYWN0LW1hcmtkb3duXShodHRwczovL2dpdGh1Yi5jb20vcmV4eGFycy9yZWFjdC1tYXJrZG93bikgc2V0dGluZ3MuXHJcbiAgICovXHJcbiAgcHJldmlld09wdGlvbnM/OiBPbWl0PE1hcmtkb3duUHJldmlld1Byb3BzLCAnc291cmNlJz47XHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBgdGV4dGFyZWFgIHJlbGF0ZWQgcHJvcHMuXHJcbiAgICovXHJcbiAgdGV4dGFyZWFQcm9wcz86IElUZXh0QXJlYVByb3BzO1xyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgZWRpdGluZyBhcmVhIGNvZGUgaGlnaGxpZ2h0aW5nLiBUaGUgdmFsdWUgaXMgYGZhbHNlYCwgd2hpY2ggaW5jcmVhc2VzIHRoZSBlZGl0aW5nIHNwZWVkLlxyXG4gICAqIEBkZWZhdWx0IHRydWVcclxuICAgKi9cclxuICBoaWdobGlnaHRFbmFibGU/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byBpbnNlcnQgd2hlbiBwcmVzc2luZyB0YWIga2V5LlxyXG4gICAqIERlZmF1bHQgYDJgIHNwYWNlcy5cclxuICAgKi9cclxuICB0YWJTaXplPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gY3JlYXRlIHlvdXIgb3duIGNvbW1hbmRzIG9yIHJldXNlIGV4aXN0aW5nIGNvbW1hbmRzLlxyXG4gICAqL1xyXG4gIGNvbW1hbmRzPzogSUNvbW1hbmRbXTtcclxuICAvKipcclxuICAgKiBIaWRlIHRoZSB0b29sIGJhclxyXG4gICAqL1xyXG4gIGhpZGVUb29sYmFyPzogYm9vbGVhbjtcclxuICAvKiogV2hldGhlciB0byBlbmFibGUgc2Nyb2xsaW5nICovXHJcbiAgZW5hYmxlU2Nyb2xsPzogYm9vbGVhbjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0R3JvdXBQb3BGYWxzZShkYXRhOiBSZWNvcmQ8c3RyaW5nLCBib29sZWFuPiA9IHt9KSB7XHJcbiAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoa2V5bmFtZSkgPT4ge1xyXG4gICAgZGF0YVtrZXluYW1lXSA9IGZhbHNlO1xyXG4gIH0pO1xyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5jb25zdCBJbnRlcm5hbE1ERWRpdG9yID0gKFxyXG4gIHByb3BzOiBNREVkaXRvclByb3BzLFxyXG4gIHJlZj86ICgoaW5zdGFuY2U6IENvbnRleHRTdG9yZSkgPT4gdm9pZCkgfCBSZWFjdC5SZWZPYmplY3Q8Q29udGV4dFN0b3JlPiB8IG51bGwsXHJcbikgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHByZWZpeENscyA9ICd3LW1kLWVkaXRvcicsXHJcbiAgICBjbGFzc05hbWUsXHJcbiAgICB2YWx1ZTogcHJvcHNWYWx1ZSxcclxuICAgIGNvbW1hbmRzID0gZ2V0Q29tbWFuZHMoKSxcclxuICAgIGhlaWdodCA9IDIwMCxcclxuICAgIHRvb2xiYXJIZWlnaHQgPSAyOSxcclxuICAgIGVuYWJsZVNjcm9sbCA9IHRydWUsXHJcbiAgICB2aXNpYWJsZURyYWdiYXIgPSB0cnVlLFxyXG4gICAgaGlnaGxpZ2h0RW5hYmxlID0gdHJ1ZSxcclxuICAgIHByZXZpZXc6IHByZXZpZXdUeXBlID0gJ2xpdmUnLFxyXG4gICAgZnVsbHNjcmVlbiA9IGZhbHNlLFxyXG4gICAgcHJldmlld09wdGlvbnMgPSB7fSxcclxuICAgIHRleHRhcmVhUHJvcHMsXHJcbiAgICBtYXhIZWlnaHQgPSAxMjAwLFxyXG4gICAgbWluSGVpZ2h0ID0gMTAwLFxyXG4gICAgYXV0b0ZvY3VzLFxyXG4gICAgdGFiU2l6ZSA9IDIsXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGhpZGVUb29sYmFyLFxyXG4gICAgLi4ub3RoZXJcclxuICB9ID0gcHJvcHMgfHwge307XHJcbiAgbGV0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XHJcbiAgICBtYXJrZG93bjogcHJvcHNWYWx1ZSxcclxuICAgIHByZXZpZXc6IHByZXZpZXdUeXBlLFxyXG4gICAgaGVpZ2h0LFxyXG4gICAgaGlnaGxpZ2h0RW5hYmxlLFxyXG4gICAgdGFiU2l6ZSxcclxuICAgIHNjcm9sbFRvcDogMCxcclxuICAgIHNjcm9sbFRvcFByZXZpZXc6IDAsXHJcbiAgICBjb21tYW5kcyxcclxuICAgIGZ1bGxzY3JlZW4sXHJcbiAgICBvbkNoYW5nZSxcclxuICAgIGJhclBvcHVwOiB7fSxcclxuICB9KTtcclxuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHByZXZpZXdSZWYgPSB1c2VSZWY8TWFya2Rvd25QcmV2aWV3UmVmPihudWxsKTtcclxuICBjb25zdCBlbmFibGVTY3JvbGxSZWYgPSB1c2VSZWYoZW5hYmxlU2Nyb2xsKTtcclxuXHJcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsICgpID0+ICh7IC4uLnN0YXRlIH0pKTtcclxuICB1c2VNZW1vKCgpID0+IChlbmFibGVTY3JvbGxSZWYuY3VycmVudCA9IGVuYWJsZVNjcm9sbCksIFtlbmFibGVTY3JvbGxdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RhdGVJbml0OiBDb250ZXh0U3RvcmUgPSB7fTtcclxuICAgIGlmIChjb250YWluZXIuY3VycmVudCkge1xyXG4gICAgICBzdGF0ZUluaXQuY29udGFpbmVyID0gY29udGFpbmVyLmN1cnJlbnQgfHwgdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgc3RhdGVJbml0Lm1hcmtkb3duID0gcHJvcHNWYWx1ZSB8fCAnJztcclxuICAgIHN0YXRlSW5pdC5iYXJQb3B1cCA9IHt9O1xyXG4gICAgaWYgKGRpc3BhdGNoKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgLi4uc3RhdGUsIC4uLnN0YXRlSW5pdCB9KTtcclxuICAgIH1cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGNscyA9IFtcclxuICAgIGNsYXNzTmFtZSxcclxuICAgIHByZWZpeENscyxcclxuICAgIHN0YXRlLnByZXZpZXcgPyBgJHtwcmVmaXhDbHN9LXNob3ctJHtzdGF0ZS5wcmV2aWV3fWAgOiBudWxsLFxyXG4gICAgc3RhdGUuZnVsbHNjcmVlbiA/IGAke3ByZWZpeENsc30tZnVsbHNjcmVlbmAgOiBudWxsLFxyXG4gIF1cclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgIC5qb2luKCcgJylcclxuICAgIC50cmltKCk7XHJcblxyXG4gIHVzZU1lbW8oKCkgPT4gcHJvcHNWYWx1ZSAhPT0gc3RhdGUubWFya2Rvd24gJiYgZGlzcGF0Y2goeyBtYXJrZG93bjogcHJvcHNWYWx1ZSB9KSwgW3Byb3BzVmFsdWVdKTtcclxuICB1c2VNZW1vKCgpID0+IHByZXZpZXdUeXBlICE9PSBzdGF0ZS5wcmV2aWV3ICYmIGRpc3BhdGNoKHsgcHJldmlldzogcHJldmlld1R5cGUgfSksIFtwcmV2aWV3VHlwZV0pO1xyXG4gIHVzZU1lbW8oKCkgPT4gaGVpZ2h0ICE9PSBzdGF0ZS5oZWlnaHQgJiYgZGlzcGF0Y2goeyBoZWlnaHQ6IGhlaWdodCB9KSwgW2hlaWdodF0pO1xyXG4gIHVzZU1lbW8oKCkgPT4gdGFiU2l6ZSAhPT0gc3RhdGUudGFiU2l6ZSAmJiBkaXNwYXRjaCh7IHRhYlNpemUgfSksIFt0YWJTaXplXSk7XHJcbiAgdXNlTWVtbygoKSA9PiBoaWdobGlnaHRFbmFibGUgIT09IHN0YXRlLmhpZ2hsaWdodEVuYWJsZSAmJiBkaXNwYXRjaCh7IGhpZ2hsaWdodEVuYWJsZSB9KSwgW2hpZ2hsaWdodEVuYWJsZV0pO1xyXG4gIHVzZU1lbW8oKCkgPT4gYXV0b0ZvY3VzICE9PSBzdGF0ZS5hdXRvRm9jdXMgJiYgZGlzcGF0Y2goeyBhdXRvRm9jdXM6IGF1dG9Gb2N1cyB9KSwgW2F1dG9Gb2N1c10pO1xyXG4gIHVzZU1lbW8oKCkgPT4gZnVsbHNjcmVlbiAhPT0gc3RhdGUuZnVsbHNjcmVlbiAmJiBkaXNwYXRjaCh7IGZ1bGxzY3JlZW46IGZ1bGxzY3JlZW4gfSksIFtmdWxsc2NyZWVuXSk7XHJcblxyXG4gIGNvbnN0IHRleHRhcmVhRG9tUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIGNvbnN0IGFjdGl2ZSA9IHVzZVJlZjwndGV4dCcgfCAncHJldmlldyc+KCk7XHJcblxyXG4gIHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgdGV4dGFyZWFEb21SZWYuY3VycmVudCA9IHN0YXRlLnRleHRhcmVhV2FycDtcclxuICAgIGlmIChzdGF0ZS50ZXh0YXJlYVdhcnApIHtcclxuICAgICAgc3RhdGUudGV4dGFyZWFXYXJwLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcclxuICAgICAgICBhY3RpdmUuY3VycmVudCA9ICd0ZXh0JztcclxuICAgICAgfSk7XHJcbiAgICAgIHN0YXRlLnRleHRhcmVhV2FycC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgIGFjdGl2ZS5jdXJyZW50ID0gJ3ByZXZpZXcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbc3RhdGUudGV4dGFyZWFXYXJwXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChlOiBSZWFjdC5VSUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgaWYgKCFlbmFibGVTY3JvbGxSZWYuY3VycmVudCkgcmV0dXJuO1xyXG4gICAgY29uc3QgdGV4dGFyZWFEb20gPSB0ZXh0YXJlYURvbVJlZi5jdXJyZW50O1xyXG4gICAgY29uc3QgcHJldmlld0RvbSA9IHByZXZpZXdSZWYuY3VycmVudCA/IHByZXZpZXdSZWYuY3VycmVudC5tZHAuY3VycmVudCA6IHVuZGVmaW5lZDtcclxuICAgIGlmICh0ZXh0YXJlYURvbSAmJiBwcmV2aWV3RG9tKSB7XHJcbiAgICAgIGNvbnN0IHNjYWxlID1cclxuICAgICAgICAodGV4dGFyZWFEb20uc2Nyb2xsSGVpZ2h0IC0gdGV4dGFyZWFEb20ub2Zmc2V0SGVpZ2h0KSAvIChwcmV2aWV3RG9tLnNjcm9sbEhlaWdodCAtIHByZXZpZXdEb20ub2Zmc2V0SGVpZ2h0KTtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSB0ZXh0YXJlYURvbSAmJiBhY3RpdmUuY3VycmVudCA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgcHJldmlld0RvbS5zY3JvbGxUb3AgPSB0ZXh0YXJlYURvbS5zY3JvbGxUb3AgLyBzY2FsZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZS50YXJnZXQgPT09IHByZXZpZXdEb20gJiYgYWN0aXZlLmN1cnJlbnQgPT09ICdwcmV2aWV3Jykge1xyXG4gICAgICAgIHRleHRhcmVhRG9tLnNjcm9sbFRvcCA9IHByZXZpZXdEb20uc2Nyb2xsVG9wICogc2NhbGU7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHNjcm9sbFRvcCA9IDA7XHJcbiAgICAgIGlmIChhY3RpdmUuY3VycmVudCA9PT0gJ3RleHQnKSB7XHJcbiAgICAgICAgc2Nyb2xsVG9wID0gdGV4dGFyZWFEb20uc2Nyb2xsVG9wIHx8IDA7XHJcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlLmN1cnJlbnQgPT09ICdwcmV2aWV3Jykge1xyXG4gICAgICAgIHNjcm9sbFRvcCA9IHByZXZpZXdEb20uc2Nyb2xsVG9wIHx8IDA7XHJcbiAgICAgIH1cclxuICAgICAgZGlzcGF0Y2goeyBzY3JvbGxUb3AgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxFZGl0b3JDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLnN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17Y29udGFpbmVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHsgYmFyUG9wdXA6IHsgLi4uc2V0R3JvdXBQb3BGYWxzZShzdGF0ZS5iYXJQb3B1cCkgfSB9KTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IHN0YXRlLmZ1bGxzY3JlZW4gPyAnMTAwJScgOiBoaWRlVG9vbGJhciA/IE51bWJlcihzdGF0ZS5oZWlnaHQpIC0gdG9vbGJhckhlaWdodCA6IHN0YXRlLmhlaWdodCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHsuLi5vdGhlcn1cclxuICAgICAgPlxyXG4gICAgICAgIHshaGlkZVRvb2xiYXIgJiYgPFRvb2xiYXIgcHJlZml4Q2xzPXtwcmVmaXhDbHN9IGhlaWdodD17dG9vbGJhckhlaWdodH0gLz59XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWNvbnRlbnRgfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiBzdGF0ZS5mdWxsc2NyZWVuID8gYGNhbGMoMTAwJSAtICR7dG9vbGJhckhlaWdodH1weClgIDogTnVtYmVyKHN0YXRlLmhlaWdodCkgLSB0b29sYmFySGVpZ2h0LFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyhlZGl0fGxpdmUpLy50ZXN0KHN0YXRlLnByZXZpZXcgfHwgJycpICYmIChcclxuICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWlucHV0YH1cclxuICAgICAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cclxuICAgICAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9Gb2N1c31cclxuICAgICAgICAgICAgICB7Li4udGV4dGFyZWFQcm9wc31cclxuICAgICAgICAgICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIHsvKGxpdmV8cHJldmlldykvLnRlc3Qoc3RhdGUucHJldmlldyB8fCAnJykgJiYgKFxyXG4gICAgICAgICAgICA8TWFya2Rvd25QcmV2aWV3XHJcbiAgICAgICAgICAgICAgey4uLihwcmV2aWV3T3B0aW9ucyBhcyB1bmtub3duKX1cclxuICAgICAgICAgICAgICBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfVxyXG4gICAgICAgICAgICAgIHJlZj17cHJldmlld1JlZn1cclxuICAgICAgICAgICAgICBzb3VyY2U9e3N0YXRlLm1hcmtkb3duIHx8ICcnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1wcmV2aWV3YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Zpc2lhYmxlRHJhZ2JhciAmJiAhc3RhdGUuZnVsbHNjcmVlbiAmJiAoXHJcbiAgICAgICAgICA8RHJhZ0JhclxyXG4gICAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cclxuICAgICAgICAgICAgaGVpZ2h0PXtzdGF0ZS5oZWlnaHQgYXMgbnVtYmVyfVxyXG4gICAgICAgICAgICBtYXhIZWlnaHQ9e21heEhlaWdodCF9XHJcbiAgICAgICAgICAgIG1pbkhlaWdodD17bWluSGVpZ2h0IX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhuZXdIZWlnaHQpID0+IHtcclxuICAgICAgICAgICAgICBkaXNwYXRjaCh7IGhlaWdodDogbmV3SGVpZ2h0IH0pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRWRpdG9yQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbWRFZGl0b3IgPSBSZWFjdC5mb3J3YXJkUmVmPENvbnRleHRTdG9yZSwgTURFZGl0b3JQcm9wcz4oSW50ZXJuYWxNREVkaXRvcik7XHJcblxyXG50eXBlIE1ERWRpdG9yID0gdHlwZW9mIG1kRWRpdG9yICYge1xyXG4gIE1hcmtkb3duOiB0eXBlb2YgTWFya2Rvd25QcmV2aWV3O1xyXG59O1xyXG5cclxuKG1kRWRpdG9yIGFzIE1ERWRpdG9yKS5NYXJrZG93biA9IE1hcmtkb3duUHJldmlldztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1kRWRpdG9yIGFzIE1ERWRpdG9yO1xyXG4iXX0=