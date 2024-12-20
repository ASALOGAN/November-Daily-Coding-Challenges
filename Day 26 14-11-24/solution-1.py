def strStr(haystack: str, needle: str) -> int:
    # If 'needle' is an empty string, return 0 as per problem statement
    if needle == "":
        return 0
    # Use the built-in find method to find the first occurrence of 'needle' in 'haystack'
    # Returns the index if found, otherwise returns -1
    return haystack.find(needle)
