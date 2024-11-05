def contains_duplicate(nums):
    """
    Check if there are any duplicates in the list of numbers.

    :param nums: List[int] - A list of integers.
    :return: bool - True if any integer appears at least twice, False otherwise.
    """
    num_set = set()
    for num in nums:
        if num in num_set:
            return True
        num_set.add(num)
    return False
