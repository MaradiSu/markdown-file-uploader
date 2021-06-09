"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStateFromTextArea = getStateFromTextArea;
Object.defineProperty(exports, "bold", {
  enumerable: true,
  get: function get() {
    return _bold.bold;
  }
});
Object.defineProperty(exports, "code", {
  enumerable: true,
  get: function get() {
    return _code.code;
  }
});
Object.defineProperty(exports, "codeBlock", {
  enumerable: true,
  get: function get() {
    return _code.codeBlock;
  }
});
Object.defineProperty(exports, "italic", {
  enumerable: true,
  get: function get() {
    return _italic.italic;
  }
});
Object.defineProperty(exports, "link", {
  enumerable: true,
  get: function get() {
    return _link.link;
  }
});
Object.defineProperty(exports, "unorderedListCommand", {
  enumerable: true,
  get: function get() {
    return _list.unorderedListCommand;
  }
});
Object.defineProperty(exports, "orderedListCommand", {
  enumerable: true,
  get: function get() {
    return _list.orderedListCommand;
  }
});
Object.defineProperty(exports, "checkedListCommand", {
  enumerable: true,
  get: function get() {
    return _list.checkedListCommand;
  }
});
Object.defineProperty(exports, "quote", {
  enumerable: true,
  get: function get() {
    return _quote.quote;
  }
});
Object.defineProperty(exports, "hr", {
  enumerable: true,
  get: function get() {
    return _hr.hr;
  }
});
Object.defineProperty(exports, "title", {
  enumerable: true,
  get: function get() {
    return _title.title;
  }
});
Object.defineProperty(exports, "title1", {
  enumerable: true,
  get: function get() {
    return _title2.title1;
  }
});
Object.defineProperty(exports, "title2", {
  enumerable: true,
  get: function get() {
    return _title3.title2;
  }
});
Object.defineProperty(exports, "title3", {
  enumerable: true,
  get: function get() {
    return _title4.title3;
  }
});
Object.defineProperty(exports, "title4", {
  enumerable: true,
  get: function get() {
    return _title5.title4;
  }
});
Object.defineProperty(exports, "title5", {
  enumerable: true,
  get: function get() {
    return _title6.title5;
  }
});
Object.defineProperty(exports, "title6", {
  enumerable: true,
  get: function get() {
    return _title7.title6;
  }
});
Object.defineProperty(exports, "group", {
  enumerable: true,
  get: function get() {
    return _group.group;
  }
});
Object.defineProperty(exports, "divider", {
  enumerable: true,
  get: function get() {
    return _divider.divider;
  }
});
Object.defineProperty(exports, "codePreview", {
  enumerable: true,
  get: function get() {
    return _preview.codePreview;
  }
});
Object.defineProperty(exports, "codeEdit", {
  enumerable: true,
  get: function get() {
    return _preview.codeEdit;
  }
});
Object.defineProperty(exports, "codeLive", {
  enumerable: true,
  get: function get() {
    return _preview.codeLive;
  }
});
Object.defineProperty(exports, "fullscreen", {
  enumerable: true,
  get: function get() {
    return _fullscreen.fullscreen;
  }
});
Object.defineProperty(exports, "image", {
  enumerable: true,
  get: function get() {
    return _image.image;
  }
});
Object.defineProperty(exports, "strikethrough", {
  enumerable: true,
  get: function get() {
    return _strikeThrough.strikethrough;
  }
});
exports.TextAreaTextApi = exports.TextAreaCommandOrchestrator = exports.getCommands = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bold = require("./bold");

var _code = require("./code");

var _italic = require("./italic");

var _link = require("./link");

var _list = require("./list");

var _quote = require("./quote");

var _hr = require("./hr");

var _title = require("./title");

var _title2 = require("./title1");

var _title3 = require("./title2");

var _title4 = require("./title3");

var _title5 = require("./title4");

var _title6 = require("./title5");

var _title7 = require("./title6");

var _comment = require("./comment");

var _group = require("./group");

var _divider = require("./divider");

var _preview = require("./preview");

var _fullscreen = require("./fullscreen");

var _image = require("./image");

var _strikeThrough = require("./strikeThrough");

var _InsertTextAtPosition = _interopRequireDefault(require("../utils/InsertTextAtPosition"));

