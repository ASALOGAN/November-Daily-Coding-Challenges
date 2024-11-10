class ListNode:
    def __init__(self, x):
        # Initialize a node with a value and a pointer to the next node
        self.val = x
        self.next = None

def hasCycle(head):
    # If the list is empty or has only one node, it cannot have a cycle
    if not head or not head.next:
        return False

    # Initialize two pointers, slow and fast
    slow = head  # Slow pointer starts at the head
    fast = head.next  # Fast pointer starts at the second node

    # Loop until the slow and fast pointers meet
    while slow != fast:
        # If fast pointer reaches the end, there is no cycle
        if not fast or not fast.next:
            return False
        # Move slow pointer one step
        slow = slow.next
        # Move fast pointer two steps
        fast = fast.next.next

    # If slow and fast pointers meet, there is a cycle
    return True
