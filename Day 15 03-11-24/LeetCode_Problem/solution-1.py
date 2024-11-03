# Definition for singly-linked list node
class ListNode:
    def __init__(self, val=0, next=None):
        # Initialize the node's value, defaulting to 0 if not provided
        self.val = val
        # Initialize the next pointer, defaulting to None if not provided
        self.next = next

class Solution:
    def addTwoNumbers(self, l1, l2):
        # Create a dummy head node to simplify edge cases
        dummy_head = ListNode(0)
        # Pointer to the current node in the result list
        current = dummy_head
        # Variable to store carry-over value during addition
        carry = 0

        # Loop through both linked lists until both are fully traversed
        while l1 is not None or l2 is not None:
            # Get the current value from l1, or 0 if l1 is exhausted
            x = l1.val if l1 is not None else 0
            # Get the current value from l2, or 0 if l2 is exhausted
            y = l2.val if l2 is not None else 0
            # Calculate the sum of current digits and carry
            total = carry + x + y
            # Update carry for the next iteration
            carry = total // 10
            # Create a new node with the digit value of the sum
            current.next = ListNode(total % 10)
            # Move to the next node in the result list
            current = current.next

            # Advance l1 and l2 to their next nodes if available
            if l1 is not None:
                l1 = l1.next
            if l2 is not None:
                l2 = l2.next

        # If there's a remaining carry, add a new node with its value
        if carry > 0:
            current.next = ListNode(carry)

        # Return the next node of dummy head, which is the start of the result list
        return dummy_head.next

# Function to print the linked list
def print_list(node):
    result = []
    # Traverse the linked list and collect values
    while node:
        result.append(node.val)
        node = node.next
    # Print the collected values as a list
    print(result)

# Example 1
l1 = ListNode(2, ListNode(4, ListNode(3)))
l2 = ListNode(5, ListNode(6, ListNode(4)))
result = Solution().addTwoNumbers(l1, l2)
print_list(result)  # Output: [7, 0, 8]

# Example 2
l1 = ListNode(0)
l2 = ListNode(0)
result = Solution().addTwoNumbers(l1, l2)
print_list(result)  # Output: [0]

# Example 3
l1 = ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9, ListNode(9)))))))
l2 = ListNode(9, ListNode(9, ListNode(9, ListNode(9))))
result = Solution().addTwoNumbers(l1, l2)
print_list(result)  # Output: [8, 9, 9, 9, 0, 0, 0, 1]
