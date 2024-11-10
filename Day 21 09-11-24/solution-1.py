# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        dummy = ListNode(0, head)
        first = dummy
        second = dummy
        
        # Move first n+1 steps ahead
        for _ in range(n + 1):
            first = first.next
        
        # Move first to the end, maintaining the gap
        while first:
            first = first.next
            second = second.next
        
        # Skip the desired node
        second.next = second.next.next
        
        return dummy.next