var getCommands = function getCommands() {
  return [_comment.comment, _bold.bold, _italic.italic, _strikeThrough.strikethrough, _hr.hr, _title.title, _divider.divider, _link.link, _quote.quote, _code.code, _code.codeBlock, _image.image, _divider.divider, _list.unorderedListCommand, _list.orderedListCommand, _list.checkedListCommand, _divider.divider, _preview.codeEdit, _preview.codeLive, _preview.codePreview, _divider.divider, _fullscreen.fullscreen];
};

exports.getCommands = getCommands;

function getStateFromTextArea(textArea) {
  return {
    selection: {
      start: textArea.selectionStart,
      end: textArea.selectionEnd
    },
    text: textArea.value,
    selectedText: textArea.value.slice(textArea.selectionStart, textArea.selectionEnd)
  };
}

var TextAreaTextApi = /*#__PURE__*/function () {
  function TextAreaTextApi(textArea) {
    (0, _classCallCheck2.default)(this, TextAreaTextApi);
    this.textArea = void 0;
    this.textArea = textArea;
  }

  (0, _createClass2.default)(TextAreaTextApi, [{
    key: "replaceSelection",
    value: function replaceSelection(text) {
      (0, _InsertTextAtPosition.default)(this.textArea, text);
      return getStateFromTextArea(this.textArea);
    }
  }, {
    key: "setSelectionRange",
    value: function setSelectionRange(selection) {
      this.textArea.focus();
      this.textArea.selectionStart = selection.start;
      this.textArea.selectionEnd = selection.end;
      return getStateFromTextArea(this.textArea);
    }
  }]);
  return TextAreaTextApi;
}();

exports.TextAreaTextApi = TextAreaTextApi;

var TextAreaCommandOrchestrator = /*#__PURE__*/function () {
  function TextAreaCommandOrchestrator(textArea) {
    (0, _classCallCheck2.default)(this, TextAreaCommandOrchestrator);
    this.textArea = void 0;
    this.textApi = void 0;
    this.textArea = textArea;
    this.textApi = new TextAreaTextApi(textArea);
  }

  (0, _createClass2.default)(TextAreaCommandOrchestrator, [{
    key: "getState",
    value: function getState() {
      if (!this.textArea) return false;
      return getStateFromTextArea(this.textArea);
    }
  }, {
    key: "executeCommand",
    value: function executeCommand(command) {
      command.execute && command.execute(getStateFromTextArea(this.textArea), this.textApi);
    }
  }]);
  return TextAreaCommandOrchestrator;
}();

