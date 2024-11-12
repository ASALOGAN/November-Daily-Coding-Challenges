class ListNode:
    def __init__(self, val=0, next=None):
        # Initialize a node with a value and a pointer to the next node
        self.val = val
        self.next = next

def middleNode(head: ListNode) -> ListNode:
    # Initialize two pointers, slow and fast, both starting at the head of the list
    slow = head
    fast = head
    
    # Traverse the list with the fast pointer moving two steps and the slow pointer moving one step
    while fast and fast.next:
        slow = slow.next  # Move slow pointer one step
        fast = fast.next.next  # Move fast pointer two steps
    
    # When fast pointer reaches the end, slow pointer will be at the middle node
    return slow

# Example usage:
# Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
head.next.next.next.next.next = ListNode(6)

# Find the middle node
middle = middleNode(head)
print(middle.val)  # Output: 4
