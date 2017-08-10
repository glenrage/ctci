'use strict';
//2.1 Write code to remove duplicates from an unsorted linked list
/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */

export function removeDuplicatesSet(list) {
  if (!list) {
   return list;
 }

 let seen = new Set(),
   node = list;
 // add head
 seen.add(node.val);

 while (node.next) {

   if (seen.has(node.next.val)) {
     // skip next node
     node.next = node.next.next;
   }
   else {
     seen.add(node.next.val);
     node = node.next;
   }
 }

 return list; // return list, head will never change
}

// // |---~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~---|
//
// // O(Nˆ2) TIME --- O(1) SPACE
//
//
// export function removeDupes2(head) {
//   if (!head || !head.next) return head;
//
//   while (head) {
//     let current = head;
//     while (current.next) {
//       if (current.next.value === head.value) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//     head = head.next;
//   }
// }