exports.TextAreaCommandOrchestrator = TextAreaCommandOrchestrator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9pbmRleC50cyJdLCJuYW1lcyI6WyJnZXRDb21tYW5kcyIsImNvbW1lbnQiLCJib2xkIiwiaXRhbGljIiwic3RyaWtldGhyb3VnaCIsImhyIiwidGl0bGUiLCJkaXZpZGVyIiwibGluayIsInF1b3RlIiwiY29kZSIsImNvZGVCbG9jayIsImltYWdlIiwidW5vcmRlcmVkTGlzdENvbW1hbmQiLCJvcmRlcmVkTGlzdENvbW1hbmQiLCJjaGVja2VkTGlzdENvbW1hbmQiLCJjb2RlRWRpdCIsImNvZGVMaXZlIiwiY29kZVByZXZpZXciLCJmdWxsc2NyZWVuIiwiZ2V0U3RhdGVGcm9tVGV4dEFyZWEiLCJ0ZXh0QXJlYSIsInNlbGVjdGlvbiIsInN0YXJ0Iiwic2VsZWN0aW9uU3RhcnQiLCJlbmQiLCJzZWxlY3Rpb25FbmQiLCJ0ZXh0IiwidmFsdWUiLCJzZWxlY3RlZFRleHQiLCJzbGljZSIsIlRleHRBcmVhVGV4dEFwaSIsImZvY3VzIiwiVGV4dEFyZWFDb21tYW5kT3JjaGVzdHJhdG9yIiwidGV4dEFwaSIsImNvbW1hbmQiLCJleGVjdXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQXlEQSxJQUFNQSxXQUE2QixHQUFHLFNBQWhDQSxXQUFnQztBQUFBLFNBQU0sQ0FDMUNDLGdCQUQwQyxFQUUxQ0MsVUFGMEMsRUFHMUNDLGNBSDBDLEVBSTFDQyw0QkFKMEMsRUFLMUNDLE1BTDBDLEVBTTFDQyxZQU4wQyxFQU8xQ0MsZ0JBUDBDLEVBUTFDQyxVQVIwQyxFQVMxQ0MsWUFUMEMsRUFVMUNDLFVBVjBDLEVBVzFDQyxlQVgwQyxFQVkxQ0MsWUFaMEMsRUFhMUNMLGdCQWIwQyxFQWMxQ00sMEJBZDBDLEVBZTFDQyx3QkFmMEMsRUFnQjFDQyx3QkFoQjBDLEVBaUIxQ1IsZ0JBakIwQyxFQWtCMUNTLGlCQWxCMEMsRUFtQjFDQyxpQkFuQjBDLEVBb0IxQ0Msb0JBcEIwQyxFQXFCMUNYLGdCQXJCMEMsRUFzQjFDWSxzQkF0QjBDLENBQU47QUFBQSxDQUF0Qzs7OztBQXlCQSxTQUFTQyxvQkFBVCxDQUE4QkMsUUFBOUIsRUFBd0U7QUFDdEUsU0FBTztBQUNMQyxJQUFBQSxTQUFTLEVBQUU7QUFDVEMsTUFBQUEsS0FBSyxFQUFFRixRQUFRLENBQUNHLGNBRFA7QUFFVEMsTUFBQUEsR0FBRyxFQUFFSixRQUFRLENBQUNLO0FBRkwsS0FETjtBQUtMQyxJQUFBQSxJQUFJLEVBQUVOLFFBQVEsQ0FBQ08sS0FMVjtBQU1MQyxJQUFBQSxZQUFZLEVBQUVSLFFBQVEsQ0FBQ08sS0FBVCxDQUFlRSxLQUFmLENBQXFCVCxRQUFRLENBQUNHLGNBQTlCLEVBQThDSCxRQUFRLENBQUNLLFlBQXZEO0FBTlQsR0FBUDtBQVFEOztJQUVLSyxlO0FBR0osMkJBQVlWLFFBQVosRUFBMkM7QUFBQTtBQUFBLFNBRjNDQSxRQUUyQztBQUN6QyxTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7O1dBRUQsMEJBQWlCTSxJQUFqQixFQUEwQztBQUN4Qyx5Q0FBVyxLQUFLTixRQUFoQixFQUEwQk0sSUFBMUI7QUFDQSxhQUFPUCxvQkFBb0IsQ0FBQyxLQUFLQyxRQUFOLENBQTNCO0FBQ0Q7OztXQUVELDJCQUFrQkMsU0FBbEIsRUFBbUQ7QUFDakQsV0FBS0QsUUFBTCxDQUFjVyxLQUFkO0FBQ0EsV0FBS1gsUUFBTCxDQUFjRyxjQUFkLEdBQStCRixTQUFTLENBQUNDLEtBQXpDO0FBQ0EsV0FBS0YsUUFBTCxDQUFjSyxZQUFkLEdBQTZCSixTQUFTLENBQUNHLEdBQXZDO0FBQ0EsYUFBT0wsb0JBQW9CLENBQUMsS0FBS0MsUUFBTixDQUEzQjtBQUNEOzs7Ozs7O0lBR0dZLDJCO0FBSUosdUNBQVlaLFFBQVosRUFBMkM7QUFBQTtBQUFBLFNBSDNDQSxRQUcyQztBQUFBLFNBRjNDYSxPQUUyQztBQUN6QyxTQUFLYixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUthLE9BQUwsR0FBZSxJQUFJSCxlQUFKLENBQW9CVixRQUFwQixDQUFmO0FBQ0Q7Ozs7V0FFRCxvQkFBVztBQUNULFVBQUksQ0FBQyxLQUFLQSxRQUFWLEVBQW9CLE9BQU8sS0FBUDtBQUNwQixhQUFPRCxvQkFBb0IsQ0FBQyxLQUFLQyxRQUFOLENBQTNCO0FBQ0Q7OztXQUVELHdCQUFlYyxPQUFmLEVBQWdEO0FBQzlDQSxNQUFBQSxPQUFPLENBQUNDLE9BQVIsSUFBbUJELE9BQU8sQ0FBQ0MsT0FBUixDQUFnQmhCLG9CQUFvQixDQUFDLEtBQUtDLFFBQU4sQ0FBcEMsRUFBcUQsS0FBS2EsT0FBMUQsQ0FBbkI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvbGQgfSBmcm9tICcuL2JvbGQnO1xyXG5pbXBvcnQgeyBjb2RlLCBjb2RlQmxvY2sgfSBmcm9tICcuL2NvZGUnO1xyXG5pbXBvcnQgeyBpdGFsaWMgfSBmcm9tICcuL2l0YWxpYyc7XHJcbmltcG9ydCB7IGxpbmsgfSBmcm9tICcuL2xpbmsnO1xyXG5pbXBvcnQgeyB1bm9yZGVyZWRMaXN0Q29tbWFuZCwgb3JkZXJlZExpc3RDb21tYW5kLCBjaGVja2VkTGlzdENvbW1hbmQgfSBmcm9tICcuL2xpc3QnO1xyXG5pbXBvcnQgeyBxdW90ZSB9IGZyb20gJy4vcXVvdGUnO1xyXG5pbXBvcnQgeyBociB9IGZyb20gJy4vaHInO1xyXG5pbXBvcnQgeyB0aXRsZSB9IGZyb20gJy4vdGl0bGUnO1xyXG5pbXBvcnQgeyB0aXRsZTEgfSBmcm9tICcuL3RpdGxlMSc7XHJcbmltcG9ydCB7IHRpdGxlMiB9IGZyb20gJy4vdGl0bGUyJztcclxuaW1wb3J0IHsgdGl0bGUzIH0gZnJvbSAnLi90aXRsZTMnO1xyXG5pbXBvcnQgeyB0aXRsZTQgfSBmcm9tICcuL3RpdGxlNCc7XHJcbmltcG9ydCB7IHRpdGxlNSB9IGZyb20gJy4vdGl0bGU1JztcclxuaW1wb3J0IHsgdGl0bGU2IH0gZnJvbSAnLi90aXRsZTYnO1xyXG5pbXBvcnQgeyBjb21tZW50IH0gZnJvbSAnLi9jb21tZW50JztcclxuaW1wb3J0IHsgZ3JvdXAgfSBmcm9tICcuL2dyb3VwJztcclxuaW1wb3J0IHsgZGl2aWRlciB9IGZyb20gJy4vZGl2aWRlcic7XHJcbmltcG9ydCB7IGNvZGVQcmV2aWV3LCBjb2RlRWRpdCwgY29kZUxpdmUgfSBmcm9tICcuL3ByZXZpZXcnO1xyXG5pbXBvcnQgeyBmdWxsc2NyZWVuIH0gZnJvbSAnLi9mdWxsc2NyZWVuJztcclxuaW1wb3J0IHsgaW1hZ2UgfSBmcm9tICcuL2ltYWdlJztcclxuaW1wb3J0IHsgc3RyaWtldGhyb3VnaCB9IGZyb20gJy4vc3RyaWtlVGhyb3VnaCc7XHJcbmltcG9ydCBpbnNlcnRUZXh0IGZyb20gJy4uL3V0aWxzL0luc2VydFRleHRBdFBvc2l0aW9uJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZE9yY2hlc3RyYXRvciB7XHJcbiAgZXhlY3V0ZUNvbW1hbmQoY29tbWFuZDogSUNvbW1hbmQpOiB2b2lkO1xyXG59XHJcbmV4cG9ydCB0eXBlIElDb21tYW5kQ2hpbGRIYW5kbGVQYXJhbSA9IHtcclxuICBnZXRTdGF0ZT86IFRleHRBcmVhQ29tbWFuZE9yY2hlc3RyYXRvclsnZ2V0U3RhdGUnXTtcclxuICB0ZXh0QXBpPzogVGV4dEFwaTtcclxufTtcclxuZXhwb3J0IHR5cGUgSUNvbW1hbmRDaGlsZEhhbmRsZSA9IHtcclxuICBjaGlsZHJlbj86IChoYW5kbGU6IHsgY2xvc2U6ICgpID0+IHZvaWQ7IGV4ZWN1dGU6ICgpID0+IHZvaWQgfSAmIElDb21tYW5kQ2hpbGRIYW5kbGVQYXJhbSkgPT4gUmVhY3QuUmVhY3RFbGVtZW50O1xyXG59O1xyXG5leHBvcnQgdHlwZSBJQ29tbWFuZENoaWxkQ29tbWFuZHM8VCA9IHN0cmluZz4gPSB7XHJcbiAgY2hpbGRyZW4/OiBBcnJheTxJQ29tbWFuZDxUPj47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBJQ29tbWFuZDxUID0gc3RyaW5nPiA9IHtcclxuICBwYXJlbnQ/OiBJQ29tbWFuZDtcclxuICBrZXlDb21tYW5kPzogc3RyaW5nO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgc2hvcnRjdXRzPzogc3RyaW5nO1xyXG4gIGdyb3VwTmFtZT86IHN0cmluZztcclxuICBpY29uPzogUmVhY3QuUmVhY3RFbGVtZW50O1xyXG4gIHZhbHVlPzogVDtcclxuICBwb3NpdGlvbj86ICdyaWdodCc7XHJcbiAgbGlQcm9wcz86IFJlYWN0LkxpSFRNTEF0dHJpYnV0ZXM8SFRNTExJRWxlbWVudD47XHJcbiAgYnV0dG9uUHJvcHM/OiBSZWFjdC5CdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4gfCBudWxsO1xyXG4gIGV4ZWN1dGU/OiAoc3RhdGU6IFRleHRTdGF0ZSwgYXBpOiBUZXh0QXBpKSA9PiB2b2lkO1xyXG59ICYgSUNvbW1hbmRDaGlsZENvbW1hbmRzICZcclxuICBJQ29tbWFuZENoaWxkSGFuZGxlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0UmFuZ2Uge1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFN0YXRlIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgc2VsZWN0ZWRUZXh0OiBzdHJpbmc7XHJcbiAgc2VsZWN0aW9uOiBUZXh0UmFuZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEFwaSB7XHJcbiAgLyoqXHJcbiAgICogUmVwbGFjZXMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIHdpdGggdGhlIG5ldyB0ZXh0LiBUaGlzIHdpbGwgbWFrZSB0aGUgbmV3IHNlbGVjdGVkVGV4dCB0byBiZSBlbXB0eSwgdGhlXHJcbiAgICogc2VsZWN0aW9uIHN0YXJ0IGFuZCBzZWxlY3Rpb24gZW5kIHdpbGwgYmUgdGhlIHNhbWUgYW5kIHdpbGwgYm90aCBwb2ludCB0byB0aGUgZW5kXHJcbiAgICogQHBhcmFtIHRleHQgVGV4dCB0aGF0IHNob3VsZCByZXBsYWNlIHRoZSBjdXJyZW50IHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIHJlcGxhY2VTZWxlY3Rpb24odGV4dDogc3RyaW5nKTogVGV4dFN0YXRlO1xyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3RzIHRoZSBzcGVjaWZpZWQgdGV4dCByYW5nZVxyXG4gICAqIEBwYXJhbSBzZWxlY3Rpb25cclxuICAgKi9cclxuICBzZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb246IFRleHRSYW5nZSk6IFRleHRTdGF0ZTtcclxufVxyXG5cclxuY29uc3QgZ2V0Q29tbWFuZHM6ICgpID0+IElDb21tYW5kW10gPSAoKSA9PiBbXHJcbiAgY29tbWVudCxcclxuICBib2xkLFxyXG4gIGl0YWxpYyxcclxuICBzdHJpa2V0aHJvdWdoLFxyXG4gIGhyLFxyXG4gIHRpdGxlLFxyXG4gIGRpdmlkZXIsXHJcbiAgbGluayxcclxuICBxdW90ZSxcclxuICBjb2RlLFxyXG4gIGNvZGVCbG9jayxcclxuICBpbWFnZSxcclxuICBkaXZpZGVyLFxyXG4gIHVub3JkZXJlZExpc3RDb21tYW5kLFxyXG4gIG9yZGVyZWRMaXN0Q29tbWFuZCxcclxuICBjaGVja2VkTGlzdENvbW1hbmQsXHJcbiAgZGl2aWRlcixcclxuICBjb2RlRWRpdCxcclxuICBjb2RlTGl2ZSxcclxuICBjb2RlUHJldmlldyxcclxuICBkaXZpZGVyLFxyXG4gIGZ1bGxzY3JlZW4sXHJcbl07XHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZUZyb21UZXh0QXJlYSh0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudCk6IFRleHRTdGF0ZSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNlbGVjdGlvbjoge1xyXG4gICAgICBzdGFydDogdGV4dEFyZWEuc2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgIGVuZDogdGV4dEFyZWEuc2VsZWN0aW9uRW5kLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHRleHRBcmVhLnZhbHVlLFxyXG4gICAgc2VsZWN0ZWRUZXh0OiB0ZXh0QXJlYS52YWx1ZS5zbGljZSh0ZXh0QXJlYS5zZWxlY3Rpb25TdGFydCwgdGV4dEFyZWEuc2VsZWN0aW9uRW5kKSxcclxuICB9O1xyXG59XHJcblxyXG5jbGFzcyBUZXh0QXJlYVRleHRBcGkgaW1wbGVtZW50cyBUZXh0QXBpIHtcclxuICB0ZXh0QXJlYTogSFRNTFRleHRBcmVhRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgIHRoaXMudGV4dEFyZWEgPSB0ZXh0QXJlYTtcclxuICB9XHJcblxyXG4gIHJlcGxhY2VTZWxlY3Rpb24odGV4dDogc3RyaW5nKTogVGV4dFN0YXRlIHtcclxuICAgIGluc2VydFRleHQodGhpcy50ZXh0QXJlYSwgdGV4dCk7XHJcbiAgICByZXR1cm4gZ2V0U3RhdGVGcm9tVGV4dEFyZWEodGhpcy50ZXh0QXJlYSk7XHJcbiAgfVxyXG5cclxuICBzZXRTZWxlY3Rpb25SYW5nZShzZWxlY3Rpb246IFRleHRSYW5nZSk6IFRleHRTdGF0ZSB7XHJcbiAgICB0aGlzLnRleHRBcmVhLmZvY3VzKCk7XHJcbiAgICB0aGlzLnRleHRBcmVhLnNlbGVjdGlvblN0YXJ0ID0gc2VsZWN0aW9uLnN0YXJ0O1xyXG4gICAgdGhpcy50ZXh0QXJlYS5zZWxlY3Rpb25FbmQgPSBzZWxlY3Rpb24uZW5kO1xyXG4gICAgcmV0dXJuIGdldFN0YXRlRnJvbVRleHRBcmVhKHRoaXMudGV4dEFyZWEpO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGV4dEFyZWFDb21tYW5kT3JjaGVzdHJhdG9yIGltcGxlbWVudHMgQ29tbWFuZE9yY2hlc3RyYXRvciB7XHJcbiAgdGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgdGV4dEFwaTogVGV4dEFwaTtcclxuXHJcbiAgY29uc3RydWN0b3IodGV4dEFyZWE6IEhUTUxUZXh0QXJlYUVsZW1lbnQpIHtcclxuICAgIHRoaXMudGV4dEFyZWEgPSB0ZXh0QXJlYTtcclxuICAgIHRoaXMudGV4dEFwaSA9IG5ldyBUZXh0QXJlYVRleHRBcGkodGV4dEFyZWEpO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICBpZiAoIXRoaXMudGV4dEFyZWEpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBnZXRTdGF0ZUZyb21UZXh0QXJlYSh0aGlzLnRleHRBcmVhKTtcclxuICB9XHJcblxyXG4gIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQ6IElDb21tYW5kPHN0cmluZz4pOiB2b2lkIHtcclxuICAgIGNvbW1hbmQuZXhlY3V0ZSAmJiBjb21tYW5kLmV4ZWN1dGUoZ2V0U3RhdGVGcm9tVGV4dEFyZWEodGhpcy50ZXh0QXJlYSksIHRoaXMudGV4dEFwaSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIC8vIFRvb2xiYXJzLlxyXG4gIHRpdGxlLFxyXG4gIHRpdGxlMSxcclxuICB0aXRsZTIsXHJcbiAgdGl0bGUzLFxyXG4gIHRpdGxlNCxcclxuICB0aXRsZTUsXHJcbiAgdGl0bGU2LFxyXG4gIGJvbGQsXHJcbiAgY29kZUJsb2NrLFxyXG4gIGl0YWxpYyxcclxuICBzdHJpa2V0aHJvdWdoLFxyXG4gIGhyLFxyXG4gIGdyb3VwLFxyXG4gIGRpdmlkZXIsXHJcbiAgbGluayxcclxuICBxdW90ZSxcclxuICBjb2RlLFxyXG4gIGltYWdlLFxyXG4gIHVub3JkZXJlZExpc3RDb21tYW5kLFxyXG4gIG9yZGVyZWRMaXN0Q29tbWFuZCxcclxuICBjaGVja2VkTGlzdENvbW1hbmQsXHJcbiAgY29kZUVkaXQsXHJcbiAgY29kZUxpdmUsXHJcbiAgY29kZVByZXZpZXcsXHJcbiAgZnVsbHNjcmVlbixcclxuICAvLyBUb29sIG1ldGhvZC5cclxuICBnZXRDb21tYW5kcyxcclxuICBnZXRTdGF0ZUZyb21UZXh0QXJlYSxcclxuICBUZXh0QXJlYUNvbW1hbmRPcmNoZXN0cmF0b3IsXHJcbiAgVGV4dEFyZWFUZXh0QXBpLFxyXG59O1xyXG4iXX0=