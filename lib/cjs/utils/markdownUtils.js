"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectWord = selectWord;
exports.getBreaksNeededForEmptyLineBefore = getBreaksNeededForEmptyLineBefore;
exports.getBreaksNeededForEmptyLineAfter = getBreaksNeededForEmptyLineAfter;

var _getSurroundingWord = _interopRequireDefault(require("./getSurroundingWord"));

function selectWord(_ref) {
  var text = _ref.text,
      selection = _ref.selection;

  if (text && text.length && selection.start === selection.end) {
    // the user is pointing to a word
    return (0, _getSurroundingWord.default)(text, selection.start);
  }

  return selection;
}
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */


function getBreaksNeededForEmptyLineBefore() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var startPosition = arguments.length > 1 ? arguments[1] : undefined;
  if (startPosition === 0) return 0; // rules:
  // - If we're in the first line, no breaks are needed
  // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
  //      may need to insert 0, 1 or 2 breaks

  var neededBreaks = 2;
  var isInFirstLine = true;

  for (var i = startPosition - 1; i >= 0 && neededBreaks >= 0; i--) {
    switch (text.charCodeAt(i)) {
      case 32:
        // blank space
        continue;

      case 10:
        // line break
        neededBreaks--;
        isInFirstLine = false;
        break;

      default:
        return neededBreaks;
    }
  }

  return isInFirstLine ? 0 : neededBreaks;
}
/**
 *  Gets the number of line-breaks that would have to be inserted after the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the next text
 */


