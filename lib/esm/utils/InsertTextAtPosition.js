/**
 * The MIT License
 * Copyright (c) 2018 Dmitriy Kubyshkin
 * Copied from https://github.com/grassator/insert-text-at-cursor
 */
var browserSupportsTextareaTextNodes;
/**
 * @param {HTMLElement} input
 * @return {boolean}
 */

function canManipulateViaTextNodes(input) {
  if (input.nodeName !== 'TEXTAREA') {
    return false;
  }

  if (typeof browserSupportsTextareaTextNodes === 'undefined') {
    var textarea = document.createElement('textarea');
    textarea.value = '1';
    browserSupportsTextareaTextNodes = !!textarea.firstChild;
  }

  return browserSupportsTextareaTextNodes;
}
/**
 * @param {HTMLTextAreaElement|HTMLInputElement} input
 * @param {string} text
 * @returns {void}
 */


export default function insertTextAtPosition(input, text) {
  // Most of the used APIs only work with the field selected
  input.focus(); // IE 8-10

  if (document.selection) {
    var ieRange = document.selection.createRange();
    ieRange.text = text; // Move cursor after the inserted text

    ieRange.collapse(false
    /* to the end */
    );
    ieRange.select();
    return;
  } // Webkit + Edge


  var isSuccess = document.execCommand('insertText', false, text);

  if (!isSuccess) {
    var start = input.selectionStart;
    var end = input.selectionEnd; // Firefox (non-standard method)

    if (typeof input.setRangeText === 'function') {
      input.setRangeText(text);
    } else {
      // To make a change we just need a Range, not a Selection
      var range = document.createRange();
      var textNode = document.createTextNode(text);

      if (canManipulateViaTextNodes(input)) {
        var node = input.firstChild; // If textarea is empty, just insert the text

        if (!node) {
          input.appendChild(textNode);
        } else {
          // Otherwise we need to find a nodes for start and end
          var offset = 0;
          var startNode = null;
          var endNode = null;

          while (node && (startNode === null || endNode === null)) {
            var nodeLength = node.nodeValue.length; // if start of the selection falls into current node

            if (start >= offset && start <= offset + nodeLength) {
              range.setStart(startNode = node, start - offset);
            } // if end of the selection falls into current node


            if (end >= offset && end <= offset + nodeLength) {
              range.setEnd(endNode = node, end - offset);
            }

            offset += nodeLength;
            node = node.nextSibling;
          } // If there is some text selected, remove it as we should replace it


          if (start !== end) {
            range.deleteContents();
          }
        }
      } // If the node is a textarea and the range doesn't span outside the element
      //
      // Get the commonAncestorContainer of the selected range and test its type
      // If the node is of type `#text` it means that we're still working with text nodes within our textarea element
      // otherwise, if it's of type `#document` for example it means our selection spans outside the textarea.


      if (canManipulateViaTextNodes(input) && range.commonAncestorContainer.nodeName === '#text') {
        // Finally insert a new node. The browser will automatically split start and end nodes into two if necessary
        range.insertNode(textNode);
      } else {
        // If the node is not a textarea or the range spans outside a textarea the only way is to replace the whole value
        var value = input.value;
        input.value = value.slice(0, start) + text + value.slice(end);
      }
    } // Correct the cursor position to be at the end of the insertion


    input.setSelectionRange(start + text.length, start + text.length); // Notify any possible listeners of the change

    var e = document.createEvent('UIEvent');
    e.initEvent('input', true, false);
    input.dispatchEvent(e);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9JbnNlcnRUZXh0QXRQb3NpdGlvbi50cyJdLCJuYW1lcyI6WyJicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2RlcyIsImNhbk1hbmlwdWxhdGVWaWFUZXh0Tm9kZXMiLCJpbnB1dCIsIm5vZGVOYW1lIiwidGV4dGFyZWEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ2YWx1ZSIsImZpcnN0Q2hpbGQiLCJpbnNlcnRUZXh0QXRQb3NpdGlvbiIsInRleHQiLCJmb2N1cyIsInNlbGVjdGlvbiIsImllUmFuZ2UiLCJjcmVhdGVSYW5nZSIsImNvbGxhcHNlIiwic2VsZWN0IiwiaXNTdWNjZXNzIiwiZXhlY0NvbW1hbmQiLCJzdGFydCIsInNlbGVjdGlvblN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uRW5kIiwic2V0UmFuZ2VUZXh0IiwicmFuZ2UiLCJ0ZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwibm9kZSIsImFwcGVuZENoaWxkIiwib2Zmc2V0Iiwic3RhcnROb2RlIiwiZW5kTm9kZSIsIm5vZGVMZW5ndGgiLCJub2RlVmFsdWUiLCJsZW5ndGgiLCJzZXRTdGFydCIsInNldEVuZCIsIm5leHRTaWJsaW5nIiwiZGVsZXRlQ29udGVudHMiLCJjb21tb25BbmNlc3RvckNvbnRhaW5lciIsImluc2VydE5vZGUiLCJzbGljZSIsInNldFNlbGVjdGlvblJhbmdlIiwiZSIsImNyZWF0ZUV2ZW50IiwiaW5pdEV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLGdDQUFKO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0MseUJBQVQsQ0FBbUNDLEtBQW5DLEVBQWtGO0FBQ2hGLE1BQUlBLEtBQUssQ0FBQ0MsUUFBTixLQUFtQixVQUF2QixFQUFtQztBQUNqQyxXQUFPLEtBQVA7QUFDRDs7QUFDRCxNQUFJLE9BQU9ILGdDQUFQLEtBQTRDLFdBQWhELEVBQTZEO0FBQzNELFFBQU1JLFFBQTZCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUF0QztBQUNBRixJQUFBQSxRQUFRLENBQUNHLEtBQVQsR0FBaUIsR0FBakI7QUFDQVAsSUFBQUEsZ0NBQWdDLEdBQUcsQ0FBQyxDQUFDSSxRQUFRLENBQUNJLFVBQTlDO0FBQ0Q7O0FBQ0QsU0FBT1IsZ0NBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLGVBQWUsU0FBU1Msb0JBQVQsQ0FBOEJQLEtBQTlCLEVBQTZFUSxJQUE3RSxFQUEyRjtBQUN4RztBQUNBUixFQUFBQSxLQUFLLENBQUNTLEtBQU4sR0FGd0csQ0FJeEc7O0FBQ0EsTUFBS04sUUFBRCxDQUFrQk8sU0FBdEIsRUFBaUM7QUFDL0IsUUFBTUMsT0FBTyxHQUFJUixRQUFELENBQWtCTyxTQUFsQixDQUE0QkUsV0FBNUIsRUFBaEI7QUFDQUQsSUFBQUEsT0FBTyxDQUFDSCxJQUFSLEdBQWVBLElBQWYsQ0FGK0IsQ0FJL0I7O0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0UsUUFBUixDQUFpQjtBQUFNO0FBQXZCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csTUFBUjtBQUVBO0FBQ0QsR0FkdUcsQ0FnQnhHOzs7QUFDQSxNQUFNQyxTQUFTLEdBQUdaLFFBQVEsQ0FBQ2EsV0FBVCxDQUFxQixZQUFyQixFQUFtQyxLQUFuQyxFQUEwQ1IsSUFBMUMsQ0FBbEI7O0FBQ0EsTUFBSSxDQUFDTyxTQUFMLEVBQWdCO0FBQ2QsUUFBTUUsS0FBSyxHQUFHakIsS0FBSyxDQUFDa0IsY0FBcEI7QUFDQSxRQUFNQyxHQUFHLEdBQUduQixLQUFLLENBQUNvQixZQUFsQixDQUZjLENBR2Q7O0FBQ0EsUUFBSSxPQUFPcEIsS0FBSyxDQUFDcUIsWUFBYixLQUE4QixVQUFsQyxFQUE4QztBQUM1Q3JCLE1BQUFBLEtBQUssQ0FBQ3FCLFlBQU4sQ0FBbUJiLElBQW5CO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxVQUFNYyxLQUFLLEdBQUduQixRQUFRLENBQUNTLFdBQVQsRUFBZDtBQUNBLFVBQU1XLFFBQVEsR0FBR3BCLFFBQVEsQ0FBQ3FCLGNBQVQsQ0FBd0JoQixJQUF4QixDQUFqQjs7QUFFQSxVQUFJVCx5QkFBeUIsQ0FBQ0MsS0FBRCxDQUE3QixFQUFzQztBQUNwQyxZQUFJeUIsSUFBSSxHQUFHekIsS0FBSyxDQUFDTSxVQUFqQixDQURvQyxDQUdwQzs7QUFDQSxZQUFJLENBQUNtQixJQUFMLEVBQVc7QUFDVHpCLFVBQUFBLEtBQUssQ0FBQzBCLFdBQU4sQ0FBa0JILFFBQWxCO0FBQ0QsU0FGRCxNQUVPO0FBQ0w7QUFDQSxjQUFJSSxNQUFNLEdBQUcsQ0FBYjtBQUNBLGNBQUlDLFNBQVMsR0FBRyxJQUFoQjtBQUNBLGNBQUlDLE9BQU8sR0FBRyxJQUFkOztBQUVBLGlCQUFPSixJQUFJLEtBQUtHLFNBQVMsS0FBSyxJQUFkLElBQXNCQyxPQUFPLEtBQUssSUFBdkMsQ0FBWCxFQUF5RDtBQUN2RCxnQkFBTUMsVUFBVSxHQUFHTCxJQUFJLENBQUNNLFNBQUwsQ0FBZ0JDLE1BQW5DLENBRHVELENBR3ZEOztBQUNBLGdCQUFJZixLQUFLLElBQUlVLE1BQVQsSUFBbUJWLEtBQUssSUFBSVUsTUFBTSxHQUFHRyxVQUF6QyxFQUFxRDtBQUNuRFIsY0FBQUEsS0FBSyxDQUFDVyxRQUFOLENBQWdCTCxTQUFTLEdBQUdILElBQTVCLEVBQW1DUixLQUFLLEdBQUdVLE1BQTNDO0FBQ0QsYUFOc0QsQ0FRdkQ7OztBQUNBLGdCQUFJUixHQUFHLElBQUlRLE1BQVAsSUFBaUJSLEdBQUcsSUFBSVEsTUFBTSxHQUFHRyxVQUFyQyxFQUFpRDtBQUMvQ1IsY0FBQUEsS0FBSyxDQUFDWSxNQUFOLENBQWNMLE9BQU8sR0FBR0osSUFBeEIsRUFBK0JOLEdBQUcsR0FBR1EsTUFBckM7QUFDRDs7QUFFREEsWUFBQUEsTUFBTSxJQUFJRyxVQUFWO0FBQ0FMLFlBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDVSxXQUFaO0FBQ0QsV0FyQkksQ0F1Qkw7OztBQUNBLGNBQUlsQixLQUFLLEtBQUtFLEdBQWQsRUFBbUI7QUFDakJHLFlBQUFBLEtBQUssQ0FBQ2MsY0FBTjtBQUNEO0FBQ0Y7QUFDRixPQXZDSSxDQXlDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJckMseUJBQXlCLENBQUNDLEtBQUQsQ0FBekIsSUFBb0NzQixLQUFLLENBQUNlLHVCQUFOLENBQThCcEMsUUFBOUIsS0FBMkMsT0FBbkYsRUFBNEY7QUFDMUY7QUFDQXFCLFFBQUFBLEtBQUssQ0FBQ2dCLFVBQU4sQ0FBaUJmLFFBQWpCO0FBQ0QsT0FIRCxNQUdPO0FBQ0w7QUFDQSxZQUFNbEIsS0FBSyxHQUFHTCxLQUFLLENBQUNLLEtBQXBCO0FBQ0FMLFFBQUFBLEtBQUssQ0FBQ0ssS0FBTixHQUFjQSxLQUFLLENBQUNrQyxLQUFOLENBQVksQ0FBWixFQUFldEIsS0FBZixJQUF3QlQsSUFBeEIsR0FBK0JILEtBQUssQ0FBQ2tDLEtBQU4sQ0FBWXBCLEdBQVosQ0FBN0M7QUFDRDtBQUNGLEtBNURhLENBOERkOzs7QUFDQW5CLElBQUFBLEtBQUssQ0FBQ3dDLGlCQUFOLENBQXdCdkIsS0FBSyxHQUFHVCxJQUFJLENBQUN3QixNQUFyQyxFQUE2Q2YsS0FBSyxHQUFHVCxJQUFJLENBQUN3QixNQUExRCxFQS9EYyxDQWlFZDs7QUFDQSxRQUFNUyxDQUFDLEdBQUd0QyxRQUFRLENBQUN1QyxXQUFULENBQXFCLFNBQXJCLENBQVY7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDRSxTQUFGLENBQVksT0FBWixFQUFxQixJQUFyQixFQUEyQixLQUEzQjtBQUNBM0MsSUFBQUEsS0FBSyxDQUFDNEMsYUFBTixDQUFvQkgsQ0FBcEI7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoZSBNSVQgTGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTggRG1pdHJpeSBLdWJ5c2hraW5cclxuICogQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2dyYXNzYXRvci9pbnNlcnQtdGV4dC1hdC1jdXJzb3JcclxuICovXHJcblxyXG5sZXQgYnJvd3NlclN1cHBvcnRzVGV4dGFyZWFUZXh0Tm9kZXM6IGFueTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBpbnB1dFxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gY2FuTWFuaXB1bGF0ZVZpYVRleHROb2RlcyhpbnB1dDogSFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQpIHtcclxuICBpZiAoaW5wdXQubm9kZU5hbWUgIT09ICdURVhUQVJFQScpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2RlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIGNvbnN0IHRleHRhcmVhOiBIVE1MVGV4dEFyZWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHRleHRhcmVhLnZhbHVlID0gJzEnO1xyXG4gICAgYnJvd3NlclN1cHBvcnRzVGV4dGFyZWFUZXh0Tm9kZXMgPSAhIXRleHRhcmVhLmZpcnN0Q2hpbGQ7XHJcbiAgfVxyXG4gIHJldHVybiBicm93c2VyU3VwcG9ydHNUZXh0YXJlYVRleHROb2RlcztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SFRNTFRleHRBcmVhRWxlbWVudHxIVE1MSW5wdXRFbGVtZW50fSBpbnB1dFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxyXG4gKiBAcmV0dXJucyB7dm9pZH1cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydFRleHRBdFBvc2l0aW9uKGlucHV0OiBIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCwgdGV4dDogc3RyaW5nKSB7XHJcbiAgLy8gTW9zdCBvZiB0aGUgdXNlZCBBUElzIG9ubHkgd29yayB3aXRoIHRoZSBmaWVsZCBzZWxlY3RlZFxyXG4gIGlucHV0LmZvY3VzKCk7XHJcblxyXG4gIC8vIElFIDgtMTBcclxuICBpZiAoKGRvY3VtZW50IGFzIGFueSkuc2VsZWN0aW9uKSB7XHJcbiAgICBjb25zdCBpZVJhbmdlID0gKGRvY3VtZW50IGFzIGFueSkuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKCk7XHJcbiAgICBpZVJhbmdlLnRleHQgPSB0ZXh0O1xyXG5cclxuICAgIC8vIE1vdmUgY3Vyc29yIGFmdGVyIHRoZSBpbnNlcnRlZCB0ZXh0XHJcbiAgICBpZVJhbmdlLmNvbGxhcHNlKGZhbHNlIC8qIHRvIHRoZSBlbmQgKi8pO1xyXG4gICAgaWVSYW5nZS5zZWxlY3QoKTtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBXZWJraXQgKyBFZGdlXHJcbiAgY29uc3QgaXNTdWNjZXNzID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2luc2VydFRleHQnLCBmYWxzZSwgdGV4dCk7XHJcbiAgaWYgKCFpc1N1Y2Nlc3MpIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnQhO1xyXG4gICAgY29uc3QgZW5kID0gaW5wdXQuc2VsZWN0aW9uRW5kITtcclxuICAgIC8vIEZpcmVmb3ggKG5vbi1zdGFuZGFyZCBtZXRob2QpXHJcbiAgICBpZiAodHlwZW9mIGlucHV0LnNldFJhbmdlVGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBpbnB1dC5zZXRSYW5nZVRleHQodGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBUbyBtYWtlIGEgY2hhbmdlIHdlIGp1c3QgbmVlZCBhIFJhbmdlLCBub3QgYSBTZWxlY3Rpb25cclxuICAgICAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gICAgICBjb25zdCB0ZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xyXG5cclxuICAgICAgaWYgKGNhbk1hbmlwdWxhdGVWaWFUZXh0Tm9kZXMoaW5wdXQpKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBpbnB1dC5maXJzdENoaWxkO1xyXG5cclxuICAgICAgICAvLyBJZiB0ZXh0YXJlYSBpcyBlbXB0eSwganVzdCBpbnNlcnQgdGhlIHRleHRcclxuICAgICAgICBpZiAoIW5vZGUpIHtcclxuICAgICAgICAgIGlucHV0LmFwcGVuZENoaWxkKHRleHROb2RlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIG5lZWQgdG8gZmluZCBhIG5vZGVzIGZvciBzdGFydCBhbmQgZW5kXHJcbiAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICAgIGxldCBzdGFydE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgbGV0IGVuZE5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgIHdoaWxlIChub2RlICYmIChzdGFydE5vZGUgPT09IG51bGwgfHwgZW5kTm9kZSA9PT0gbnVsbCkpIHtcclxuICAgICAgICAgICAgY29uc3Qgbm9kZUxlbmd0aCA9IG5vZGUubm9kZVZhbHVlIS5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBzdGFydCBvZiB0aGUgc2VsZWN0aW9uIGZhbGxzIGludG8gY3VycmVudCBub2RlXHJcbiAgICAgICAgICAgIGlmIChzdGFydCA+PSBvZmZzZXQgJiYgc3RhcnQgPD0gb2Zmc2V0ICsgbm9kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KChzdGFydE5vZGUgPSBub2RlKSwgc3RhcnQgLSBvZmZzZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBlbmQgb2YgdGhlIHNlbGVjdGlvbiBmYWxscyBpbnRvIGN1cnJlbnQgbm9kZVxyXG4gICAgICAgICAgICBpZiAoZW5kID49IG9mZnNldCAmJiBlbmQgPD0gb2Zmc2V0ICsgbm9kZUxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHJhbmdlLnNldEVuZCgoZW5kTm9kZSA9IG5vZGUpLCBlbmQgLSBvZmZzZXQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gbm9kZUxlbmd0aDtcclxuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgc29tZSB0ZXh0IHNlbGVjdGVkLCByZW1vdmUgaXQgYXMgd2Ugc2hvdWxkIHJlcGxhY2UgaXRcclxuICAgICAgICAgIGlmIChzdGFydCAhPT0gZW5kKSB7XHJcbiAgICAgICAgICAgIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBJZiB0aGUgbm9kZSBpcyBhIHRleHRhcmVhIGFuZCB0aGUgcmFuZ2UgZG9lc24ndCBzcGFuIG91dHNpZGUgdGhlIGVsZW1lbnRcclxuICAgICAgLy9cclxuICAgICAgLy8gR2V0IHRoZSBjb21tb25BbmNlc3RvckNvbnRhaW5lciBvZiB0aGUgc2VsZWN0ZWQgcmFuZ2UgYW5kIHRlc3QgaXRzIHR5cGVcclxuICAgICAgLy8gSWYgdGhlIG5vZGUgaXMgb2YgdHlwZSBgI3RleHRgIGl0IG1lYW5zIHRoYXQgd2UncmUgc3RpbGwgd29ya2luZyB3aXRoIHRleHQgbm9kZXMgd2l0aGluIG91ciB0ZXh0YXJlYSBlbGVtZW50XHJcbiAgICAgIC8vIG90aGVyd2lzZSwgaWYgaXQncyBvZiB0eXBlIGAjZG9jdW1lbnRgIGZvciBleGFtcGxlIGl0IG1lYW5zIG91ciBzZWxlY3Rpb24gc3BhbnMgb3V0c2lkZSB0aGUgdGV4dGFyZWEuXHJcbiAgICAgIGlmIChjYW5NYW5pcHVsYXRlVmlhVGV4dE5vZGVzKGlucHV0KSAmJiByYW5nZS5jb21tb25BbmNlc3RvckNvbnRhaW5lci5ub2RlTmFtZSA9PT0gJyN0ZXh0Jykge1xyXG4gICAgICAgIC8vIEZpbmFsbHkgaW5zZXJ0IGEgbmV3IG5vZGUuIFRoZSBicm93c2VyIHdpbGwgYXV0b21hdGljYWxseSBzcGxpdCBzdGFydCBhbmQgZW5kIG5vZGVzIGludG8gdHdvIGlmIG5lY2Vzc2FyeVxyXG4gICAgICAgIHJhbmdlLmluc2VydE5vZGUodGV4dE5vZGUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIElmIHRoZSBub2RlIGlzIG5vdCBhIHRleHRhcmVhIG9yIHRoZSByYW5nZSBzcGFucyBvdXRzaWRlIGEgdGV4dGFyZWEgdGhlIG9ubHkgd2F5IGlzIHRvIHJlcGxhY2UgdGhlIHdob2xlIHZhbHVlXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIHRleHQgKyB2YWx1ZS5zbGljZShlbmQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29ycmVjdCB0aGUgY3Vyc29yIHBvc2l0aW9uIHRvIGJlIGF0IHRoZSBlbmQgb2YgdGhlIGluc2VydGlvblxyXG4gICAgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQgKyB0ZXh0Lmxlbmd0aCwgc3RhcnQgKyB0ZXh0Lmxlbmd0aCk7XHJcblxyXG4gICAgLy8gTm90aWZ5IGFueSBwb3NzaWJsZSBsaXN0ZW5lcnMgb2YgdGhlIGNoYW5nZVxyXG4gICAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdVSUV2ZW50Jyk7XHJcbiAgICBlLmluaXRFdmVudCgnaW5wdXQnLCB0cnVlLCBmYWxzZSk7XHJcbiAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gIH1cclxufVxyXG4iXX0=