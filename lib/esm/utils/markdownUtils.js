import getSurroundingWord from './getSurroundingWord';
export function selectWord(_ref) {
  var text = _ref.text,
      selection = _ref.selection;

  if (text && text.length && selection.start === selection.end) {
    // the user is pointing to a word
    return getSurroundingWord(text, selection.start);
  }

  return selection;
}
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */

export function getBreaksNeededForEmptyLineBefore() {
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

export function getBreaksNeededForEmptyLineAfter() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9tYXJrZG93blV0aWxzLnRzIl0sIm5hbWVzIjpbImdldFN1cnJvdW5kaW5nV29yZCIsInNlbGVjdFdvcmQiLCJ0ZXh0Iiwic2VsZWN0aW9uIiwibGVuZ3RoIiwic3RhcnQiLCJlbmQiLCJnZXRCcmVha3NOZWVkZWRGb3JFbXB0eUxpbmVCZWZvcmUiLCJzdGFydFBvc2l0aW9uIiwibmVlZGVkQnJlYWtzIiwiaXNJbkZpcnN0TGluZSIsImkiLCJjaGFyQ29kZUF0IiwiZ2V0QnJlYWtzTmVlZGVkRm9yRW1wdHlMaW5lQWZ0ZXIiLCJpc0luTGFzdExpbmUiXSwibWFwcGluZ3MiOiJBQUNBLE9BQU9BLGtCQUFQLE1BQStCLHNCQUEvQjtBQU9BLE9BQU8sU0FBU0MsVUFBVCxPQUFpRTtBQUFBLE1BQTNDQyxJQUEyQyxRQUEzQ0EsSUFBMkM7QUFBQSxNQUFyQ0MsU0FBcUMsUUFBckNBLFNBQXFDOztBQUN0RSxNQUFJRCxJQUFJLElBQUlBLElBQUksQ0FBQ0UsTUFBYixJQUF1QkQsU0FBUyxDQUFDRSxLQUFWLEtBQW9CRixTQUFTLENBQUNHLEdBQXpELEVBQThEO0FBQzVEO0FBQ0EsV0FBT04sa0JBQWtCLENBQUNFLElBQUQsRUFBT0MsU0FBUyxDQUFDRSxLQUFqQixDQUF6QjtBQUNEOztBQUNELFNBQU9GLFNBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE9BQU8sU0FBU0ksaUNBQVQsR0FBcUY7QUFBQSxNQUExQ0wsSUFBMEMsdUVBQW5DLEVBQW1DO0FBQUEsTUFBL0JNLGFBQStCO0FBQzFGLE1BQUlBLGFBQWEsS0FBSyxDQUF0QixFQUF5QixPQUFPLENBQVAsQ0FEaUUsQ0FHMUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUMsYUFBYSxHQUFHLElBQXBCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHSCxhQUFhLEdBQUcsQ0FBN0IsRUFBZ0NHLENBQUMsSUFBSSxDQUFMLElBQVVGLFlBQVksSUFBSSxDQUExRCxFQUE2REUsQ0FBQyxFQUE5RCxFQUFrRTtBQUNoRSxZQUFRVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JELENBQWhCLENBQVI7QUFDRSxXQUFLLEVBQUw7QUFBUztBQUNQOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BGLFFBQUFBLFlBQVk7QUFDWkMsUUFBQUEsYUFBYSxHQUFHLEtBQWhCO0FBQ0E7O0FBQ0Y7QUFDRSxlQUFPRCxZQUFQO0FBUko7QUFVRDs7QUFDRCxTQUFPQyxhQUFhLEdBQUcsQ0FBSCxHQUFPRCxZQUEzQjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsT0FBTyxTQUFTSSxnQ0FBVCxHQUFvRjtBQUFBLE1BQTFDWCxJQUEwQyx1RUFBbkMsRUFBbUM7QUFBQSxNQUEvQk0sYUFBK0I7QUFDekYsTUFBSUEsYUFBYSxLQUFLTixJQUFJLENBQUNFLE1BQUwsR0FBYyxDQUFwQyxFQUF1QyxPQUFPLENBQVAsQ0FEa0QsQ0FHekY7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUssWUFBWSxHQUFHLENBQW5CO0FBQ0EsTUFBSUssWUFBWSxHQUFHLElBQW5COztBQUNBLE9BQUssSUFBSUgsQ0FBQyxHQUFHSCxhQUFiLEVBQTRCRyxDQUFDLEdBQUdULElBQUksQ0FBQ0UsTUFBVCxJQUFtQkssWUFBWSxJQUFJLENBQS9ELEVBQWtFRSxDQUFDLEVBQW5FLEVBQXVFO0FBQ3JFLFlBQVFULElBQUksQ0FBQ1UsVUFBTCxDQUFnQkQsQ0FBaEIsQ0FBUjtBQUNFLFdBQUssRUFBTDtBQUNFOztBQUNGLFdBQUssRUFBTDtBQUFTO0FBQ1BGLFVBQUFBLFlBQVk7QUFDWkssVUFBQUEsWUFBWSxHQUFHLEtBQWY7QUFDQTtBQUNEOztBQUNEO0FBQ0UsZUFBT0wsWUFBUDtBQVRKO0FBV0Q7O0FBQ0QsU0FBT0ssWUFBWSxHQUFHLENBQUgsR0FBT0wsWUFBMUI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRSYW5nZSB9IGZyb20gJy4uL2NvbW1hbmRzJztcclxuaW1wb3J0IGdldFN1cnJvdW5kaW5nV29yZCBmcm9tICcuL2dldFN1cnJvdW5kaW5nV29yZCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRTZWN0aW9uIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgc2VsZWN0aW9uOiBUZXh0UmFuZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RXb3JkKHsgdGV4dCwgc2VsZWN0aW9uIH06IFRleHRTZWN0aW9uKTogVGV4dFJhbmdlIHtcclxuICBpZiAodGV4dCAmJiB0ZXh0Lmxlbmd0aCAmJiBzZWxlY3Rpb24uc3RhcnQgPT09IHNlbGVjdGlvbi5lbmQpIHtcclxuICAgIC8vIHRoZSB1c2VyIGlzIHBvaW50aW5nIHRvIGEgd29yZFxyXG4gICAgcmV0dXJuIGdldFN1cnJvdW5kaW5nV29yZCh0ZXh0LCBzZWxlY3Rpb24uc3RhcnQpO1xyXG4gIH1cclxuICByZXR1cm4gc2VsZWN0aW9uO1xyXG59XHJcblxyXG4vKipcclxuICogIEdldHMgdGhlIG51bWJlciBvZiBsaW5lLWJyZWFrcyB0aGF0IHdvdWxkIGhhdmUgdG8gYmUgaW5zZXJ0ZWQgYmVmb3JlIHRoZSBnaXZlbiAnc3RhcnRQb3NpdGlvbidcclxuICogIHRvIG1ha2Ugc3VyZSB0aGVyZSdzIGFuIGVtcHR5IGxpbmUgYmV0d2VlbiAnc3RhcnRQb3NpdGlvbicgYW5kIHRoZSBwcmV2aW91cyB0ZXh0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJlYWtzTmVlZGVkRm9yRW1wdHlMaW5lQmVmb3JlKHRleHQgPSAnJywgc3RhcnRQb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAoc3RhcnRQb3NpdGlvbiA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gIC8vIHJ1bGVzOlxyXG4gIC8vIC0gSWYgd2UncmUgaW4gdGhlIGZpcnN0IGxpbmUsIG5vIGJyZWFrcyBhcmUgbmVlZGVkXHJcbiAgLy8gLSBPdGhlcndpc2UgdGhlcmUgbXVzdCBiZSAyIGJyZWFrcyBiZWZvcmUgdGhlIHByZXZpb3VzIGNoYXJhY3Rlci4gRGVwZW5kaW5nIG9uIGhvdyBtYW55IGJyZWFrcyBleGlzdCBhbHJlYWR5LCB3ZVxyXG4gIC8vICAgICAgbWF5IG5lZWQgdG8gaW5zZXJ0IDAsIDEgb3IgMiBicmVha3NcclxuXHJcbiAgbGV0IG5lZWRlZEJyZWFrcyA9IDI7XHJcbiAgbGV0IGlzSW5GaXJzdExpbmUgPSB0cnVlO1xyXG4gIGZvciAobGV0IGkgPSBzdGFydFBvc2l0aW9uIC0gMTsgaSA+PSAwICYmIG5lZWRlZEJyZWFrcyA+PSAwOyBpLS0pIHtcclxuICAgIHN3aXRjaCAodGV4dC5jaGFyQ29kZUF0KGkpKSB7XHJcbiAgICAgIGNhc2UgMzI6IC8vIGJsYW5rIHNwYWNlXHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIGNhc2UgMTA6IC8vIGxpbmUgYnJlYWtcclxuICAgICAgICBuZWVkZWRCcmVha3MtLTtcclxuICAgICAgICBpc0luRmlyc3RMaW5lID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG5lZWRlZEJyZWFrcztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGlzSW5GaXJzdExpbmUgPyAwIDogbmVlZGVkQnJlYWtzO1xyXG59XHJcblxyXG4vKipcclxuICogIEdldHMgdGhlIG51bWJlciBvZiBsaW5lLWJyZWFrcyB0aGF0IHdvdWxkIGhhdmUgdG8gYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGdpdmVuICdzdGFydFBvc2l0aW9uJ1xyXG4gKiAgdG8gbWFrZSBzdXJlIHRoZXJlJ3MgYW4gZW1wdHkgbGluZSBiZXR3ZWVuICdzdGFydFBvc2l0aW9uJyBhbmQgdGhlIG5leHQgdGV4dFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyZWFrc05lZWRlZEZvckVtcHR5TGluZUFmdGVyKHRleHQgPSAnJywgc3RhcnRQb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAoc3RhcnRQb3NpdGlvbiA9PT0gdGV4dC5sZW5ndGggLSAxKSByZXR1cm4gMDtcclxuXHJcbiAgLy8gcnVsZXM6XHJcbiAgLy8gLSBJZiB3ZSdyZSBpbiB0aGUgZmlyc3QgbGluZSwgbm8gYnJlYWtzIGFyZSBuZWVkZWRcclxuICAvLyAtIE90aGVyd2lzZSB0aGVyZSBtdXN0IGJlIDIgYnJlYWtzIGJlZm9yZSB0aGUgcHJldmlvdXMgY2hhcmFjdGVyLiBEZXBlbmRpbmcgb24gaG93IG1hbnkgYnJlYWtzIGV4aXN0IGFscmVhZHksIHdlXHJcbiAgLy8gICAgICBtYXkgbmVlZCB0byBpbnNlcnQgMCwgMSBvciAyIGJyZWFrc1xyXG5cclxuICBsZXQgbmVlZGVkQnJlYWtzID0gMjtcclxuICBsZXQgaXNJbkxhc3RMaW5lID0gdHJ1ZTtcclxuICBmb3IgKGxldCBpID0gc3RhcnRQb3NpdGlvbjsgaSA8IHRleHQubGVuZ3RoICYmIG5lZWRlZEJyZWFrcyA+PSAwOyBpKyspIHtcclxuICAgIHN3aXRjaCAodGV4dC5jaGFyQ29kZUF0KGkpKSB7XHJcbiAgICAgIGNhc2UgMzI6XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIGNhc2UgMTA6IHtcclxuICAgICAgICBuZWVkZWRCcmVha3MtLTtcclxuICAgICAgICBpc0luTGFzdExpbmUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBuZWVkZWRCcmVha3M7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBpc0luTGFzdExpbmUgPyAwIDogbmVlZGVkQnJlYWtzO1xyXG59XHJcbiJdfQ==