function getBreaksNeededForEmptyLineAfter() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var startPosition = arguments.length > 1 ? arguments[1] : undefined;
  if (startPosition === text.length - 1) return 0; // rules:
  // - If we're in the first line, no breaks are needed
  // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
  //      may need to insert 0, 1 or 2 breaks

  var neededBreaks = 2;
  var isInLastLine = true;

  for (var i = startPosition; i < text.length && neededBreaks >= 0; i++) {
    switch (text.charCodeAt(i)) {
      case 32:
        continue;

      case 10:
        {
          neededBreaks--;
          isInLastLine = false;
          break;
        }

      default:
        return neededBreaks;
    }
  }

  return isInLastLine ? 0 : neededBreaks;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tYXJrZG93blV0aWxzLnRzIl0sIm5hbWVzIjpbInNlbGVjdFdvcmQiLCJ0ZXh0Iiwic2VsZWN0aW9uIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVCZWZvcmUiLCJzdGFydFBvc2l0aW9uIiwibmVlZGVkQnJlYWtzIiwiaXNJbkZpcnN0TGluZSIsImkiLCJjaGFyQ29kZUF0IiwiZ2V0QnJlYWtzTmVlZGVkRm9yRW1wdHlMaW5lQWZ0ZXIiLCJpc0luTGFzdExpbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0E7O0FBT08sU0FBU0EsVUFBVCxPQUFpRTtBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFNBQXFDOztBQUN0RSxNQUFJRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsTUFBYixJQUF1QkQsU0FBUyxDQUFDRSxLQUFWLEtBQW9CRixTQUFTLENBQUNHLEdBQXpELEVBQThEO0FBQzVEO0FBQ0EsV0FBTyxpQ0FBbUJKLElBQW5CLEVBQXlCQyxTQUFTLENBQUNFLEtBQW5DLENBQVA7QUFDRDs7QUFDRCxTQUFPRixTQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU0ksaUNBQVQsR0FBcUY7QUFBQSxNQUExQ0wsSUFBMEMsdUVBQW5DLEVBQW1DO0FBQUEsTUFBL0JNLGFBQStCO0FBQzFGLE1BQUlBLGFBQWEsS0FBSyxDQUF0QixFQUF5QixPQUFPLENBQVAsQ0FEaUUsQ0FHMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLElBQXBCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHSCxhQUFhLEdBQUcsQ0FBN0IsRUFBZ0NHLENBQUMsSUFBSSxDQUFMLElBQVVGLFlBQVksSUFBSSxDQUExRCxFQUE2REUsQ0FBQyxFQUE5RCxFQUFrRTtBQUNoRSxZQUFRVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JELENBQWhCLENBQVI7QUFDRSxXQUFLLEVBQUw7QUFBUztBQUNQOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BGLFFBQUFBLFlBQVk7QUFDWkMsUUFBQUEsYUFBYSxHQUFHLEtBQWhCO0FBQ0E7O0FBQ0Y7QUFDRSxlQUFPRCxZQUFQO0FBUko7QUFVRDs7QUFDRCxTQUFPQyxhQUFhLEdBQUcsQ0FBSCxHQUFPRCxZQUEzQjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNJLGdDQUFULEdBQW9GO0FBQUEsTUFBMUNYLElBQTBDLHVFQUFuQyxFQUFtQztBQUFBLE1BQS9CTSxhQUErQjtBQUN6RixNQUFJQSxhQUFhLEtBQUtOLElBQUksQ0FBQ0UsTUFBTCxHQUFjLENBQXBDLEVBQXVDLE9BQU8sQ0FBUCxDQURrRCxDQUd6RjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFJSyxZQUFZLEdBQUcsQ0FBbkI7QUFDQSxNQUFJSyxZQUFZLEdBQUcsSUFBbkI7O0FBQ0EsT0FBSyxJQUFJSCxDQUFDLEdBQUdILGFBQWIsRUFBNEJHLENBQUMsR0FBR1QsSUFBSSxDQUFDRSxNQUFULElBQW1CSyxZQUFZLElBQUksQ0FBL0QsRUFBa0VFLENBQUMsRUFBbkUsRUFBdUU7QUFDckUsWUFBUVQsSUFBSSxDQUFDVSxVQUFMLENBQWdCRCxDQUFoQixDQUFSO0FBQ0UsV0FBSyxFQUFMO0FBQ0U7O0FBQ0YsV0FBSyxFQUFMO0FBQVM7QUFDUEYsVUFBQUEsWUFBWTtBQUNaSyxVQUFBQSxZQUFZLEdBQUcsS0FBZjtBQUNBO0FBQ0Q7O0FBQ0Q7QUFDRSxlQUFPTCxZQUFQO0FBVEo7QUFXRDs7QUFDRCxTQUFPSyxZQUFZLEdBQUcsQ0FBSCxHQUFPTCxZQUExQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGV4dFJhbmdlIH0gZnJvbSAnLi4vY29tbWFuZHMnO1xyXG5pbXBvcnQgZ2V0U3Vycm91bmRpbmdXb3JkIGZyb20gJy4vZ2V0U3Vycm91bmRpbmdXb3JkJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFNlY3Rpb24ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBzZWxlY3Rpb246IFRleHRSYW5nZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFdvcmQoeyB0ZXh0LCBzZWxlY3Rpb24gfTogVGV4dFNlY3Rpb24pOiBUZXh0UmFuZ2Uge1xyXG4gIGlmICh0ZXh0ICYmIHRleHQubGVuZ3RoICYmIHNlbGVjdGlvbi5zdGFydCA9PT0gc2VsZWN0aW9uLmVuZCkge1xyXG4gICAgLy8gdGhlIHVzZXIgaXMgcG9pbnRpbmcgdG8gYSB3b3JkXHJcbiAgICByZXR1cm4gZ2V0U3Vycm91bmRpbmdXb3JkKHRleHQsIHNlbGVjdGlvbi5zdGFydCk7XHJcbiAgfVxyXG4gIHJldHVybiBzZWxlY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgR2V0cyB0aGUgbnVtYmVyIG9mIGxpbmUtYnJlYWtzIHRoYXQgd291bGQgaGF2ZSB0byBiZSBpbnNlcnRlZCBiZWZvcmUgdGhlIGdpdmVuICdzdGFydFBvc2l0aW9uJ1xyXG4gKiAgdG8gbWFrZSBzdXJlIHRoZXJlJ3MgYW4gZW1wdHkgbGluZSBiZXR3ZWVuICdzdGFydFBvc2l0aW9uJyBhbmQgdGhlIHByZXZpb3VzIHRleHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVCZWZvcmUodGV4dCA9ICcnLCBzdGFydFBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChzdGFydFBvc2l0aW9uID09PSAwKSByZXR1cm4gMDtcclxuXHJcbiAgLy8gcnVsZXM6XHJcbiAgLy8gLSBJZiB3ZSdyZSBpbiB0aGUgZmlyc3QgbGluZSwgbm8gYnJlYWtzIGFyZSBuZWVkZWRcclxuICAvLyAtIE90aGVyd2lzZSB0aGVyZSBtdXN0IGJlIDIgYnJlYWtzIGJlZm9yZSB0aGUgcHJldmlvdXMgY2hhcmFjdGVyLiBEZXBlbmRpbmcgb24gaG93IG1hbnkgYnJlYWtzIGV4aXN0IGFscmVhZHksIHdlXHJcbiAgLy8gICAgICBtYXkgbmVlZCB0byBpbnNlcnQgMCwgMSBvciAyIGJyZWFrc1xyXG5cclxuICBsZXQgbmVlZGVkQnJlYWtzID0gMjtcclxuICBsZXQgaXNJbkZpcnN0TGluZSA9IHRydWU7XHJcbiAgZm9yIChsZXQgaSA9IHN0YXJ0UG9zaXRpb24gLSAxOyBpID49IDAgJiYgbmVlZGVkQnJlYWtzID49IDA7IGktLSkge1xyXG4gICAgc3dpdGNoICh0ZXh0LmNoYXJDb2RlQXQoaSkpIHtcclxuICAgICAgY2FzZSAzMjogLy8gYmxhbmsgc3BhY2VcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY2FzZSAxMDogLy8gbGluZSBicmVha1xyXG4gICAgICAgIG5lZWRlZEJyZWFrcy0tO1xyXG4gICAgICAgIGlzSW5GaXJzdExpbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbmVlZGVkQnJlYWtzO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gaXNJbkZpcnN0TGluZSA/IDAgOiBuZWVkZWRCcmVha3M7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAgR2V0cyB0aGUgbnVtYmVyIG9mIGxpbmUtYnJlYWtzIHRoYXQgd291bGQgaGF2ZSB0byBiZSBpbnNlcnRlZCBhZnRlciB0aGUgZ2l2ZW4gJ3N0YXJ0UG9zaXRpb24nXHJcbiAqICB0byBtYWtlIHN1cmUgdGhlcmUncyBhbiBlbXB0eSBsaW5lIGJldHdlZW4gJ3N0YXJ0UG9zaXRpb24nIGFuZCB0aGUgbmV4dCB0ZXh0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJlYWtzTmVlZGVkRm9yRW1wdHlMaW5lQWZ0ZXIodGV4dCA9ICcnLCBzdGFydFBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChzdGFydFBvc2l0aW9uID09PSB0ZXh0Lmxlbmd0aCAtIDEpIHJldHVybiAwO1xyXG5cclxuICAvLyBydWxlczpcclxuICAvLyAtIElmIHdlJ3JlIGluIHRoZSBmaXJzdCBsaW5lLCBubyBicmVha3MgYXJlIG5lZWRlZFxyXG4gIC8vIC0gT3RoZXJ3aXNlIHRoZXJlIG11c3QgYmUgMiBicmVha3MgYmVmb3JlIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIuIERlcGVuZGluZyBvbiBob3cgbWFueSBicmVha3MgZXhpc3QgYWxyZWFkeSwgd2VcclxuICAvLyAgICAgIG1heSBuZWVkIHRvIGluc2VydCAwLCAxIG9yIDIgYnJlYWtzXHJcblxyXG4gIGxldCBuZWVkZWRCcmVha3MgPSAyO1xyXG4gIGxldCBpc0luTGFzdExpbmUgPSB0cnVlO1xyXG4gIGZvciAobGV0IGkgPSBzdGFydFBvc2l0aW9uOyBpIDwgdGV4dC5sZW5ndGggJiYgbmVlZGVkQnJlYWtzID49IDA7IGkrKykge1xyXG4gICAgc3dpdGNoICh0ZXh0LmNoYXJDb2RlQXQoaSkpIHtcclxuICAgICAgY2FzZSAzMjpcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgY2FzZSAxMDoge1xyXG4gICAgICAgIG5lZWRlZEJyZWFrcy0tO1xyXG4gICAgICAgIGlzSW5MYXN0TGluZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG5lZWRlZEJyZWFrcztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGlzSW5MYXN0TGluZSA/IDAgOiBuZWVkZWRCcmVha3M7XHJcbn1cclxuIl19