def is_power_of_three(n: int) -> bool:
    # If 'n' is less than or equal to 0, it cannot be a power of three
    if n <= 0:
        return False
    # Continuously divide 'n' by 3 as long as it is divisible by 3
    while n % 3 == 0:
        # Update 'n' to be the result of the division
        n //= 3
    # If 'n' is reduced to 1, it is a power of three; otherwise, it is not
    return n == 1
